import React from 'react';

import styles from './nodedetail.css';

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
        let duration;
        let stageId;
        let triggered = "";
        let call_queued = "";

        let call_started = "";
        let call_ended = "";

        let finished = "";

        function nodeTitle(node) {
            if (node.op === 'main' || node.op === 'invokeFunction') {
                return node.function_id;
            } else {
                return node.op;
            }
        }

        var sortNodes = Array.from(this.state.nodeLogs.keys());
        sortNodes = sortNodes.sort((a, b) => {
            if (a.started && b.started) {
                return a.started - b.started;
            } else if (a.started && !b.started) {
                return -1;
            } else if (!a.started && b.started) {
                return 1;
            } else {
                return a.id().localeCompare(b.id());
            }
        });
        sortNodes = sortNodes.reverse();

        sortNodes.forEach((node, idx) => {
                let logs = this.state.nodeLogs.get(node);
                let styleExtra = [styles.logHeader];
                switch (node.state) {
                    case 'running':
                        styleExtra.push(styles.running);
                        break;
                    case 'pending':
                        styleExtra.push(styles.pending);
                        break;
                    case 'successful':
                        styleExtra.push(styles.successful);
                        break;
                    case 'failed':
                        styleExtra.push(styles.failed);
                        break;
                }

                let title = nodeTitle(node);
                let causedBy = null;
                if (idx !== 0) {
                    causedBy = (<div className={styles.causedBy}>
                        Caused by</div>)
                }

                fullLogs.push((<div key={node.id() + '-header'} className={styleExtra.join(' ')}>
                    {causedBy}
                    {node.id()} {title} {node.state === 'failed' ? "(Failed)" : ""} {node.call_id ? node.call_id : ""}
                    <div className={styles.rightHeader}>{node.started ? this.formatTime(node.started) : "pending"}</div>
                </div>));

                if (node.code_location) {
                    fullLogs.push((<div key={node.id() + '-codeloc'} className={styles.codeLocation}>
                        {node.code_location}
                    </div>))
                }

                if (logs) {
                    fullLogs.push(<div key={node.id() + '-log'} className={styles.logEntry}>{logs}</div>);
                }
            }
        );

        stageId = this.state.node.id();

        if (this.state.node.started == null) {
            triggered = "Triggered: Not triggered";
        } else {
            triggered = "Triggered: " + this.formatTime(this.state.node.started);
        }

        let callInfo = this.state.nodeCalls.get(this.state.node);

        if (callInfo) {
            if (callInfo.created_at) {
                call_queued = (<div>Queued: {this.formatTime(Date.parse(callInfo.created_at))}</div>)
            }
            if (callInfo.started_at) {
                call_started = (<div>Call Started: {this.formatTime(Date.parse(callInfo.started_at))}</div>)
            }
            if (callInfo.completed_at) {
                call_ended = (<div>Call Completed: {this.formatTime(Date.parse(callInfo.completed_at))}</div>)
            }
        }

        if (this.state.node.completed == null) {
            finished = "Finished: Not completed";
        } else {
            finished = "Finished: " + this.formatTime(this.state.node.completed);
        }

        if (this.state.node.completed == null) {
            duration = " ...";
        } else {
            duration = (this.state.node.completed - this.state.node.started) + "ms";
        }


        return (<div className={styles.nodeInfoBox}>
            <h3>{stageId} : {nodeTitle(this.state.node)}</h3>
            <div style={{display: 'flex'}}>
                <div className={styles.logArea} >
                    {fullLogs}
                </div>
                <div className={styles.nodeInfo} style={{display: 'block'}}>
                    Created: {this.formatTime(this.state.node.created)}<br/>
                    {triggered}<br/>
                    {call_queued}
                    {call_started}
                    {call_ended}
                    {finished}<br/>
                    Duration: {duration}<br/>
                </div>
            </div>
        </div>);


    }
}


export default NodeDetail;
