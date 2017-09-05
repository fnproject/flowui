import React from 'react';

import styles from './nodedetail.css';

class NodeDetail extends React.Component {

    constructor(props) {
        super(props)
        //console.log(props);

        this.state = {
            node: props.node,
            nodeLog: props.nodeLog
        };

    }

    componentWillReceiveProps(props) {
        // console.log("new props",props);

        this.state.node = props.node;
        this.state.nodeLog = props.nodeLog;

        this.setState(this.state);
    }

    componentDidMount() {
    }


    render() {
        return (<div>
            <h3>{this.state.node.stage_id} : {this.state.node.op}</h3>
            <pre>
                Created: {this.state.node.created}<br/>
                Started: {this.state.node.started}<br/>
                Finished: {this.state.node.completed}<br/>
            </pre>
            <pre className={styles.logpane}>
                {this.state.nodeLog}
            </pre>
        </div>)


    }
}


export default NodeDetail;
