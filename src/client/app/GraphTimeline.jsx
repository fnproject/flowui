import React from 'react';

import styles from './graphtimeline.css'
import ZoomLine from "./ZoomLine.jsx";
import {Button, ButtonGroup, Glyphicon} from 'react-bootstrap';
import sizeMe from 'react-sizeme';

const zoomLevels = [0.01, 0.03, 0.06, 0.075, 0.1, 0.2, 0.5];

class GraphTimeline extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            onNodeSelected: props.onNodeSelected,
            graph: props.graph,
            lastEvent: null,
            selectedNode: null,
            maxTimeStamp: Date.now(),
            cursorTs: props.graph.created,
            intervalTimer: -1,
            autoScroll: props.graph.isLive(),
            autoVScroll: true,
            width: 1200,
            pendingWidth: 160,

            zoomLineHeight: 100,
            viewPortWidth: props.size.width - 150,
            viewPortHeight: props.height - 100,

            height: props.height,
            zoomLevel: 2,
            pxPerMs: zoomLevels[2],

            graphHeight: 0,
            dragging: false,
            dragStartY: 0,
            verticalScrollPosition: 0,
            verticalScrollRatio: 0,

            scrollBarHeight: 300,
            // id()
            selectedDeps: new Map(),
            nodeHeight: 30,
        };
        this.selectNode = this.selectNode.bind(this);
        this.manualScrollX = this.manualScrollX.bind(this);
        this.manualScrollX = this.manualScrollX.bind(this);
        this.onDragStart = this.onDragStart.bind(this);
        this.isNodeShownByDefault = this.isNodeShownByDefault.bind(this);
        this.updateScroll = this.updateScroll.bind(this);
        this.playPauseButtonClicked = this.playPauseButtonClicked.bind(this);
    }

    componentWillReceiveProps(props) {
        if (props.graph) {

            this.updateGraphDetails(props.graph)
        }
        if (props.size) {
            this.setState({
                              width: props.size.width,
                              viewPortWidth: props.size.width - this.state.pendingWidth
                          });
        }

    }

    // show  this node from the default view  - hides messy no-op nodes that break vertical density
    //  (TODO remove this when we have parent-heritage)
    isNodeShownByDefault(node) {
        return node.started !== node.completed;

    }

    setZoomLevel(level) {
        this.state.zoomLevel = level;
        this.state.pxPerMs = zoomLevels[level];
        this.updateGraphDetails(this.state.graph);
    }

    updateGraphDetails(graph) {

        var newGraph = graph !== this.state.graph;
        let update = {graph};

        if (newGraph) {
            console.log("New graph selected");
            update.cursorTs = graph.created;
            this.startWatch();
        }

        const maxTs = graph.isLive() ? Date.now() : graph.finished;
        let curDurationTs = (maxTs - graph.created);

        if (this.state.autoScroll) {
            if (curDurationTs > (this.state.viewPortWidth / this.state.pxPerMs)) {
                update.cursorTs =
                    graph.created + (curDurationTs - (this.state.viewPortWidth
                                                      / this.state.pxPerMs));
            }
            if (this.state.autoVScroll) {
                update.verticalScrollRatio = 1.0;
                update.verticalScrollPosition =
                    this.state.viewPortHeight - this.state.scrollBarHeight;

            }
        } else {
            update.cursorTs =
                Math.min(this.state.cursorTs, maxTs - this.state.viewPortWidth
                                              / this.state.pxPerMs);
            update.cursorTs = Math.max(update.cursorTs, graph.created);

        }

        if (graph.isLive()) {
            update.maxTimeStamp = Date.now();
        } else {
            update.maxTimeStamp = graph.finished;
        }

        let lastGraphEvent = graph.all_events.length > 0 ? graph.all_events[graph.all_events.length
                                                                            - 1] : null;

        let timeline;
        if (this.state.lastEvent !== lastGraphEvent) {
            console.log("Updating graph");
            timeline = update.timeline = graph.createTimeline(this.isNodeShownByDefault);
            update.lastEvent = lastGraphEvent;
        } else {
            timeline = this.state.timeline;
        }

        let graphHeight = Math.max(this.state.viewPortHeight, this.state.nodeHeight
                                                              * (timeline.maxRanks()));
        update.graphHeight = graphHeight;
        let maxScroll = Math.max(0, graphHeight - this.state.viewPortHeight);
        update.maxScroll = maxScroll;
        let selectedDeps = new Set();
        if (this.state.selectedNode && (this.state.selectedNode.state !== 'graph')) {
            this.state.selectedNode
                .transitiveDeps(true)
                .forEach(n => selectedDeps.add(n.id()));

            selectedDeps.add(this.state.selectedNode.id());
            if (this.state.selectedNode.caller) {

                selectedDeps.add(this.state.selectedNode.caller.id());
            }
        }

        update.selectedDeps = selectedDeps;
        if (maxScroll > 0) {
            update.scrollBarHeight =
                this.state.viewPortHeight * (this.state.viewPortHeight / graphHeight);
        } else {
            update.scrollBarHeight = this.state.viewPortHeight;
        }

        this.setState(update);
    }

    componentWillUnmount() {
        if (this.currentTimeout) {
            clearTimeout(this.currentTimeout);
            this.currentTimeout = null;
        }
    }

    componentDidMount() {
        this.updateGraphDetails(this.state.graph);
        this.startWatch();
    }

    manualScrollX(ts) {
        this.setState({autoScroll: false, cursorTs: ts});
    }

    manualScrollY(s) {
        //console.log("Scroll: ", s);
        this.setState({autoVScroll: false, verticalScrollRatio: s});
    }

    updateScroll() {
        this.updateGraphDetails(this.state.graph);

        if (this.state.graph.isLive()) {
            this.currentTimeout = setTimeout(this.updateScroll, 50);
        } else {
            this.scrolling = false;
            this.setState({autoScroll: false});
        }
    }

    startWatch() {
        if (!this.scrolling) {
            this.currentTimeout = setTimeout(this.updateScroll, 50);
            this.scrolling = true;
        }
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

    playPauseButtonClicked() {
        let newState = true;
        if (this.state.autoScroll) {
            newState = false;
        }

        if (newState && this.state.selectedNode) {
            this.state.selectedNode = null;
            this.state.onNodeSelected(this.state.graph, null);
        }
        this.setState({autoScroll: newState, autoVScroll: newState});
    }

    // TODO: Use somebody elses scroll bar.
    onDragStart(e) {
        this.state.dragging = true;
        this.state.dragStartY = e.screenY;
        let listeners = {};
        listeners.moveListener = (wmme) => {
            let deltaY = wmme.screenY - this.state.dragStartY;
            let maxScrollPosition = this.state.viewPortHeight - this.state.scrollBarHeight;
            let inverted = this.state.scrollBarHeight / (this.state.viewPortHeight
                                                         - this.state.verticalScrollPosition);

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

        if (!this.state.timeline) {
            return null;
        }

        // converts a timestamp to a relative X in the display viewport
        let relativeX = function (timeStamp) {
            return ((timeStamp - startTs) * self.state.pxPerMs);
        };

        let pendingElems = [(<div key='pending-title'
                                  className={styles.pendingTitle}
        > Pending Events: </div>)];

        let nodeElements = [];

        this.state.timeline.activeNodes.forEach((node, idx) => {

            let createTs = relativeX(node.created);

            if (!this.state.timeline.rankMap.has(node.id())) {
                console.log("no rank for", node.id());
                return;
            }
            let rank = this.state.timeline.rankMap.get(node.id());

            let styleExtra = [];
            if (node.op === 'invokeFunction') {
                styleExtra.push(styles.invokeFunction);
            } else if (node.op === 'main') {
                styleExtra.push(styles.lifecycle);
            }
            let displayNode = this.isNodeShownByDefault(node);
            if (this.state.selectedNode) {
                if (this.state.selectedDeps.has(node.id())) {
                    displayNode = true;
                    styleExtra.push(styles.highlighted);
                } else {
                    styleExtra.push(styles.faded);
                }
            }


            node.deps().forEach((depnode) => {
                if (this.isNodeShownByDefault(depnode) && depnode.isCompleted()) {
                    let depEndPx = relativeX(depnode.completed);
                    let nodeStartPx = relativeX(node.started);

                    let deprank = this.state.timeline.rankMap.get(depnode.id());

                    let depY = (5 + (deprank * this.state.nodeHeight)) + (this.state.nodeHeight / 2);
                    let nodeY = (5 + (rank * this.state.nodeHeight)) + (this.state.nodeHeight / 2);

                    nodeElements.push(<div key={node.id() + "_" + depnode.id() + "_h"}
                                       className={styles.horizLine} style={{
                        left: depEndPx,
                        width: (nodeStartPx - depEndPx) + 'px',
                        top: nodeY
                    }}>&nbsp;</div>);


                    nodeElements.push(<div key={node.id() + "_" + depnode.id() + "_v"}
                                       className={styles.verticalLine} style={{
                        left: depEndPx,
                        height: depY - nodeY + 'px',
                        top: depY
                    }}>&nbsp;</div>);
                    console.log(`${deprank} (${depEndPx}, ${depY}) -> (${nodeStartPx}, ${nodeY})`);
                }
            });

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
                deps = "Dependencies: Stage " + node.dependencies.map((n) => n.id());
            }

            let startPx = relativeX(node.started);
            let widthPx;
            let durationMs;
            if (node.completed) {
                widthPx = relativeX(node.completed) - relativeX(node.started);
                durationMs = node.completed - node.started;
            } else {
                widthPx = relativeX(Date.now()) - relativeX(node.started);
                durationMs = Date.now() - node.started;
            }

            let waitingTime = startPx - createTs;
            let waitElem;
            if (waitingTime > 10) {
                //waitElem = this.createWaitingElem(idx, this.state.nodeHeight, createTs,
                // waitingTime);
            }

            let runboxStyle = {
                position: 'absolute',
                height: (this.state.nodeHeight - 10 ) + 'px',
                width: '' + widthPx + 'px',
                top: '' + (5 + (rank * this.state.nodeHeight)) + 'px',
                left: startPx
            };
            let nodeLabel;
            if (node.op === 'invokeFunction' || node.op === 'main') {
                nodeLabel = node.function_id;
            } else {
                nodeLabel = node.op;
            }

            if (displayNode) {
                nodeElements.push(<div key={node.id() + "_1"}>
                        <div className={styles.node + ' ' + styleExtra.join(' ')}
                             style={runboxStyle}
                             onClick={(e) => this.selectNode(node)}
                             data-tooltip={node.op + ": " + node.state + "\n" + deps}
                        > {node.id()}: {nodeLabel} {durationMs ? (durationMs.toFixed(0) + 'ms')
                            : ""}</div>
                    </div>
                );
            }

        });

        this.state.timeline.pendingNodes.forEach((node, idx) => {

            let styleExtra = [styles.pending];

            let deps = "";

            if (this.state.selectedNode === node) {
                styleExtra.push(styles.selected);
            }
            let index = this.state.timeline.pendingNodes.indexOf(node);
            let pendingboxStyle = {
                left: '3px',
                position: 'absolute',
                height: '20px',
                top: '' + ((index + 1) * this.state.nodeHeight) + 'px',
            };
            let pendElem = (
                <div key={node.id() + "_1"} className={styles.node + ' ' + styleExtra.join(' ')}
                     style={pendingboxStyle}
                     onClick={(e) => this.selectNode(node)}
                     data-tooltip={node.op + ": " + node.state + "\n" + deps}
                > {node.id()}:{node.op} </div>);
            pendingElems.push(pendElem);
        });

        let leftPosition;
        if ((relativeX(this.state.maxTimeStamp) < this.state.viewPortWidth)) {
            leftPosition =
                {left: relativeX(this.state.maxTimeStamp), height: this.state.graphHeight + 'px'}
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
                         style={{
                             width: this.state.viewPortWidth - 3 + 'px',
                             height: this.state.viewPortHeight + 'px'
                         }}>

                        <div className={styles.scrollingArea} style={{
                            left: -relativeX(this.state.cursorTs) + 'px',
                            top: -this.state.verticalScrollRatio * Math.max(
                                0, this.state.graphHeight - this.state.viewPortHeight) + 'px',
                            width: Math.max(this.state.width, relativeX(this.state.maxTimeStamp)
                                                              - relativeX(this.state.graph.created))
                                   + 'px',
                            height: this.state.graphHeight + 'px'
                        }}>
                            <div className={styles.currentLine} style={leftPosition}>
                            </div>
                            {nodeElements}
                        </div>
                        <div style={{
                            zIndex: 5,
                            display: 'block',
                            position: 'absolute',
                            left: this.state.viewPortWidth - 150,
                            top: this.state.viewPortHeight - 30,
                        }}>
                            <ButtonGroup>
                                <Button disabled={!this.state.graph.isLive()}
                                        onClick={() => this.playPauseButtonClicked()}><Glyphicon
                                    glyph={this.state.autoScroll ? "pause" : "play"}/></Button>
                                <Button disabled={this.state.zoomLevel === 0}
                                        onClick={() => this.setZoomLevel(this.state.zoomLevel - 1)}><Glyphicon
                                    glyph="zoom-out"/></Button>
                                <Button disabled={this.state.zoomLevel + 1 >= zoomLevels.length}
                                        onClick={() => this.setZoomLevel(this.state.zoomLevel + 1)}><Glyphicon
                                    glyph="zoom-in"/></Button>
                            </ButtonGroup>
                        </div>
                        <div className={styles.verticalScroll} style={{
                            height: this.state.viewPortHeight + 'px',
                            left: (this.state.viewPortWidth - 25) + 'px',
                            top: '0px',
                            position: 'absolute',
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
                            width: this.state.pendingWidth - 3 + 'px',
                            position: 'absolute',
                            height: this.state.viewPortHeight + 'px',
                            left: this.state.viewPortWidth + 'px',
                            top: '0px'
                        }}>

                            <div>{pendingElems}</div>
                        </div>

                    </div>

                    <ZoomLine graph={this.state.graph}
                              windowDurationMs={this.state.viewPortWidth / this.state.pxPerMs}
                              cursorTs={this.state.cursorTs}
                              maxTs={this.state.maxTimeStamp + 1000}
                              live={this.state.live}
                              height={this.state.zoomLineHeight - 4}
                              onScrollChanged={this.manualScrollX}
                              width={this.state.viewPortWidth + 3}/>


                </div>

            </div>
        );
    }
}

export default sizeMe()(GraphTimeline);
