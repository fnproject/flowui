require('file-loader?name=[name].[ext]!./index.html');
import React from 'react';
import {render} from 'react-dom';
import Timeline from 'react-visjs-timeline';
import Controller from './controller.js';
import Graph from './graph.js';


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
      console.log(data);

      component.setState({activeGraphs : component.controller.getActiveGraphs()});
      component.setState({eventsOfGraphs : component.controller.getGraphsWithEvents()});
      component.setState({timelines : component.controller.getTimelines()});

      if (data['type'] === 'model.GraphCreatedEvent'){
        subscribe((data['data'])['graphId'], ws, component);
      }
    };
}

function getItems(id, component) {
  var graph = component.state.timelines.get(id);
  if (graph instanceof Graph){
    return graph['dataSet'];
  }
  return [];
}

// TODO: Sort currentTimeTickHandler
function update(id, component){
  console.log('updating...');
  var graph = component.state.timelines.get(id);
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
      timelines : new Map(),
    };
  }

  componentDidMount() {
    connectWs(this);
  }

// Please note this currently only works for the first graph you create
  render () {
    var items = getItems(0, this);
  return (
    <div>
      <Timeline
        options={{}}
        items={items}
        clickHandler={this.clickHandler.bind(this)}
        currentTimeTickHandler={update(0, this)}
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
