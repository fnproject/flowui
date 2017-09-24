import React from 'react';

import styles from './nodedetail.css';
import {Glyphicon} from 'react-bootstrap';

class NodeDetail extends React.Component {

    constructor(props) {
        super(props)
        //console.log(props);

        this.state = {
            node: props.node,
            nodeLogs: props.nodeLogs || new Map(),
            nodeCalls: props.nodeCalls || new Map(),
        };

    }

    componentWillReceiveProps(props) {
        // console.log("new props",props);
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
        return hours.substr(-2) + ':' + minutes.substr(-2) + ':' + seconds.substr(-2) + '.' + milliSeconds.substr(-2);
    }

    render() {
        let fullLogs = [];
        let triggered = "";
        let call_queued = "";
        let call_total = "";
        let call_running = "";


        function nodeTitle(node) {
            if (node.op === 'main') {
                return node.function_id + " (main call)"
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

        sortNodes.forEach((node, idx) => {
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
                if (idx !== 0) {
                    outerTitle = (<div className={styles.causedBy}>
                        {prevNode && (prevNode.caller === node) ? "created by" : "caused by"}</div>);
                }

                currentNode.push(
                    (<div key={node.id() + '-header'} className={[styles.logHeader, badgeStyle].join(" ")}>
                        <Glyphicon glyph={icon}/> {title} {node.call_id ? node.call_id : ""}
                        <div
                            className={styles.rightHeader}>  {node.started ? this.formatTime(node.started) : "pending"}</div>
                    </div>));

                if (node.code_location) {
                    currentNode.push((<div key={node.id() + '-codeloc'} className={styles.codeLocation}>
                        {node.code_location}
                    </div>))
                }

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

        let callInfo = this.state.nodeCalls.get(this.state.node);

        if (callInfo) {
            if (callInfo.created_at && callInfo.started_at) {
                call_queued = (<div>Queued: {Date.parse(callInfo.started_at) - Date.parse(callInfo.created_at)}ms</div>)
            }
            if (callInfo.started_at && callInfo.completed_at) {
                call_running = (
                    <div>Running: {Date.parse(callInfo.completed_at) - Date.parse(callInfo.started_at)}ms</div>)
            }

            if (callInfo.created_at && callInfo.completed_at) {
                call_total = (<div>Total: {Date.parse(callInfo.completed_at) - Date.parse(callInfo.created_at)}ms</div>)
            }
        }


        return (<div className={styles.nodeInfoBox}>
            <h3>Stage details</h3>
            <div style={{display: 'flex'}}>
                <div className={styles.logArea}>
                    {fullLogs}
                </div>
                <div className={styles.nodeInfo} style={{display: 'block'}}>
                    Created: {this.formatTime(this.state.node.created)}<br/>
                    {triggered}<br/>
                    {call_queued}
                    {call_running}
                    {call_total}

                </div>
            </div>
        </div>);


    }
}


export default NodeDetail;
