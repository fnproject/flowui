import React from 'react';

import styles from './graphtimeline.css'
import ZoomLine from "./ZoomLine.jsx";

class GraphTimeline extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            onNodeSelected: props.onNodeSelected,
            graph: props.graph,
            selectedNode: null,
            maxTimeStamp: Date.now(),
            cursorTs: props.graph.created,
            intervalTimer: -1,
            autoScroll: props.graph.isLive(),
            width: 1200,
            pendingWidth: 150,

            zoomLineHeight: 100,
            viewPortWidth: props.width - 150,
            viewPortHeight: props.height - 100,

            height: props.height,
            pxPerMs: 0.03,
            graphHeight: 0,
            dragging: false,
            dragStartY: 0,
            verticalScrollPosition: 0,
            verticalScrollRatio: 0,

            scrollBarHeight: 300,
            // node
            pendingNodes: [],
            // node
            activeNodes: [],
            // stage_id
            selectedDeps: new Map(),
            graphNode: props.graph.getNodes().shift(),
            nodeHeight: 28,
        };
        this.selectNode = this.selectNode.bind(this);
        this.manualScrollX = this.manualScrollX.bind(this);
        this.manualScrollX = this.manualScrollX.bind(this);
        this.onDragStart = this.onDragStart.bind(this);
        this.updateDimensions = this.updateDimensions.bind(this);
    }


    updateDimensions() {
        if (this.containerElem) {
            let update_width = this.containerElem.getBoundingClientRect().width - 50;

            this.setState({width: update_width, viewPortWidth: update_width - this.state.pendingWidth});
        }
    }

     debounce(func, wait, immediate) {
        var timeout;
        return function() {
            var context = this, args = arguments;
            var later = function() {
                timeout = null;
                if (!immediate) func.apply(context, args);
            };
            var callNow = immediate && !timeout;
            clearTimeout(timeout);
            timeout = setTimeout(later, wait);
            if (callNow) func.apply(context, args);
        };
    };
    componentWillReceiveProps(props) {
        if (props.graph) {
            this.updateGraphDetails(props.graph)
        }
        this.updateDimensions();
        window.addEventListener("resize", this.debounce(this.updateDimensions,100));

    }

    updateGraphDetails(graph) {
        const maxTs = graph.isLive() ? Date.now() : graph.finished;
        let curDurationTs = (maxTs - graph.created);

        let update = {graph};

        if (this.state.autoScroll && curDurationTs > (this.state.viewPortWidth / this.state.pxPerMs)) {
            update.cursorTs = this.state.graph.created + (curDurationTs - (this.state.viewPortWidth / this.state.pxPerMs));
            update.verticalScrollRatio = 1.0;
        }

        if (graph.isLive()) {
            update.maxTimeStamp = Date.now();
        } else {
            update.maxTimeStamp = graph.finished + (100 * 1 / this.state.pxPerMs);
        }


        let pendingNodes = [];
        let activeNodes = [];
        graph.getNodes()
            .forEach((node) => {
                if (node.state === 'pending') {
                    pendingNodes.push(node);
                } else {
                    activeNodes.push(node);
                }
            });

        activeNodes.sort((a, b) => {
            return a.created - b.created
        });


        function nodesConflict(a, b) {
            if ((a.state === 'running' && b.state === 'running')) {
                return true;
            }
            if (a.state === 'running') {
                if (b.state === 'running') {
                    return true;
                } else {
                    return b.completed > a.started;
                }
            } else {
                if (b.state === 'running') {
                    return a.completed > b.started;
                }   // both completed
                return ((a.started > b.started) && (a.started < b.completed)) ||
                    ((a.completed > b.started) && (a.completed < b.completed));
            }
        }


        // rank_id -> Map[stage_id] - stage
        var ranks = [];

        function findRank(stage_id) {
            for (let rank in ranks) {
                if (ranks[rank].has(stage_id)) {
                    return rank;
                }
            }
            throw "No rank found for stage " + stage_id;
        }

        activeNodes
            .forEach(
                (node) => {
                    // hidden nodes
                    if (node.started == node.completed) {
                        return;
                    }


                    let minRank = -1;
                    // Never place dependent nodes above their parents
                    node.dependencies.forEach((stage_id) => {
                        minRank = Math.max(minRank, findRank(stage_id))
                    });

                    //console.log("min rank for " + node.stage_id + " " +minRank);
                    // no precendence here - put this on a new rank
                    if (minRank === -1) {
                        let rankMap = new Map();
                        rankMap.set(node.stage_id, node);
                        ranks.push(rankMap);
                    } else {
                        // if this is an invisible node, just dump it at its parent rank
                        if (!(node.op === 'completedValue' || node.op === 'externalFuture')) {
                            for (let [id, other] of ranks[minRank]) {
                                if (nodesConflict(node, other)) {
                                    // not free push this node to a new rank below min rank
                                    let rankMap = new Map();
                                    rankMap.set(node.stage_id, node);
                                    ranks.splice(minRank + 1, 0, rankMap);
                                    return;
                                }
                            }
                        }
                        // parent rank is free here
                        ranks[minRank].set(node.stage_id, node);
                    }
                });

        // stage-id -> rank
        let rankMap = new Map();
        ranks.forEach((v, rank) => {
            v.forEach((node) => {
                rankMap.set(node.stage_id, rank);
            })
        });

        update.rankMap = rankMap;
        update.pendingNodes = pendingNodes;
        update.activeNodes = activeNodes;

        let graphHeight = Math.max(this.state.viewPortHeight, this.state.nodeHeight * (ranks.length));
        update.graphHeight = graphHeight;
        let maxScroll = Math.max(0, graphHeight - this.state.viewPortHeight);
        update.maxScroll = maxScroll;
        let selectedDeps = new Set();
        if (this.state.selectedNode && (this.state.selectedNode.state !== 'graph')) {
            selectedDeps = this.state.graph.findDepIds(this.state.selectedNode.stage_id);
            selectedDeps.add(this.state.selectedNode.stage_id);
        }

        update.selectedDeps = selectedDeps;
        if (maxScroll > 0) {
            update.scrollBarHeight = this.state.viewPortHeight * (this.state.viewPortHeight / graphHeight);
        } else {
            update.scrollBarHeight = this.state.viewPortHeight;
        }

        this.setState(update);
    }

    componentDidMount() {
        this.updateDimensions();
        this.startWatch();
    }

    manualScrollX(ts) {
        this.setState({autoScroll: false, cursorTs: ts});
    }

    manualScrollY(s) {
        //console.log("Scroll: ", s);
        this.setState({autoScroll: false, verticalScrollRatio: s});
    }

    startWatch() {
        function updateScroll() {
            this.updateGraphDetails(this.state.graph);

            if (this.state.graph.isLive()) {
                setTimeout(updateScroll, 50);
            }
        }

        updateScroll = updateScroll.bind(this);
        setTimeout(updateScroll, 50);
    }


    selectNode(node) {
        if (node === this.state.selectedNode) {
            node = null;
        }
        this.state.selectedNode = node;
        this.state.onNodeSelected(this.state.graph, node);
        this.state.autoScroll = false;
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

//TODO: Fix newScrollPosition so it's neither laggy or jumpy
    onDragStart(e) {
        this.state.dragging = true;
        this.state.dragStartY = e.screenY;
        let listeners = {};
        listeners.moveListener = (wmme) => {
            let deltaY = wmme.screenY - this.state.dragStartY;
            let maxScrollPosition = this.state.viewPortHeight - this.state.scrollBarHeight;
            let inverted = this.state.scrollBarHeight / (this.state.viewPortHeight - this.state.verticalScrollPosition);

            let newScrollPosition = this.state.verticalScrollPosition + (deltaY / inverted);
            newScrollPosition = Math.min(newScrollPosition, maxScrollPosition);
            newScrollPosition = Math.max(newScrollPosition, 0);
            this.state.verticalScrollPosition = newScrollPosition;

            this.manualScrollY(this.state.verticalScrollPosition / maxScrollPosition);
            this.state.dragStartY = wmme.screenY;
        };
        listeners.moveListener = listeners.moveListener.bind(this);

        document.addEventListener('mousemove', listeners.moveListener);

        listeners.upListener = (wmu) => {
            // console.log("Done!!!",wmu);
            this.state.dragging = false;
            document.removeEventListener('mousemove', listeners.moveListener);
            document.removeEventListener('mouseup', listeners.upListener);
        };

        document.addEventListener('mouseup', listeners.upListener);
    }

    render() {
        let nodes = this.state.graph.getNodes();
        //nodes.shift();
        let startTs = this.state.graph.created;
        let self = this;

        // converts a timestamp to a relative X in the display viewport
        let relativeX = function (timeStamp) {
            return (timeStamp - startTs) * self.state.pxPerMs;
        };

        let pendingElems = [(<div key='0'
                                  style={{
                                      position: 'absolute',
                                      height: '20px',
                                      top: '0px',
                                      color: 'grey'
                                  }}
        > Pending Events: </div>)];

        let nodeElements = [];

        this.state.activeNodes.forEach((node, idx) => {
            let createTs = relativeX(node.created);

            if (!this.state.rankMap.has(node.stage_id)) {
                // non-displayed stage.
                return;
            }
            let rank = this.state.rankMap.get(node.stage_id);


            var styleExtra = [];
            if (node.op === 'invokeFunction') {
                styleExtra.push(styles.invokeFunction);
            } else if (node.op === 'main') {
                styleExtra.push(styles.lifecycle);
            }

            if (this.state.selectedNode) {
                if (this.state.selectedDeps.has(node.stage_id)) {
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
            }


            if (this.state.selectedNode === node) {
                styleExtra.push(styles.selected);
            }


            let deps = ""
            if ((node.dependencies.length !== 0)) {
                deps = "Dependencies: Stage " + node.dependencies;
            }


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
                //waitElem = this.createWaitingElem(idx, this.state.nodeHeight, createTs, waitingTime);
            }

            let runboxStyle = {
                position: 'absolute',
                height: (this.state.nodeHeight - 10 ) + 'px',
                width: '' + widthPx + 'px',
                top: '' + (rank * this.state.nodeHeight) + 'px',
                left: startTs
            };
            let nodeLabel;
            if (node.op === 'invokeFunction' || node.op === 'main') {
                nodeLabel = node.function_id;
            } else {
                nodeLabel = node.op;
            }
            nodeElements.push(<div key={node.stage_id + 1}>
                    {waitElem}
                    <div className={styles.node + ' ' + styleExtra.join(' ')}
                         style={runboxStyle}
                         onClick={(e) => this.selectNode(node)}
                         data-tooltip={node.op + ": " + node.state + "\n" + deps}
                    > {node.stage_id}: {nodeLabel} {durationMs ? (durationMs.toFixed(0) + 'ms') : ""}</div>
                </div>
            );

        });


        this.state.pendingNodes.forEach((node, idx) => {


            let styleExtra = [styles.pending];

            let deps = ""
            if ((node.dependencies.length !== 0)) {
                deps = "Dependencies: Stage " + node.dependencies;
            }
            if (this.state.selectedNode === node) {
                styleExtra.push(styles.selected);
            }
            let index = this.state.pendingNodes.indexOf(node);
            let pendingboxStyle = {
                left: '3px',
                position: 'absolute',
                height: '20px',
                top: '' + ((index+1)* this.state.nodeHeight) + 'px',
            };
            let pendElem = (<div key={node.stage_id + 1} className={styles.node + ' ' + styleExtra.join(' ')}
                                 style={pendingboxStyle}
                                 onClick={(e) => this.selectNode(node)}
                                 data-tooltip={node.op + ": " + node.state + "\n" + deps}
            > {node.stage_id}:{node.op} </div>);
            pendingElems.push(pendElem);
        });

        let leftPosition;
        if ((relativeX(this.state.maxTimeStamp) < this.state.viewPortWidth)) {
            leftPosition = {left: relativeX(this.state.maxTimeStamp), height: this.state.graphHeight + 'px'}
        } else {
            leftPosition = {visibility: 'hidden'};
        }

        return (
            <div ref={(input) => {
                this.containerElem = input;
            }} style={{width: '100%'}}>
                <div className={styles.overview}
                     style={{width: this.state.width + 'px', height: this.state.height + 'px'}}>
                    <div className={styles.viewport}
                         style={{width: this.state.viewPortWidth + 'px', height: this.state.viewPortHeight + 'px'}}>

                        <div className={styles.scrollingArea} style={{
                            left: -relativeX(this.state.cursorTs) + 'px',
                            top: -this.state.verticalScrollRatio * Math.max(0, this.state.graphHeight - this.state.viewPortHeight) + 'px',
                            width: Math.max(this.state.width, relativeX(this.state.maxTimeStamp) - relativeX(this.state.graph.created)) + 'px',
                            height: this.state.graphHeight + 'px'
                        }}>
                            <div className={styles.currentLine} style={leftPosition}>
                            </div>
                            {nodeElements}
                        </div>

                        <div className={styles.verticalScroll} style={{
                            height: this.state.viewPortHeight + 'px',
                            left: (this.state.viewPortWidth - 25) + 'px', top: '0px', position: 'absolute',
                            display: this.state.maxScroll === 0 ? "none" : "block"
                        }}>
                            <div className={styles.scrollbox} onMouseDown={this.onDragStart}
                                 style={{
                                     position: 'relative',
                                     top: this.state.verticalScrollPosition + 'px',
                                     height: this.state.scrollBarHeight + 'px',
                                 }}>
                            </div>
                        </div>
                        <div className={styles.pendingView} style={{
                            width: this.state.pendingWidth -3 + 'px', position: 'absolute',
                            height: this.state.viewPortHeight + 'px', left: this.state.viewPortWidth -3 + 'px', top: '0px'
                        }}>

                            <div>{pendingElems}</div>
                        </div>

                    </div>

                    <ZoomLine graph={this.state.graph}
                              windowDurationMs={this.state.viewPortWidth / this.state.pxPerMs}
                              cursorTs={this.state.cursorTs}
                              maxTs={this.state.maxTimeStamp + 1000}
                              live={this.state.live}
                              height={this.state.zoomLineHeight -4}
                              onScrollChanged={this.manualScrollX} width={this.state.viewPortWidth-3}/>

                </div>
            </div>
        );
    }
}

export default GraphTimeline;
