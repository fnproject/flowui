import React from 'react';

import styles from './graphtimeline.css'
import ZoomLine from "./ZoomLine.jsx";

class GraphTimeline extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            onNodeSelected: props.onNodeSelected,
            graph: props.graph,
            live: props.live,
            selectedNode: null,
            relativeTimestamp: Date.now(),
            cursorTs: props.graph.created,
            intervalTimer: -1,
            responseOfSelected: null,
            scrolling: false,
            innerViewWidth:1024,
            viewPortWidth: 850,
            height:300,
            pxPerMs:0.06,
            wallPaperWidth:30000,
            wallPaperHeight:5000,
            currentlyRunning: null,
            heightToMove: 0,
            dragging: false,
            dragStartY: 0,
            scrollPosition: 0,
            scrollBarHeight: 300,
            hasMoved: false,
            currentHeight: null,
            pendingNodes: [],
            graphNode: props.graph.getNodes().shift(),
        };
        this.selectNode = this.selectNode.bind(this);
        this.updateScroll = this.updateScroll.bind(this);
        this.updateScrollY = this.updateScrollY.bind(this);
        this.onDragStart = this.onDragStart.bind(this);
        //
        // this.state.graph.On('model.GraphCompletedEvent', (evt) => {
        //     console.log("Graph completed");
        //     this.setLive(false);
        // });
    }

    componentWillReceiveProps(props) {
      Object.assign(this.state,{
        onNodeSelected: props.onNodeSelected,
        graph: props.graph,
        live: props.live,
        relativeTimestamp: Date.now(),
        cursorTs: props.graph.created,
      });
      this.setState(this.state);
    }

    componentDidMount() {
        if (this.state.live) {
            this.setLive(this.state.live)
        }
    }

    updateScroll(ts) {
        if (this.state.live) {
            this.setLive(false);
        }
        //this.state.relativeTimestamp = ts;
        this.state.scrolling = true;
        this.state.cursorTs = ts;
        this.setState(this.state);
    }

    updateScrollY(s) {
      if (this.state.live) {
          this.setLive(false);
      }
      //this.state.relativeTimestamp = ts;
      this.state.scrolling = true;
      this.state.scrollPosition = s;
      this.setState(this.state);
    }

    setLive(live) {
        this.state.live = live;
        if (live) {
            this.state.intervalTimer = setInterval(() => {
                this.state.relativeTimestamp = Date.now();
                this.setState(this.state);
            }, 50);
        } else {
            if (this.state.intervalTimer > 0) {
                clearTimeout(this.state.intervalTimer);
                this.state.intervalTimer = null;
            }
        }
    }


    selectNode(node) {
      if(node === this.state.selectedNode){
        node = null;
      }
        this.state.selectedNode = node;
        this.state.onNodeSelected(this.state.graph, node);
        this.setLive(false);
        this.setState(this.state);
    }

    createWaitingElem(idx, nodeHeight, fromTs, duration) {
        let createboxStyle = {
            position: 'absolute',
            height: '20px',
            width: 1,
            top: '' + ((idx + 1) * nodeHeight) + 'px',
            left: fromTs
        };

        let depLineStyle = {
            position: 'absolute',
            width: duration + 'px',
            height: '1px',
            top: '' + (((idx + 1) * nodeHeight) + nodeHeight / 2 - 5) + 'px',
            left: fromTs
        };

        return (<div>
            <div className={styles.createnode} style={createboxStyle}>&nbsp;</div>
            <div className={styles.hdepline} style={depLineStyle}>&nbsp;</div>
        </div>);
    }

//TODO: Fix newScrollPosition so it's neither laggy or jumpy
    onDragStart(e){
      this.state.dragging = true;
      this.state.hasMoved = true;
      this.state.dragStartY = e.screenY;
      let listeners = {};
      listeners.moveListener = (wmme) => {
        let deltaY = wmme.screenY - this.state.dragStartY;
        let minScrollPosition = 0;
        let maxScrollPosition = this.state.height - this.state.scrollBarHeight;
        let inverted = this.state.scrollBarHeight/(this.state.height-this.state.scrollPosition);

        let newScrollPosition = this.state.scrollPosition + (deltaY/inverted);
        newScrollPosition= Math.min(newScrollPosition,maxScrollPosition);
        newScrollPosition= Math.max(newScrollPosition,minScrollPosition);
        this.state.scrollPosition = newScrollPosition;
        this.updateScrollY(this.state.scrollPosition);
        this.state.dragStartY = wmme.screenY;
      }
      listeners.moveListener = listeners.moveListener.bind(this);

      document.addEventListener('mousemove',listeners.moveListener);

      listeners.upListener = (wmu)=>{
          // console.log("Done!!!",wmu);
          this.state.dragging= false;
          document.removeEventListener('mousemove',listeners.moveListener);
          document.removeEventListener('mouseup',listeners.upListener);
      };

      document.addEventListener('mouseup',listeners.upListener);
    }

    render() {
        let nodes = this.state.graph.getNodes();
        nodes.shift();
        let minCreateTime = nodes.reduce((v, n) => Math.min(v, n.created), Infinity);

        //console.log(`graph timelines are ${this.state.graph.created} ->${minCreateTime}`);


        let startTs = this.state.graph.created;
        let self = this;

        // converts a timestamp to a relative X in the display viewport
        let relativeX = function (timeStamp) {
            return (timeStamp - startTs) * self.state.pxPerMs;
        };


        let lifeWidth;
        if (this.state.graph.main_ended !== null) {
            lifeWidth = relativeX(this.state.graph.main_ended);
        } else {
            lifeWidth = relativeX(Date.now()) - relativeX(this.state.graph.created);
        }
        let mainLifeStyle = {
            position: 'absolute',
            height: '20px',
            width: '' + lifeWidth + 'px',
            top: '0px',
            left: '0px'
        };

        let lifeElem = (<div key='0'>
            <div className={styles.node + ' ' + styles.lifecycle}
                 style={mainLifeStyle}
                 onClick={(e) => this.selectNode(this.state.graphNode)}
                 >{this.state.graph.function_id}</div>
        </div>);

        let pendingElems = [(<div key='0'
                                  style={{
                                      position: 'absolute',
                                      height: '20px',
                                      top: '0px',
                                      left: (this.state.viewPortWidth + 6) + 'px',
                                      color: 'grey'
                                  }}
        > Pending Events: </div>)];

        let nodeElements = [];
        var dependencyMap = new Map();

        nodeElements.push(lifeElem);

        var dependenciesOfSelected = new Set();
        if (this.state.selectedNode && (this.state.selectedNode.state !== 'graph')) {
            dependenciesOfSelected = this.state.graph.findDepIds(this.state.selectedNode.stage_id);
            dependenciesOfSelected.add(this.state.selectedNode.stage_id);
        }
        nodes.forEach((node, idx) => {
            let createTs = relativeX(node.created);
            dependencyMap.set(node.stage_id, node.dependencies);

            var styleExtra = [];
            if (this.state.selectedNode) {
                if (dependenciesOfSelected.has(node.stage_id)) {
                    styleExtra.push(styles.highlighted);
                } else {
                    styleExtra.push(styles.faded);
                }
            }

            switch (node.state) {
                case 'failed':
                    styleExtra.push(styles.failed);
                    break;
                case 'successful':
                    styleExtra.push(styles.successful);
                    break;
                case 'running':
                    styleExtra.push(styles.running);
                    this.state.currentlyRunning = idx;
                    break;
                case 'pending':
                    styleExtra.push(styles.pending);
                    if(!this.state.pendingNodes.includes(node)){
                    this.state.pendingNodes.push(node);
                    }
                    break;
            }

            if(node.started && this.state.pendingNodes.includes(node)){
              let index = this.state.pendingNodes.indexOf(node);
              this.state.pendingNodes.splice(index,1);
            }

            if (this.state.selectedNode === node) {
                styleExtra.push(styles.selected);
            }

            const nodeHeight = 30;

            let deps = ""
            if ((node.dependencies.length !== 0)) {
                deps = "Dependencies: Stage " + node.dependencies;
            }

            if (node.state === 'pending') {
              let index = this.state.pendingNodes.indexOf(node);
                let pendingboxStyle = {
                    left: '3px',
                    position: 'absolute',
                    height: '20px',
                    top: '' + (index * nodeHeight) + 'px',
                };
                let pendElem = (<div key={node.stage_id + 1} className={styles.node + ' ' + styleExtra.join(' ')}
                                     style={pendingboxStyle}
                                     onClick={(e) => this.selectNode(node)}
                                     data-tooltip={node.op + ": " + node.state + "\n" + deps}
                > {node.stage_id}:{node.op} </div>);
                pendingElems.push(pendElem);
                let waitElem = this.createWaitingElem(idx, nodeHeight, createTs, relativeX(this.state.relativeTimestamp) - createTs);
                nodeElements.push(<div key={node.stage_id + 1}>{waitElem}</div>);

            } else {
                let startTs = relativeX(node.started);
                let widthPx;
                let durationMs;
                if (node.completed) {
                    widthPx = relativeX(node.completed) - relativeX(node.started);
                    durationMs = node.completed - node.started;
                } else {
                    widthPx = relativeX(Date.now()) - relativeX(node.started);
                    durationMs = Date.now() - node.started;
                }

                let waitingTime = startTs - createTs;
                let waitElem;
                if (waitingTime > 10) {
                    waitElem = this.createWaitingElem(idx, nodeHeight, createTs, waitingTime);
                }

                let runboxStyle = {
                    position: 'absolute',
                    height: '20px',
                    width: '' + widthPx + 'px',
                    top: '' + ((idx + 1) * nodeHeight) + 'px',
                    left: startTs
                };
                nodeElements.push(<div key={node.stage_id + 1}>
                        {waitElem}
                        <div className={styles.node + ' ' + styleExtra.join(' ')}
                             style={runboxStyle}
                             onClick={(e) => this.selectNode(node)}
                             data-tooltip={node.op + ": " + node.state + "\n" + deps}
                        > {node.stage_id}: {node.op} {durationMs ? (durationMs.toFixed(0) + 'ms') : ""}</div>
                    </div>
                );
            }
        });

        // TODO: Remove magic numbers - note (700/0.06) corresponds to windowDurationMs in ZoomLine
        const maxTs = this.state.graph.finished ? this.state.graph.finished : Date.now();
        let curDurationTs = (maxTs - this.state.graph.created);
        if (curDurationTs > (this.state.viewPortWidth / this.state.pxPerMs) && !this.state.scrolling) {
            this.state.cursorTs = this.state.graph.created + (curDurationTs - (this.state.viewPortWidth / this.state.pxPerMs));
        }

        let leftPosition;
        if((relativeX(Date.now()) < this.state.wallPaperWidth) && this.state.live){
          leftPosition = {left:relativeX(Date.now()), height: this.state.wallPaperHeight + 'px'}
        } else {
          leftPosition = {visibility:'hidden'};
        }


        if(this.state.currentHeight === null || (((this.state.currentlyRunning + 2) * 30) > this.state.currentHeight)){
          this.state.currentHeight = ((this.state.currentlyRunning + 2) * 30);
        }
        if((this.state.currentHeight >= this.state.height)){
          this.state.scrollBarHeight = (this.state.height/this.state.currentHeight) * this.state.height;
          this.state.heightToMove = this.state.currentHeight - this.state.height;
        }

        if(!this.state.hasMoved){
          this.state.scrollPosition = this.state.height - this.state.scrollBarHeight;
        } else {
          this.state.heightToMove = ((this.state.scrollPosition/this.state.height) * this.state.currentHeight);
        }

        return (
            <div>
                <div className={styles.overview} style={{width:this.state.innerViewWidth + 'px', height:this.state.height + 'px'}}>
                  <div className={styles.viewport} style={{width:this.state.viewPortWidth + 'px', height:this.state.height + 'px'}}>
                      <div className={styles.wallPaper} style={{left: -relativeX(this.state.cursorTs) + 'px', top: -this.state.heightToMove + 'px',
                        width:this.state.wallPaperWidth + 'px', height:this.state.wallPaperHeight + 'px'}}>
                      <div className={styles.currentLine} style={leftPosition}>
                        </div>
                        {nodeElements}
                    </div>
                    <div className={styles.verticalScroll} style={{height:this.state.height + 'px',
                      left:(this.state.viewPortWidth - 25) + 'px', top:'0px', position:'absolute'}}>
                      <div className={styles.scrollbox} onMouseDown={this.onDragStart}
                        style={{position:'relative', top:this.state.scrollPosition + 'px', height:this.state.scrollBarHeight + 'px',}}>
                      </div>
                    </div>
                    <div className={styles.pendingView} style={{width:'174px', position:'absolute',
                      height:this.state.wallPaperHeight + 'px', left:this.state.viewPortWidth + 'px', top: '0px'}}>
                      <div>{pendingElems}</div>
                      </div>

                  </div>
                </div>
                <ZoomLine graph={this.state.graph} windowDurationMs={this.state.viewPortWidth / this.state.pxPerMs} cursorTs={this.state.cursorTs}
                          maxTs={this.state.relativeTimestamp}
                          live={this.state.live}
                          onScrollChanged={this.updateScroll} width={this.state.viewPortWidth}/>
            </div>
        );
    }
}

export default GraphTimeline;
