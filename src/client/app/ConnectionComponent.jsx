import React from 'react';

function connectWs(component) {
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
        }
    };
}

class ConnectionComponent extends React.Component {
  constructor(props) {
      super(props);
      this.state = {graphs : ""};
    }

    componentDidMount() {
      connectWs(this);
    }

    render() {
      return (
        <div>
          Graphs : <strong>{this.state.graphs}</strong>
      </div>
      );
    }

}

export default ConnectionComponent;
