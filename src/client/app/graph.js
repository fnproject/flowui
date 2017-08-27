function alterTimeStamp(ts){
  var date = new Date(ts);
  return(date.getHours() + ":" + date.getMinutes() + ":" + date.getSeconds());
}

function Graph(graphId, allEvents){
  this.graphId = graphId;
  this.allEvents = allEvents;
  this.dataSet = [];
  this.createDataSet = createDataSet;
}

function createDataSet(){
  const items = [];
  var eventNumber = this.allEvents.length;
  for (var i = 0; i < eventNumber; i++){
    var finish = Date.now();
    var eventObject = this.allEvents[i];
    var timeStamp = eventObject['ts'];
    var type = eventObject['type'];
    var end = eventObject['end'];
    if (end !== null) {
      finish = end;
    }
    items.push({
      id: i,
      start: timeStamp,
      group: this.graphId,
      title: alterTimeStamp(timeStamp),
      className: this.graphId,
      content: type,
      end: finish
    });
  }
  this.dataSet = items;
}

export default Graph;
