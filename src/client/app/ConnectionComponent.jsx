import React from 'react';

function connectWs(component) {
  var map = new Map();

    let wsUrl = "ws://localhost:8081/wss";

    console.log("connecting to ws: ", wsUrl);

    const ws = new WebSocket(wsUrl);
    ws.onmessage = (event) => {
        const data = JSON.parse(event.data);
        console.log("Got new state", data);
        if(data.type === 'model.GraphCreatedEvent'){
          const graphId = (data['data'])['graphId'];
          console.log("Graph Id: ", graphId);
          ws.send('{"command": "subscribe","graph_id" : "' + graphId + '"}');
          component.setState({graphs : event.data + component.state.graphs});
        } else {
          component.setState({events : event.data + component.state.events});
        }
    };
}

class ConnectionComponent extends React.Component {
  constructor(props) {
      super(props);
      this.state = {
        graphs : "",
        events : ""
      };
    }

    componentDidMount() {
      connectWs(this);
    }

    render() {
      return (
        <div>
          <p>Graphs : <strong>{this.state.graphs}</strong></p>
        <p>Events : <strong>{this.state.events}</strong></p>
      </div>
      );
    }

}

export default ConnectionComponent;
