import React from 'react';

import styles from './graphtimeline.css'

class GraphTimeline extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            onNodeSelected: props.onNodeSelected,
            graph: props.graph,
            selectedNode: null,
            relativeTimestamp: Date.now()
        };
        this.selectNode = this.selectNode.bind(this);


        this.tick = this.tick.bind(this);
        this.timer = setInterval(this.tick, 50);
    }

    tick() {
        this.state.relativeTimestamp = Date.now();
        this.setState(this.state)
        if (this.state.graph.completed && ( this.state.graph.completed + 30 > this.state.relativeTimestamp)) {
            clearInterval(this.timer);
            this.timer = null;
        }
    }

    componentDidMount() {

    }


    componentWillUnmount() {
        if (this.timer !== null) {
            clearInterval(this.timer);
            this.timer = null;
        }
    }

    selectNode(node) {
        this.state.selectedNode = node;
        this.setState(this.state);
        this.state.onNodeSelected(this.state.graph, node);
    }

    render() {
        let nodes = this.state.graph.getNodes();

        let startTs = this.state.graph.created;

        let relativeX = function (timeStamp) {
            return (timeStamp - startTs) * 0.05;
        };

        let runningElements = [];
        let pendingElements = [];

        nodes.forEach((node, idx) => {
            let createTs = relativeX(node.created);

            let styleExtra = '';
            switch (node.state) {
                case 'failed':
                    styleExtra = styles.failed;
                    break;
                case 'successful':
                    styleExtra = styles.successful;
                    break;
                case 'running':
                    styleExtra = styles.running;
                    break;
                case 'pending':
                    styleExtra = styles.pending;
                    break;

            }

            if (this.state.selectedNode === node) {
                styleExtra += ' ' + styles.selected;
            }

            const nodeHeight = 30;
            let deps = "";
            if (node.dependencies.length !== 0) {
                deps = "Dependencies: Stage " + node.dependencies;
            }

            if (node.started) {
                let duration = relativeX(node.completed) - relativeX(node.started);

                let startTs = relativeX(node.started);

                let runboxStyle = {
                    position: 'absolute',
                    height: '20px',
                    width: '' + duration + 'px',
                    top: '' + (idx * nodeHeight) + 'px',
                    left: startTs
                };

                let waitingTime = startTs - createTs;


                let waitElem;

                if (waitingTime > 10) {
                    waitElem = GraphTimeline.createWaitLine(idx, nodeHeight, createTs, startTs);
                }

                runningElements.push(<div key={node.stage_id}>
                        {waitElem}
                        <div className={styles.node + ' ' + styleExtra}
                             style={runboxStyle}
                             onClick={(e) => this.selectNode(node)}
                             data-tooltip={node.op + ": " + node.state + "\n" + deps}
                        > {node.stage_id}:{node.op} {duration.toFixed(0) + 'ms'}</div>
                    </div>
                );
            } else {

                let waitElem = GraphTimeline.createWaitLine(idx, nodeHeight, createTs, Date.now());
                runningElements.push(<div key={node.stage_id}>{waitElem}</div>);
                let pendingStyle = {
                    position: 'absolute',
                    height: '20px',
                    top: '' + (idx * nodeHeight) + 'px',
                };
                pendingElements.push(<div key={node.stage_id}>
                        <div className={styles.node + ' ' + styleExtra}
                             style={pendingStyle}
                             onClick={(e) => this.selectNode(node)}
                             data-tooltip={node.op + ": " + node.state + "\n" + deps}
                        > {node.stage_id}:{node.op}</div>
                    </div>
                );
            }

        });

        let widthDiff = 850;

        widthDiff = widthDiff - (relativeX(this.state.relativeTimestamp));

        let position = {left: widthDiff + 'px'};
        return (
            <div>
                <div className={styles.outerView}>
                    <div className={styles.viewport}>
                        <div className={styles.innerViewport} id="innerViewport" style={position}>
                            {runningElements}
                        </div>
                    </div>
                    <div className={styles.pendingArea}> {pendingElements}</div>
                </div>
            </div>
        );
    }

    static createWaitLine(idx, nodeHeight, createTs, startTs) {
        let createboxStyle = {
            position: 'absolute',
            height: '20px',
            width: 1,
            top: '' + (idx * nodeHeight) + 'px',
            left: createTs
        };

        let depLineStyle = {
            position: 'absolute',
            width: startTs - createTs,
            height: '1px',
            top: '' + ((idx * nodeHeight) + nodeHeight / 2 - 5) + 'px',
            left: createTs
        };
        return (<div>
            <div className={styles.createnode} style={createboxStyle}>&nbsp;</div>
            <div className={styles.hdepline} style={depLineStyle}>&nbsp;</div>
        </div>);
    }
}

export default GraphTimeline;
