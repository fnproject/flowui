import React from 'react';

var map = {};


function createValue(data) {
  const ts = ((data['data'])['ts']);
  const type = data['type'];

  var value = new Object();
  value.type = type;
  value.ts = ts;

  return value;
}

function manageEvent(event, ws, component) {

  console.log(event.data);
    const data = JSON.parse(event.data);
    console.log("Got new state", data);
    const graphId = (data['data'])['graphId'];
    console.log("Graph Id: ", graphId);
    ws.send('{"command": "subscribe","graph_id" : "' + graphId + '"}');
    if(!(graphId in map)){
      component.setState({graphs : graphId + ", " + component.state.graphs});
      map[graphId] = [];
    }
    var values = map[graphId];
    values.push(createValue(data));
    map[graphId] = values;
    console.log(map[graphId]);
    component.setState({events : event.data + component.state.events});
}

function connectWs(component) {
    let wsUrl = "ws://localhost:8081/wss";

    console.log("connecting to ws: ", wsUrl);

    const ws = new WebSocket(wsUrl);
    ws.onmessage = (event) => {
      manageEvent(event, ws, component);
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
          { Object.keys(map).map(function (key) {
            return (
              <div>
                <p>
                  Graph: {key}
                  Events: {map[key].map(function (listElem){
                      return (
                        <div> {listElem.type} </div>
                      );
                    })}
                  </p>
              </div>
              );
          }, this)}
      </div>
      );
    }

}

export default ConnectionComponent;
