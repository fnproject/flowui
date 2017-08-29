require('file-loader?name=[name].[ext]!./index.html');
import React from 'react';
import {render} from 'react-dom';
import Controller from './controller.js';
import GraphTimeline from './GraphTimeline.jsx';
import Graph from './graph.js';

class App extends React.Component {

  constructor(props) {
    super(props);
    let controller = new Controller((c)=>{
          this.setState({controller:c});
    });

    this.state = {
      controller:controller,
      currentGraph:null
    };
    this.onGraphSelected = this.onGraphSelected.bind(this);
    this.renderCurrentGraph = this.renderCurrentGraph.bind(this);
  }


  componentDidMount() {


  }

 onGraphSelected(graphId){
   console.log(`selected graph ${graphId}`);
   this.state.currentGraph = graphId;
   this.state.controller.subscribe(graphId);
   this.setState(this.state);

 }

renderCurrentGraph(){
  if(this.state.currentGraph == null) {
    return (
      <div>
        Select a graph
      </div>
    );
  }
    var activeGraphs = this.state.controller.getActiveGraphs();
    var graph = activeGraphs.get(this.state.currentGraph);
    console.log(activeGraphs);
  if(graph == null) {
    return (
      <div>
        Graph loading...
      </div>
    );
  }
  console.log(graph);
  return (
      <div>
        <GraphTimeline graph={graph} />
      </div>
  );
}

// Please note this currently only works for the first graph you create
  render () {
  //  var items = getItems(0, this);
    var graphListItems = [];
    this.state.controller.getKnownGraphIds().forEach((graphId)=>{
        graphListItems.push(<li key={graphId}><a href="#" onClick={()=>this.onGraphSelected(graphId)} >Graph {graphId}</a></li>);
    });

  return (
    <div>
    <div>
        <ul>
          {graphListItems}
        </ul>
    </div>
    <div>
      {this.renderCurrentGraph()}
    </div>
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
