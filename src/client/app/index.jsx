require('file-loader?name=[name].[ext]!./index.html');
import React from 'react';
import {render} from 'react-dom';
import Timeline from 'react-visjs-timeline';
import Controller from './controller.js';
import Graph from './graph.js';

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
    case 'model.GraphCommittedEvent':
      id = (data['data'])['graphId'];
      break;
    default:
      id = data['sub'];
      break;
  }

  var graph = new Graph(id, component.state.eventsOfGraphs.get(id));
  graph.createDataSet();
  console.log(graph);
  var index = component.state.activeGraphs.indexOf(id);
  timelines.set(index, graph);
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

function getItems(id) {
  var graph = timelines.get(id);
  if (graph instanceof Graph){
    return graph['dataSet'];
  }
  return [];
}

// TODO: Make a request to fix currentTimeTick
function update(id){
  console.log('updating...');
  var graph = timelines.get(id);
  if (graph instanceof Graph){
    graph.createDataSet();
  }
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

// Please note this currently only works for the first graph you create
  render () {
    var items = getItems(0);
  return (
    <div>
      <Timeline
        options={{}}
        items={items}
        clickHandler={this.clickHandler.bind(this)}
        currentTimeTickHandler={update(0)}
        />
    </div>
  );
  }

  clickHandler(props) {
    if(props['item'] !== null){
      //Do something cool
    }
  }
}

render(<App/>, document.getElementById('app'));
