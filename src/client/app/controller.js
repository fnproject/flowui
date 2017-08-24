var graphsActive = [];
var graphPlusEvents = {};

var Controller = class Controller {

  createEvents(data, id){
    var eventObject = new Object();
    eventObject.type = data['type'];
    eventObject.ts = ((data['data'])['ts']);

    var currentEvents = graphPlusEvents[id];
    var updatedEvents = currentEvents.push(eventObject);

    graphPlusEvents[id] = updatedEvents;
  }

  manageEvents(data) {
    let graphId = null;

    switch (data['type']) {
      case 'model.GraphCreatedEvent':
        graphId = (data['data'])['graphId'];
        this.graphActivated(graphId);
        graphPlusEvents[graphId] = this.createEvents(data, graphId);
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
    graphPlusEvents[subId] = [];
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
    return graphPlusEvents;
  }
}

export default Controller;
