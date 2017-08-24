require('file-loader?name=[name].[ext]!./index.html');
import React from 'react';
import {render} from 'react-dom';
import Timeline from 'react-visjs-timeline';
import Controller from './controller.js'
const options = {
    width: '100%',
    height: '60px',
    stack: false,
    showMajorLabels: true,
    showCurrentTime: true,
    zoomMin: 1000000,
    type: 'background',
    format: {
        minorLabels: {
            second: 's',
            minute: 'h:mma',
            hour: 'ha'
        }
    }
}

function subscribe(graphId, ws) {
  ws.send('{"command": "subscribe","graph_id" : "' + graphId + '"}');
}

function connectWs(component) {
    let wsUrl = "ws://localhost:8081/wss";

    console.log("connecting to ws: ", wsUrl);

    const ws = new WebSocket(wsUrl);
    ws.onmessage = (event) => {
      const data = JSON.parse(event.data);
      component.controller.manageEvents(data);
      if(data['type'] === "model.GraphCreatedEvent"){
        subscribe((data['data'])['graphId'], ws);
      }
      component.setState({activeGraphs : component.controller.getActiveGraphs()})
      component.setState({eventsOfGraphs : component.controller.getGraphsWithEvents()})
    };
}

class App extends React.Component {
  constructor(props) {
    super(props);
    this.controller = new Controller();
    this.state = {
      activeGraphs : [],
      eventsOfGraphs : {},
    };
  }

  componentDidMount() {
    connectWs(this);
  }

  render () {
  return (
    <div>
      <p>{this.state.activeGraphs.join(", ")}</p>
    </div>
  );
  }
}

render(<App/>, document.getElementById('app'));
