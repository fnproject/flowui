var graphsActive = [];
var graphPlusEvents = new Map();

var Controller = class Controller {

  createEvents(data, id){
    var eventObject = new Object();
    eventObject.type = data['type'];
    eventObject.ts = ((data['data'])['ts']);

    graphPlusEvents.get(id).push(eventObject);
  }

  manageEvents(data) {
    let graphId = null;

    switch (data['type']) {
      case 'model.GraphCreatedEvent':
        graphId = (data['data'])['graphId'];
        this.graphActivated(graphId);
        graphPlusEvents.set(graphId, []);
        this.createEvents(data, graphId)
        break;
      case 'model.GraphCompletedEvent':
        graphId = (data['data'])['graphId'];
        this.graphTerminated(graphId);
        this.createEvents(data, graphId)
        break;
      default:
        const subId = data['sub'];
        this.createEvents(data, subId);
        break;
    }
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
    console.log(graphPlusEvents);
    return graphPlusEvents;
  }
}

export default Controller;
