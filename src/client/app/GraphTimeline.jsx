import React from 'react';

import styles from './graphtimeline.css'
import ZoomLine from "./ZoomLine.jsx";

class GraphTimeline extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            pxPerMs: 0.06,
            nodeHeight: 30,
            onNodeSelected: props.onNodeSelected,
            graph: props.graph,
            live: props.graph.finished == null,
            selectedNode: null,
            dependenciesOfSelected: new Set(),
            responseOfSelected: null,
            cursorTs: props.graph.created,
            intervalTimer: -1
        };
        this.selectNode = this.selectNode.bind(this);
        this.updateScroll = this.updateScroll.bind(this);

        this.state.graph.On('model.GraphCompletedEvent', (evt) => {
            console.log("Graph completed");
            this.setLive(false);
        });
    }

    componentDidMount() {

        if (this.props.graph.completed) {
            if (this.state.live) {
                this.setLive(false)
            }
        } else {
            this.setLive(this.state.live);
            this.setState(this.state);
        }

    }

    updateScroll(ts) {
        if (this.state.live) {
            this.setLive(false);
        }

        this.state.cursorTs = ts;
        this.setState(this.state);

    }

    setLive(live) {
        this.state.live = live;
        console.log("LIVE", live);
        if (live) {
            this.state.intervalTimer = setInterval(() => {
                //this.state.cursorTs = Date.now();
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
      if(node.call_id){
        console.log(node.function_id);
        let self = this;
        let index = node.function_id.indexOf("/");
        let appId = node.function_id.substring(0, index);
        fetch(`http://localhost:8080/v1/apps/${appId}/calls/${node.call_id}/log`)
        .then(
          function(response) {
            if (response.ok) {
              console.log('Looks like there was a problem. Status Code: ' +
              response.status);
              return;
            }

            response.json()
              .then(function(data) {
                self.state.responseOfSelected = data;
              })
              .catch(console.log);
          }
        )
        .catch(function(err) {
          console.log('Fetch Error :-S', err);
        });
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
            top: '' + (idx * nodeHeight) + 'px',
            left: fromTs
        };

        let depLineStyle = {
            position: 'absolute',
            width: duration + 'px',
            height: '1px',
            top: '' + ((idx * nodeHeight) + nodeHeight / 2 - 5) + 'px',
            left: fromTs
        };

        return (<div>
            <div className={styles.createnode} style={createboxStyle}>&nbsp;</div>
            <div className={styles.hdepline} style={depLineStyle}>&nbsp;</div>
        </div>);
    }

    render() {
        let nodes = this.state.graph.getNodes();
        //console.log(`graph timelines are ${this.state.graph.created} ->${minCreateTime}`);
        let startTs = this.state.graph.created;

        let pxPerMs = this.state.pxPerMs;
        // converts a timestamp to a relative X in the display viewport
        let relativeX = function (timeStamp) {
            return (timeStamp - startTs) * pxPerMs;
        };

        let findDeps = function (nodeId, depsMap) {
          let depsOfNode = depsMap.get(nodeId);
          if (depsOfNode.length === 0){
            return new Set();
          }
          let transitiveDependenciesOfNode = new Set(depsOfNode);
          depsOfNode.forEach((dep) => {
            findDeps(dep, depsMap).forEach((transitiveDep) => transitiveDependenciesOfNode.add(transitiveDep));
          })
          return transitiveDependenciesOfNode;
        };

        // main function elem
        let mainFnWidth;
        let mainClasses = [styles.node, styles.mainfn];

        if (this.state.graph.main_ended !== null) {
            mainFnWidth = relativeX(this.state.graph.main_ended);
        } else {
            mainClasses.push(styles.running);
            mainFnWidth = relativeX(Date.now());
        }

        let mainFnStyle = {
            position: 'absolute',
            height: '20px',
            width: '' + mainFnWidth + 'px',
            top: '0px',
            left: '0px'
        };


        let mainFnElem = (<div key='0'>
            <div className={mainClasses.join(' ')}
                 style={mainFnStyle}> {this.state.graph.function_id} </div>
        </div>);

        let pendingElems = [];
        let nodeElements = [];
        var dependencyMap = new Map();

        nodeElements.push(mainFnElem);

        nodes.forEach((node, idx) => {
            let createPx = relativeX(node.created);
            dependencyMap.set(node.stage_id, node.dependencies);

            var styleExtra = '';
            switch (node.state) {
                case 'failed':
                    styleExtra = styles.failed;
                    if(this.state.dependenciesOfSelected.has(node.stage_id)) {
                      styleExtra = styles.depfailed;
                    }
                    break;
                case 'successful':
                    styleExtra = styles.successful;
                    if(this.state.dependenciesOfSelected.has(node.stage_id)) {
                      styleExtra = styles.depsuccess;
                    }
                    break;
                case 'running':
                    styleExtra = styles.running;
                    break;
                case 'pending':
                    styleExtra = styles.pending;
                    break;

            }



            if (this.state.selectedNode === node) {
                this.state.dependenciesOfSelected = findDeps(node.stage_id, dependencyMap);
                this.state.dependenciesOfSelected.add(node.stage_id);
            }


            const nodeHeight = 30;


            let deps = "";
            if (node.dependencies.length !== 0) {
                deps = "Dependencies: Stage " + node.dependencies;
            }

            if (node.state === 'pending') {
                let pendingboxStyle = {
                    position: 'absolute',
                    height: '20px',
                    top: '' + ((idx + 1) * this.state.nodeHeight) + 'px',
                };
                let pendElem = (<div key={node.stage_id + 1} className={styles.node + ' ' + styleExtra}
                                     style={pendingboxStyle}
                                     onClick={(e) => this.selectNode(node)}
                                     data-tooltip={node.op + ": " + node.state + "\n" + deps}
                > {node.stage_id}:{node.op} </div>);
                pendingElems.push(pendElem);
                let waitElem = this.createWaitingElem(idx, this.state.nodeHeight, createPx, relativeX(Date.now()) - createPx);
                nodeElements.push(<div key={node.stage_id + 1}>{waitElem}</div>);

            } else {
                let startPx = relativeX(node.started);
                let widthPx = (node.completed ? relativeX(node.completed) : relativeX(Date.now())) - relativeX(node.started);
                let durationMs = node.completed ? node.completed - node.started : Date.now() - node.started;
                let waitingTimePx = startPx - relativeX(node.created);
                let waitElem;
                if (waitingTimePx > 10) {
                    waitElem = this.createWaitingElem(idx, this.state.nodeHeight, createPx, waitingTimePx);
                }

                let runboxStyle = {
                    position: 'absolute',
                    height: '20px',
                    width: '' + widthPx + 'px',
                    top: '' + ((idx + 1) * this.state.nodeHeight) + 'px',
                    left: startPx
                };
                nodeElements.push(<div key={node.stage_id + 1}>
                        {waitElem}
                        <div className={styles.node + ' ' + styleExtra}
                             style={runboxStyle}
                             onClick={(e) => this.selectNode(node)}
                             data-tooltip={node.op + ": " + node.state + "\n" + deps}
                        > {node.stage_id}:{node.op} {durationMs ? (durationMs.toFixed(0) + 'ms') : ""}</div>
                    </div>
                );
            }
        });


        let thisStyle;

        let vpWidth;
        if ((this.state.graph.finished < this.state.cursorTs) && (this.state.graph.finished !== null)) {
            vpWidth = relativeX(this.state.graph.finished) + 10;
        } else {
            vpWidth = relativeX(Date.now()) + 10;
        }


        thisStyle = {left: relativeX(this.state.cursorTs), minWidth: vpWidth + 'px'};

        return (
            <div>
                <div className={styles.outerView}>
                    <div className={styles.viewport}>
                        <div className={styles.innerViewport} id="innerViewport" style={thisStyle}>
                            {nodeElements}
                        </div>
                    </div>
                    <div>{pendingElems}</div>
                </div>
                <ZoomLine graph={this.state.graph} windowDurationMs={1024 / pxPerMs} cursorTs={this.state.cursorTs}
                          maxTs={this.state.relativeTimestamp}
                          minScale={this.state.pxPerMs}
                          onScrollChanged={this.updateScroll} width={1024}/>
                        <div className={styles.nodeInfo}>
                          {JSON.stringify(this.state.responseOfSelected)}
                        </div>
            </div>
        );
    }
}

export default GraphTimeline;
