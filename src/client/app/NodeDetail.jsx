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
      var minutes = date.getMinutes();
      var seconds = date.getSeconds();
      var milliSeconds = date.getMilliseconds();

      return hours + ':' + minutes + ':' + seconds + '.' + milliSeconds;
    }

    render() {
      let logs = (this.state.nodeLogs).join('\n');
      let duration = (this.state.node.completed - this.state.node.started) + "ms";
        return (<div>
            <h3>{this.state.node.stage_id} : {this.state.node.op}</h3>
            <div style={{display:'flex', flexDirection:'row', width: '1024px'}}>
              <div className={styles.console} style={{display:'inline-block', minHeight:'200px', maxHeight:'300px',
              minWidth: '700px'}}>
                {logs}
              </div>
              <div className={styles.nodeInfo} style={{display:'inline-block'}}>
                Created: {this.formatTime(this.state.node.created)}<br/>
                Started: {this.formatTime(this.state.node.started)}<br/>
                Finished: {this.formatTime(this.state.node.completed)}<br/>
                Duration: {duration}<br/>
              </div>
            </div>
        </div>);


    }
}


export default NodeDetail;
