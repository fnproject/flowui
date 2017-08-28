require('file-loader?name=[name].[ext]!./index.html');
import React from 'react';
import {render} from 'react-dom';
import Controller from './controller.js';

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
      <GraphTimeline
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
