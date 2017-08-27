import Graph from './graph.js';

var graphsActive = [];
var graphPlusEvents = new Map();
var timelines = new Map();

var Controller = class Controller {

  createEvents(data, id){
    var eventObject = new Object();
    eventObject.type = data['type'];
    eventObject.ts = ((data['data'])['ts']);

    graphPlusEvents.get(id).push(eventObject);
  }

  manageEvents(data) {
    let id = null;

    switch (data['type']) {
      case 'model.GraphCreatedEvent':
        id = (data['data'])['graphId'];
        this.graphActivated(id);
        graphPlusEvents.set(id, []);
        this.createEvents(data, id)
        break;
      case 'model.GraphCompletedEvent':
        id = (data['data'])['graphId'];
        this.graphTerminated(id);
        this.createEvents(data, id)
        break;
      case 'model.GraphCommittedEvent':
        id = (data['data'])['graphId'];
        this.createEvents(data, id);
      default:
        id = data['sub'];
        this.createEvents(data, id);
        break;
    }
    var graph = new Graph(id, graphPlusEvents.get(id));
    graph.createDataSet();
    console.log(graph);
    var index = graphsActive.indexOf(id);
    timelines.set(index, graph);
  }

  graphActivated(subId){
    if(graphsActive.indexOf(subId) === -1){
      graphsActive.push(subId);
    }
  }

  graphTerminated(subId){
    var index = graphsActive.indexOf(subId);
    if (index > -1) {
      graphsActive.splice(index, 1);
    }
  }

  getActiveGraphs() {
    return graphsActive;
  }

  getGraphsWithEvents() {
    // console.log(graphPlusEvents);
    return graphPlusEvents;
  }

  getTimelines() {
    return timelines;
  }
}

export default Controller;
