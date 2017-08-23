require('file-loader?name=[name].[ext]!./index.html');
import React from 'react';
import Websocket from 'react-websocket';
import AwesomeComponent from './AwesomeComponent.jsx';
import {render} from 'react-dom';
import Timeline from 'react-visjs-timeline';
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
            minute: 'h:mma',
            hour: 'ha'
        }
    }
}


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
        }
    };
}


class App extends React.Component {

  componentDidMount() {
    connectWs(this);
  }

  render () {
  return (
    <div>
    </div>
  );
  }
}

render(<App/>, document.getElementById('app'));
