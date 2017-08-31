import React from 'react';

import styles from './graphtimeline.css'

class GraphTimeline extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            onNodeSelected: props.onNodeSelected,
            graph: props.graph,
            selectedNode: null,
            relativeTimestamp:Date.now()
        };
        this.selectNode = this.selectNode.bind(this);
        setInterval(()=>{this.state.relativeTimestamp = Date.now(); this.setState(this.state)},50);
    }

    componentDidMount() {

    }

    selectNode(node) {
        this.state.selectedNode = node;
        this.setState(this.state);
        this.state.onNodeSelected(this.state.graph, node);
    }

    render() {
        let completedTime = null;
        let nodes = this.state.graph.getNodes();


        let minCreateTime = nodes.reduce((v, n) => Math.min(v, n.created), Infinity);

        let maxTime = nodes.reduce((v, n) => Math.max(v, n.completed), -Infinity);

        console.log(`graph timelines are ${this.state.graph.created} ->${minCreateTime} -> ${maxTime}`);


        let startTs = this.state.graph.created;

        let relativeX = function (timeStamp) {
            return (timeStamp - startTs) * 0.1;
        };

        let pendingElems = [];
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

                waitElem =(<div>
                  <div className={styles.createnode} style={createboxStyle}>&nbsp;</div>
                <div className={styles.hdepline} style={depLineStyle}>&nbsp;</div>
                </div>);
            }

            let deps = ""
            if(node.dependencies.length !== 0){
              deps = "Dependencies: Stage " + node.dependencies;
            }

            idx++;
            if(node.state === 'pending'){
              let pendElem = (<div className={styles.node + ' ' + styleExtra}
                   style={runboxStyle}
                   onClick={(e) => this.selectNode(node)}
                   data-tooltip={node.op + ": " + node.state + "\n" + deps}
                   > {node.stage_id}:{node.op} {duration.toFixed(0) + 'ms'}</div>);
              pendingElems.push(pendElem);
              return (<div></div>);
            }
            return (<div key={node.stage_id}>
                    {waitElem}
                    <div className={styles.node + ' ' + styleExtra}
                         style={runboxStyle}
                         onClick={(e) => this.selectNode(node)}
                         data-tooltip={node.op + ": " + node.state + "\n" + deps}
                         > {node.stage_id}:{node.op} {duration.toFixed(0) + 'ms'}</div>
                    </div>
            );
        });

        let widthDiff = 700;
        let pendElems = pendingElems.map((elem) =>{
          return elem;
        })

        let thisStyle;

        if((this.state.graph.finished < this.state.relativeTimestamp) && (this.state.graph.finished !== null)){
          widthDiff = widthDiff - (relativeX(this.state.graph.finished) + 10);
          thisStyle = {left: widthDiff}
        } else {
          widthDiff = widthDiff - (relativeX(this.state.relativeTimestamp));
          thisStyle = {left: widthDiff + 'px', overflow: 'visible'};
        }

        return (
          <div>
            <div className={styles.outerView}>
                <div className={styles.viewport}>
                  <div className={styles.innerViewport} id="innerViewport" style={thisStyle}>
                    {nodeElements}
                  </div>
                </div>
                <div>{pendElems}</div>
            </div>
              <div>ts:{this.state.relativeTimestamp}</div>
          </div>
        );
    }
}

export default GraphTimeline;
