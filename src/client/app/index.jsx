require('file-loader?name=[name].[ext]!./index.html');
import React from 'react';
import Websocket from 'react-websocket';
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

class App extends React.Component {

  handleData(data) {
    let result = JSON.parse(data);
    console.log(data);
  }
  handleOpen() {
    alert("connected");
  }
  handleClose() {
    alert("disconnected");
  }

  render () {
  return (
    <div>
      <Websocket url='ws://localhost:8081/wss' onMessage={this.handleData.bind(this)}
        onOpen={this.handleOpen} onClose={this.handleClose}
        reconnect={true} debug={true}/>
    </div>

    // <div>
    //   <p> Hello React!</p>
    //   <Timeline options={options}/>
    // </div>
  );
  }
}

render(<App/>, document.getElementById('app'));
