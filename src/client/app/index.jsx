require('file-loader?name=[name].[ext]!./index.html');
import React from 'react';
import {render} from 'react-dom';
import Timeline from 'react-visjs-timeline';
import Controller from './controller.js';
import Graph from './graph.js';
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

var timelines = new Map();

function subscribe(graphId, ws) {
  ws.send('{"command": "subscribe","graph_id" : "' + graphId + '"}');
}

function respondToMessage(data, ws, component) {
  let id = null;
  switch (data['type']) {
    case 'model.GraphCreatedEvent':
      id = (data['data'])['graphId'];
      subscribe((data['data'])['graphId'], ws, component);
      break;
    case 'model.GraphCompletedEvent':
      id = (data['data'])['graphId'];
      break;
    default:
      id = data['sub'];
      break;
  }

  var graph = new Graph(id, component.state.eventsOfGraphs.get(id));
  var items = graph.createDataSet();
  console.log(items);
  var index = component.state.activeGraphs.indexOf(id);
  timelines.set(index, items);
  console.log(timelines.get(0));
}

function connectWs(component) {
    let wsUrl = "ws://localhost:8081/wss";

    console.log("connecting to ws: ", wsUrl);

    const ws = new WebSocket(wsUrl);
    ws.onmessage = (event) => {
      const data = JSON.parse(event.data);
      component.controller.manageEvents(data);

      component.setState({activeGraphs : component.controller.getActiveGraphs()})
      component.setState({eventsOfGraphs : component.controller.getGraphsWithEvents()})

      respondToMessage(data, ws, component);
    };
}

class App extends React.Component {
  constructor(props) {
    super(props);
    this.controller = new Controller();
    this.state = {
      activeGraphs : [],
      eventsOfGraphs : new Map(),
    };
  }

  componentDidMount() {
    connectWs(this);
  }

  render () {
  return (
    <div>
      <Timeline
        options={{}}
        items={timelines.get(0)}
        />
    </div>
  );
  }
}

render(<App/>, document.getElementById('app'));
