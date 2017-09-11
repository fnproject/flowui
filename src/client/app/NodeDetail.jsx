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

        this.state.node = props.node;
        this.state.nodeLogs = props.nodeLogs;

        this.setState(this.state);
    }

    componentDidMount() {
    }

    formatTime(timeStamp) {
      var date = new Date(timeStamp);
      var hours = date.getHours();
      var minutes = "0" + date.getMinutes();
      var seconds = "0" + date.getSeconds();
      var milliSeconds = "0" + date.getMilliseconds();

      if (timeStamp == null) {
        return " ...";
      }
      return hours + ':' + minutes.substr(-2) + ':' + seconds.substr(-2) + '.' + milliSeconds.substr(-2);
    }

    render() {
      let fullLogs = [];
      let duration;
      let stageId;
      let op;
      let started = "";
      let finished = "";
      if(this.state.node.state !== 'graph'){
        this.state.nodeLogs.forEach((logs,node) => {
          let logsGiven;
          if (logs == null){
            logsGiven = "No logs";
          } else {
            logsGiven = logs;
          }
          let stage = node.stage_id;
          let success = node.state
          if (success === 'successful'){
            fullLogs.push(<div key={stage} style={{color:'green'}}><em>>>> Stage {stage}</em><br/>{logsGiven}<br/></div>);
          } else if (success === 'failed'){
            fullLogs.push(<div key={stage} style={{color:'red'}}><em>Stage {stage}</em><br/>{logsGiven}<br/></div>);
          }
        });
        stageId = this.state.node.stage_id;
        op = this.state.node.op;

        if(this.state.node.started == null) {
          started = "Started: ...";
        } else {
          started = "Started: " + this.formatTime(this.state.node.started);
        }
        if(this.state.node.completed == null) {
          finished = "Finished: ...";
        } else {
          finished = "Finished: " + this.formatTime(this.state.node.completed);
        }

        if (this.state.node.completed == null){
          duration = " ...";
        } else {
          duration = (this.state.node.completed - this.state.node.started) + "ms";
        }
      } else {
        stageId = "Graph";
        if (this.state.node.main_ended == null){
          duration = " ...";
        } else {
          duration = (this.state.node.main_ended - this.state.node.created) + "ms";
        }
      }

        return (<div>
            <h3>{stageId} : {op}</h3>
            <div style={{display:'flex', flexDirection:'row', width: '1024px'}}>
              <div className={styles.console} style={{display:'inline-block', minHeight:'200px', maxHeight:'300px',
              minWidth: '700px'}}>
                {fullLogs}
              </div>
              <div className={styles.nodeInfo} style={{display:'inline-block'}}>
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
