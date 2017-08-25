var Graph = class Graph {
  constructor(graphId, allEvents){
    this.graphId = graphId;
    this.allEvents = allEvents;
  }

  createDataSet(){
    const items = [];
    var eventNumber = this.allEvents.length;
    for (var i = 0; i < eventNumber; i++){
      var eventObject = this.allEvents[i];
      var timeStamp = eventObject['ts'];
      items.push({id: i, start: timeStamp});
    }
    console.log(items);
    return items;
  }

}

export default Graph;
