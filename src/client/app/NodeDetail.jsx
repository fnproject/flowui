import React from 'react';

import styles from './nodedetail.css';

class NodeDetail extends React.Component {

    constructor(props) {
        super(props)
        //console.log(props);

        this.state = {
            node: props.node,
            nodeLogs: props.nodeLogs
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
        let op;
        let started = "";
        let finished = "";

        function nodeTitle(node) {
            if (node.op === 'main' || node.op === 'invokeFunction') {
                return node.function_id;
            } else {
                return node.op;
            }
        }

        if (this.state.node.state !== 'graph') {
            var sortNodes = Array.from(this.state.nodeLogs.keys());
            sortNodes = sortNodes.sort((a, b) => {
                if (a.started && b.started) {
                    return a.started - b.started;
                } else if (a.started && !b.started) {
                    return -1;
                } else if (!a.started && b.started) {
                    return 1;
                } else {
                    return a.stage_id.localeCompare(b.stage_id);
                }
            });

            sortNodes.forEach((node) => {
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

                    var title = nodeTitle(node);


                    fullLogs.push((<div key={node.stage_id + '-header'} className={styleExtra.join(' ')}>
                        {node.stage_id} {title} {node.state === 'failed' ? "(Failed)" : ""}
                        <div className={styles.rightHeader}>{node.started ? this.formatTime(node.started) : "pending"}</div>
                    </div>));

                    if(node.code_location){
                        fullLogs.push((<div key={node.stage_id + '-codeloc'} className={styles.codeLocation}>
                            {node.code_location}
                        </div>))
                    }

                    if (logs) {
                        fullLogs.push(<div key={node.stage_id + '-log'} className={styles.logEntry}>{logs}</div>);
                    }
                }
            );

            stageId = this.state.node.stage_id;
            op = this.state.node.op;

            if (this.state.node.started == null) {
                started = "Started: ...";
            }

            else {
                started = "Started: " + this.formatTime(this.state.node.started);
            }
            if (this.state.node.completed == null) {
                finished = "Finished: ...";
            } else {
                finished = "Finished: " + this.formatTime(this.state.node.completed);
            }

            if (this.state.node.completed == null) {
                duration = " ...";
            } else {
                duration = (this.state.node.completed - this.state.node.started) + "ms";
            }
        } else {
            stageId = "Graph";
            if (this.state.node.main_ended == null) {
                duration = " ...";
            } else {
                duration = (this.state.node.main_ended - this.state.node.created) + "ms";
            }
        }

        return (<div className={styles.nodeInfoBox}>
            <h3>{stageId} : {nodeTitle(this.state.node)}</h3>
            <div style={{display:'flex'}}>
                <div style={{
                    display: 'inline-block', minHeight: '200px', maxHeight: '300px',
                    overflow:'scroll',
                    minWidth: '700px'
                }}>
                    {fullLogs}
                </div>
                <div className={styles.nodeInfo} style={{display: 'block'}}>
                    Created: {this.formatTime(this.state.node.created)}<br/>
                    {started}<br/>
                    {finished}<br/>
                    Duration: {duration}<br/>
                </div>
            </div>
        </div>);


    }
}


export default NodeDetail;
