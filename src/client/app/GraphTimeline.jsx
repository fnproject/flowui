import React from 'react';

import styles from './graphtimeline.css'

class GraphTimeline extends React.Component {
    constructor(props) {
        super(props);
        console.log(props);

        this.state = {
            onNodeSelected: props.onNodeSelected,
            graph: props.graph,
            selectedNode: null,
        };
        this.selectNode = this.selectNode.bind(this);
    }

    componentDidMount() {

    }

    selectNode(node) {
        this.state.selectedNode = node;
        this.setState(this.state);
        this.state.onNodeSelected(this.state.graph, node);
    }

    render() {
        let nodes = this.state.graph.getNodes();
        let nodesString = nodes.map((n) => JSON.stringify(n)).join(", ");
        let maxTs = function (cur, ts) {
            if (cur === undefined) {
                return ts;
            }
            if (ts > cur) {
                return ts;
            }
        };

        let minCreateTime = nodes.reduce((v, n) => Math.min(v, n.created), Infinity);

        let maxTime = nodes.reduce((v, n) => Math.max(v, n.completed), -Infinity);

        console.log(`graph timelines are ${minCreateTime} -> ${maxTime}`);


        let relativeX = function (timeStamp) {
            return (timeStamp - minCreateTime) * 0.1;
        };

        let idx = 0;
        let nodeElements = nodes.map((node) => {
            let createTs = relativeX(node.created);
            let startTs = relativeX(node.started);
            let duration = relativeX(node.completed) - relativeX(node.started);

            var styleExtra = '';
            switch (node.state) {
                case 'failed':
                    styleExtra = styles.failed;
                    break;
                case 'successful':
                    styleExtra = styles.successful;
                    break;
                case 'runnning':
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

            let runboxStyle = {
                position: 'absolute',
                height: '20px',
                width: '' + duration + 'px',
                top: '' + (idx * nodeHeight) + 'px',
                left: startTs
            };

            let createboxStyle = {
                position: 'absolute',
                height: '20px',
                width: 1,
                top: '' + (idx * nodeHeight)  + 'px',
                left: createTs
            };

            let depLineStyle = {
                position: 'absolute',
                width: startTs - createTs,
                height:'1px',
                top: '' + ((idx * nodeHeight) + nodeHeight/2 - 5) + 'px',
                left: createTs
            };
            idx++;
            return (<div>
                    <div className={styles.createnode} style={createboxStyle}>&nbsp;</div>
                    <div className={styles.hdepline} style={depLineStyle}>&nbsp;</div>
                    <div className={styles.node + ' ' + styleExtra}
                         key={node.stageId}
                         style={runboxStyle}
                         onClick={(e) => this.selectNode(node)}> {node.stage_id}:{node.op} {duration.toFixed(0) + 'ms'}</div>
                </div>
            );
        });

        return (
            <div>
                <div className={styles.viewport} style={{position: 'relative', width: "1024px", height: "300px"}}>
                    {nodeElements}
                </div>
                <div>
                    {nodesString}
                </div>
            </div>
        );
    }
}

export default GraphTimeline;
