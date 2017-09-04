import React from 'react';

import styles from './graphtimeline.css'
import ZoomLine from "./ZoomLine.jsx";

class GraphTimeline extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            onNodeSelected: props.onNodeSelected,
            graph: props.graph,
            live:  props.live,
            selectedNode: null,
            dependenciesOfSelected: new Set(),
            relativeTimestamp: Date.now(),
            cursorTs: Date.now(),
            intervalTimer: -1,
            responseOfSelected: null
        };
        this.selectNode = this.selectNode.bind(this);
        this.updateScroll = this.updateScroll.bind(this);

        this.state.graph.On('model.GraphCompletedEvent',(evt)=>{
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

        this.state.relativeTimestamp = ts;
        this.setState(this.state);

    }

    setLive(live) {
        this.state.live = live;
        if (live) {
            this.state.intervalTimer = setInterval(()=>{
                this.state.relativeTimestamp = this.state.cursorTs = Date.now();
                this.setState(this.state);
            },50);
        }else{
            if(this.state.intervalTimer> 0){
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
                if (data.error) {
                  self.state.responseOfSelected = "Error - " + data.error.message;
                } else {
                  self.state.responseOfSelected = JSON.stringify(data);
                }
              })
              .catch(console.log);
          }
        )
        .catch(function(err) {
          console.log('Fetch Error :-S', err);
        });
      } else {
        this.state.responseOfSelected = "This event is not an external call";
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
        let minCreateTime = nodes.reduce((v, n) => Math.min(v, n.created), Infinity);

        //console.log(`graph timelines are ${this.state.graph.created} ->${minCreateTime}`);


        let startTs = this.state.graph.created;
        let pxPerMs = 0.06;

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
        }

        let lifeWidth;
        if (this.state.graph.main_ended !== null) {
            lifeWidth = relativeX(this.state.graph.main_ended);
        } else {
            lifeWidth = 1024;
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
        style={{position:'absolute', height:'20px', top:'0px', left:'706px', color:'grey'}}
        > Pending Events: </div>)];

        let nodeElements = [];
        var dependencyMap = new Map();

        nodeElements.push(lifeElem);

        nodes.forEach((node, idx) => {
            let createTs = relativeX(node.created);
            dependencyMap.set(node.stage_id, node.dependencies);

            var styleExtra = '';
            switch (node.state) {
                case 'failed':
                    styleExtra = styles.failed;
                    if(this.state.dependenciesOfSelected.has(node.stage_id)) {
                      styleExtra = styles.depfailed;
                    } else if(this.state.dependenciesOfSelected.size !== 0){
                      styleExtra = styles.notdep;
                    }
                    break;
                case 'successful':
                    styleExtra = styles.successful;
                    if(this.state.dependenciesOfSelected.has(node.stage_id)) {
                      styleExtra = styles.depsuccess;
                    } else if(this.state.dependenciesOfSelected.size !== 0){
                      styleExtra = styles.notdep;
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
                let pendElem = (<div key={node.stage_id + 1} className={styles.node + ' ' + styleExtra}
                                     style={pendingboxStyle}
                                     onClick={(e) => this.selectNode(node)}
                                     data-tooltip={node.op + ": " + node.state + "\n" + deps}
                > {node.stage_id}:{node.op} </div>);
                pendingElems.push(pendElem);
                let waitElem = this.createWaitingElem(idx, nodeHeight, createTs, relativeX(this.state.relativeTimestamp) - createTs);
                nodeElements.push(<div key={node.stage_id + 1}>{waitElem}</div>);

            } else {
                let startTs = relativeX(node.started);
                let duration = relativeX(node.completed) - relativeX(node.started);

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
                        <div className={styles.node + ' ' + styleExtra}
                             style={runboxStyle}
                             onClick={(e) => this.selectNode(node)}
                             data-tooltip={node.op + ": " + node.state + "\n" + deps}
                        > {node.stage_id}: {node.op} {duration ? (duration.toFixed(0) + 'ms') : ""}</div>
                    </div>
                );
            }
        });

        let widthDiff = 850;

        let thisStyle;

        if ((this.state.graph.finished < this.state.relativeTimestamp) && (this.state.graph.finished !== null)) {
            let timePlus = relativeX(this.state.graph.finished) + 10;
            thisStyle = {left: '0px', width: timePlus + 'px'};
        } else {
            widthDiff = widthDiff - (relativeX(this.state.relativeTimestamp));
            thisStyle = {left: widthDiff, width: '1024px'};
        }

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
                          onScrollChanged={this.updateScroll} width={1024}/>
                        <div className={styles.nodeInfo} style={{color:'grey', display:'block'}}>
                          Logs of event:
                        <br/>{this.state.responseOfSelected}
                        </div>
            </div>
        );
    }
}

export default GraphTimeline;
