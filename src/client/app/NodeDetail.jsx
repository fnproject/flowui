import React from 'react';

import styles from './nodedetail.css';
import {Glyphicon} from 'react-bootstrap';

class NodeDetail extends React.Component {

    constructor(props) {
        super(props);
        //console.log(props);

        this.state = {
            node: props.node,
            nodeLogs: props.nodeLogs || new Map(),
            nodeCalls: props.nodeCalls || new Map()
        };

    }

    componentWillReceiveProps(props) {
        this.setState(props);
    }

    componentDidMount() {
    }

    formatTime(timeStamp) {

        var date = new Date(timeStamp);
        //return date.toTimeString();
        var hours = "0" + date.getHours();
        var minutes = "0" + date.getMinutes();
        var seconds = "0" + date.getSeconds();
        var milliSeconds = "0" + date.getMilliseconds();

        if (timeStamp == null) {
            return " ...";
        }
        return hours.substr(-2) + ':' + minutes.substr(-2) + ':' + seconds.substr(-2);
    }

    render() {
        let fullLogs = [];
        let triggered = "";
        let call_queued = "";
        let call_total = "";
        let call_running = "";
        let call_cost = "";
        let total_viz = "";

        function nodeTitle(node) {
            if (node.op === 'main') {
                return node.function_id;
            } else if (node.op === 'invokeFunction') {
                return node.function_id;
            } else {
                return node.op;
            }
        }

        let sortNodes = Array.from(this.state.nodeLogs.keys());
        sortNodes = sortNodes.sort((a, b) => {
            if (a.started && b.started) {
                return a.started - b.started;
            } else if (a.started && !b.started) {
                return -1;
            } else if (!a.started && b.started) {
                return 1;
            } else {
                if (a.dependsOn(b)) {
                    return 1;
                } else if (b.dependsOn(a)) {
                    return -1;
                }
                return a.id().localeCompare(b.id());
            }
        });
        sortNodes = sortNodes.reverse();
        let prevNode;

        let badgeStyle = [];
        let icon = "";
        let stageText = "";

        switch (this.state.node.state) {
        case 'running':
            badgeStyle = styles.running;
            icon = "retweet";
            stageText = "Running";
            break;
        case 'pending':
            badgeStyle = styles.pending;
            icon = "clock";
            stageText = "Pending";
            break;
        case 'successful':
            badgeStyle = styles.successful;
            icon = "ok";
            stageText = "Complete";
            break;
        case 'failed':
            badgeStyle = styles.failed;
            icon = "remove";
            stageText = "Failed";
            break;
        }

        fullLogs.push((
            <div key={0} className={styles.logNode + " " + styles.mainNode}>
              <div className={styles.logNodeInner}>
                <div key={0 + '-header'} className="">
                  <div className={styles.node}>
                    <div className={`${styles.chain} ${styles.chainSpace}`}><Glyphicon glyph={icon}/></div>
                    <div className={styles.chainSpace}>Stage {stageText}</div>
                  </div>
                </div>
              </div>
            </div>));

        sortNodes.forEach((node, idx) => {
            let selected;

            if (idx === 0 ) {
                selected = styles.nodeSelected;
            } else {
                selected = "";
            }
            let logs = this.state.nodeLogs.get(node);
            let badgeStyle = [];
            let icon = "";
            switch (node.state) {
            case 'running':
                badgeStyle = styles.running;
                icon = "retweet";
                break;
            case 'pending':
                badgeStyle = styles.pending;
                icon = "clock";
                break;
            case 'successful':
                badgeStyle = styles.successful;
                icon = "ok";
                break;
            case 'failed':
                badgeStyle = styles.failed;
                icon = "remove";
                break;
            }

            let title = nodeTitle(node);
            let currentNode = [];
            let outerTitle = "";

            let timeLapsed = 0;
            if (idx === sortNodes.length - 1) {
                timeLapsed =  sortNodes[idx - 1].started - node.started;
            } else {
                timeLapsed = node.completed - node.started;
            }
            currentNode.push(
                (<div key={node.id() + '-header'} className="">
                 <div className={styles.link}>{timeLapsed}ms</div>
                 <div className={`${styles.node}`}>
                 <div className={`${styles.chain} ${styles.chainSpace} ${selected}`}><Glyphicon glyph={icon}/></div>
                 <div className={styles.chainSpace}>{title}</div>
                 </div>
                 </div>));

            if (logs) {
                currentNode.push(<div key={node.id() + '-log'} className={styles.logEntry}>{logs}</div>);
            }
            fullLogs.push((<div key={node.id()} className={styles.logNode + (idx === 0 ? " " + styles.mainNode : "")}>
                           {outerTitle}
                           <div className={styles.logNodeInner}>
                           {currentNode}
                           </div>
                           </div>));
            prevNode = node;
        }
                         );


        if (this.state.node.started == null) {
            triggered = "";
        } else {
            triggered = "Triggered: " + this.formatTime(this.state.node.started);
        }


        if (this.state.node.created && this.state.node.started) {
            call_queued = this.state.node.started - this.state.node.created;
        }
        if (this.state.node.started && this.state.node.completed) {
            call_running = this.state.node.completed - this.state.node.started;
        }

        if (this.state.node.created && this.state.node.completed) {
            call_total = this.state.node.completed - this.state.node.created;
        }

        if (call_total > call_running) {
            total_viz = (
                <div>
                  <div className={styles.lines}></div>
                  <div className={styles.middleTick}></div>
                  <div className={styles.total}>{call_total}ms</div>
                </div>
            );
        }


        return (
            <div>
              <h3 style={{"padding-left": "1em"}}>Stage {this.state.node.stage_id === "main" ? "0" : this.state.node.stage_id}. {this.state.node.op}</h3>
              <div className={styles.panels}>
                <div className="panel panel-default">
                  <div style={{"padding-left": "2em"}} className="panel-body">
                    {fullLogs}
                  </div>
                </div>

                <div className="panel panel-default" style={{"border-left": "1px solid lightgrey"}}>
                  <div className="panel-body">
                    <div className="detail">
                      <h4>{triggered}</h4>
                      <h4>Call Id: {this.state.node.call_id}</h4>
                      <h4>Code Location: {this.state.node.code_location}</h4>
                    </div>
                  </div>
                </div>

              </div>
            </div>
        );
    }
}


export default NodeDetail;
