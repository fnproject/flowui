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
            viewPortWidth: 700
        };
        this.selectNode = this.selectNode.bind(this);
        this.updateScroll = this.updateScroll.bind(this);

        this.state.graph.On('model.GraphCompletedEvent', (evt) => {
            console.log("Graph completed");
            this.setLive(false);
        });
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
        console.log("new scroll ", ts)

        //this.state.relativeTimestamp = ts;
        this.state.scrolling = true;
        this.state.cursorTs = ts;
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

    resetGraph() {
        this.state.selectedNode = null;
        this.state.dependenciesOfSelected = new Set();
        this.setState(this.state);
    }

    selectNode(node) {
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

    render() {
        let nodes = this.state.graph.getNodes();
        let minCreateTime = nodes.reduce((v, n) => Math.min(v, n.created), Infinity);

        //console.log(`graph timelines are ${this.state.graph.created} ->${minCreateTime}`);


        let startTs = this.state.graph.created;
        let pxPerMs = 0.06;

        // converts a timestamp to a relative X in the display viewport
        let relativeX = function (timeStamp) {
            return (timeStamp - startTs) * pxPerMs;
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

        //console.log("Ended: " + this.state.graph.main_ended);

        let lifeElem = (<div key='0'>
            <div className={styles.node + ' ' + styles.lifecycle}
                 style={mainLifeStyle}> {this.state.graph.function_id} </div>
        </div>);

        let pendingElems = [(<div key='0'
                                  style={{
                                      position: 'absolute',
                                      height: '20px',
                                      top: '0px',
                                      left: '706px',
                                      color: 'grey'
                                  }}
        > Pending Events: </div>)];

        let nodeElements = [];
        var dependencyMap = new Map();

        nodeElements.push(lifeElem);

        var dependenciesOfSelected = new Set();
        if (this.state.selectedNode) {
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
                    break;
                case 'pending':
                    styleExtra.push(styles.pending);
                    break;

            }

            if (this.state.selectedNode === node) {
                styleExtra.push(styles.selected);
            }

            const nodeHeight = 30;

            let deps = ""
            if (node.dependencies.length !== 0) {
                deps = "Dependencies: Stage " + node.dependencies;
            }

            if (node.state === 'pending') {
                let pendingboxStyle = {
                    position: 'absolute',
                    height: '20px',
                    top: '' + ((idx + 1) * nodeHeight) + 'px',
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
                let duration;

                if (node.completed) {
                    duration = relativeX(node.completed) - relativeX(node.started);
                } else {
                    duration = relativeX(Date.now()) - relativeX(node.started);

                }

                let waitingTime = startTs - createTs;
                let waitElem;
                if (waitingTime > 10) {
                    waitElem = this.createWaitingElem(idx, nodeHeight, createTs, waitingTime);
                }

                let runboxStyle = {
                    position: 'absolute',
                    height: '20px',
                    width: '' + duration + 'px',
                    top: '' + ((idx + 1) * nodeHeight) + 'px',
                    left: startTs
                };
                nodeElements.push(<div key={node.stage_id + 1}>
                        {waitElem}
                        <div className={styles.node + ' ' + styleExtra.join(' ')}
                             style={runboxStyle}
                             onClick={(e) => this.selectNode(node)}
                             data-tooltip={node.op + ": " + node.state + "\n" + deps}
                        > {node.stage_id}: {node.op} {duration ? (duration.toFixed(0) + 'ms') : ""}</div>
                    </div>
                );
            }
        });

        // TODO: Remove magic numbers - note (700/0.06) corresponds to windowDurationMs in ZoomLine
        const maxTs = this.state.graph.finished ? this.state.graph.finished : Date.now();
        let curDurationTs = (maxTs - this.state.graph.created);
        if (curDurationTs > (this.state.viewPortWidth / pxPerMs) && !this.state.scrolling) {
            this.state.cursorTs = this.state.graph.created + (curDurationTs - (this.state.viewPortWidth / pxPerMs));
        }

        let leftPosition;
        if(relativeX(Date.now()) < 700 && this.state.live){
          leftPosition = {left:relativeX(Date.now())}
        } else {
          leftPosition = {opacity:0.0}
        }

        let thisStyle = {left: -relativeX(this.state.cursorTs) + 'px', width: this.state.innerViewWidth + 'px'};

        return (
            <div>

                <div className={styles.resetButton}
                     onClick={(e) => this.resetGraph()}>
                    Reset Graph
                </div>
                <div className={styles.outerView}>
                    <div className={styles.viewport}>
                        <div className={styles.innerViewport} id="innerViewport" style={thisStyle}>
                          <div className={styles.currentLine} style={leftPosition}>
                            </div>
                            {nodeElements}
                        </div>
                    </div>
                    <div>{pendingElems}</div>
                </div>
                <ZoomLine graph={this.state.graph} windowDurationMs={this.state.viewPortWidth / pxPerMs} cursorTs={this.state.cursorTs}
                          maxTs={this.state.relativeTimestamp}
                          live={this.state.live}
                          onScrollChanged={this.updateScroll} width={this.state.viewPortWidth}/>
            </div>
        );
    }
}

export default GraphTimeline;
