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
            selectedStage: null,
            dependenciesOfSelected: new Set(),
            responseOfSelected: null,
            cursorTs: props.graph.created,
            intervalTimer: -1,
        };
        this.selectStage = this.selectStage.bind(this);
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


    selectStage(stage) {
        if (stage.call_id) {
            console.log(stage.function_id);
            let self = this;
            let index = stage.function_id.indexOf("/");
            let appId = stage.function_id.substring(0, index);
            fetch(`http://localhost:8080/v1/apps/${appId}/calls/${stage.call_id}/log`)
                .then(
                    function (response) {
                        if (response.ok) {
                            console.log('Looks like there was a problem. Status Code: ' +
                                response.status);
                            return;
                        }

                        response.json()
                            .then(function (data) {
                                self.state.responseOfSelected = data;
                            })
                            .catch(console.log);
                    }
                )
                .catch(function (err) {
                    console.log('Fetch Error :-S', err);
                });
        }

        this.state.selectedStage = stage;
        this.state.onNodeSelected(this.state.graph, stage);
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
        let stages = this.state.graph.getNodes();
        //console.log(`graph timelines are ${this.state.graph.created} ->${minCreateTime}`);
        let startTs = this.state.graph.created;

        let pxPerMs = this.state.pxPerMs;
        // converts a timestamp to a relative X in the display viewport
        let relativeX = function (timeStamp) {
            return (timeStamp - startTs) * pxPerMs;
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
        let stageElems = [];

        stageElems.push(mainFnElem);

        let highlightedStages = new Set();
        if (this.state.selectedStage) {
            highlightedStages = this.state.graph.findDepIds(this.state.selectedStage.stage_id);
        }

        stages.forEach((stage, idx) => {
            let createPx = relativeX(stage.created);

            let css_classes = [];
            switch (stage.state) {
                case 'failed':
                    css_classes.push(styles.failed);
                    if (this.state.dependenciesOfSelected.has(stage.stage_id)) {
                        css_classes = styles.depfailed;
                    }
                    break;
                case 'successful':
                    css_classes.push(styles.successful);
                    break;
                case 'running':
                    css_classes.push(styles.running);
                    break;
                case 'pending':
                    css_classes.push(styles.pending);
                    break;

            }

            if (this.state.selectedStage) {
                if (this.state.selectedStage === stage) {
                    css_classes.push(styles.selected);
                }else if (highlightedStages.has(stage.stage_id)){
                    css_classes.push(styles.highlighted);
                }else{
                    css_classes.push(styles.faded);
                }
            }


            let deps = "";
            if (stage.dependencies.length !== 0) {
                deps = "Dependencies: Stage " + stage.dependencies;
            }


            if (stage.state === 'pending') {
                let pendingboxStyle = {
                    position: 'absolute',
                    height: '20px',
                    top: '' + ((idx + 1) * this.state.nodeHeight) + 'px',
                };
                let pendElem = (<div key={stage.stage_id + 1} className={styles.node + ' ' + css_classes.join(' ')}
                                     style={pendingboxStyle}
                                     onClick={(e) => this.selectStage(stage)}
                                     data-tooltip={stage.op + ": " + stage.state + "\n" + deps}
                > {stage.stage_id}:{stage.op} </div>);
                pendingElems.push(pendElem);
                let waitElem = this.createWaitingElem(idx, this.state.nodeHeight, createPx, relativeX(Date.now()) - createPx);
                stageElems.push(<div key={stage.stage_id + 1}>{waitElem}</div>);

            } else {
                let startPx = relativeX(stage.started);
                let widthPx = (stage.completed ? relativeX(stage.completed) : relativeX(Date.now())) - relativeX(stage.started);
                let durationMs = stage.completed ? stage.completed - stage.started : Date.now() - stage.started;
                let waitingTimePx = startPx - relativeX(stage.created);
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
                stageElems.push(<div key={stage.stage_id + 1}>
                        {waitElem}
                        <div className={styles.node + ' ' + css_classes.join(' ')}
                             style={runboxStyle}
                             onClick={(e) => this.selectStage(stage)}
                             data-tooltip={stage.op + ": " + stage.state + "\n" + deps}
                        > {stage.stage_id}:{stage.op} {durationMs ? (durationMs.toFixed(0) + 'ms') : ""}</div>
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
                    <div className={styles.viewport} >
                        <div className={styles.innerViewport} id="innerViewport" style={thisStyle}>
                            {stageElems}
                        </div>
                    </div>
                    <div>{pendingElems}</div>
                </div>
                <ZoomLine graph={this.state.graph} windowDurationMs={1024 / pxPerMs} cursorTs={this.state.cursorTs}
                          maxTs={this.state.relativeTimestamp}
                          minScale={this.state.pxPerMs}
                          onScrollChanged={this.updateScroll} width={850}/>
                <div className={styles.nodeInfo}>
                    {JSON.stringify(this.state.responseOfSelected)}
                </div>
            </div>
        );
    }
}

export default GraphTimeline;
