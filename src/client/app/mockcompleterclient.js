
const mockActiveGraphEvents = [
  {
      "type": "model.GraphCreatedEvent",
      "sub": "_all",
      "data": {
          "graphId": "really-long-graph1",
          "functionId": "test/fn",
          "ts": "2017-08-28T13:30:56.817212658Z"
      }
  },
  {
      "type": "model.GraphCreatedEvent",
      "sub": "_all",
      "data": {
          "graphId": "really-long-graph2",
          "functionId": "test/fn",
          "ts": "2017-08-28T13:30:56.817212658Z"
      }
  },
];

const mockSubscriptionData = {
  "really-long-graph1" :[
    {
        "type": "model.GraphCreatedEvent",
        "sub": "really-long-graph1",
        "data": {
            "graphId": "really-long-graph1",
            "functionId": "test/fn",
            "ts": "2017-08-28T13:30:56.817212658Z"
        }
    },
    {
        "type": "model.StageAddedEvent",
        "sub": "really-long-graph1",
        "data": {"stageId": "0", "op": "delay", "ts": "2017-08-28T13:31:31.721281418Z"}
    },
    {
        "type": "model.DelayScheduledEvent",
        "sub": "really-long-graph1",
        "data": {"stageId": "0", "timeMs": "1503927091826", "ts": "2017-08-28T13:31:31.726673270Z"}
    },
    {
        "type": "model.StageCompletedEvent",
        "sub": "really-long-graph1",
        "data": {
            "stageId": "0",
            "result": {"successful": true, "datum": {"empty": {}}},
            "ts": "2017-08-28T13:31:31.830953594Z"
        }
    }
  ],

  "really-long-graph2" :[
    {"type":"model.GraphCreatedEvent","sub":"really-long-graph2","data":{"graphId":"really-long-graph2","functionId":"cloudthreads-example/completer","ts":"2017-08-29T13:35:09.987967620Z"}}
  , {"type":"model.StageAddedEvent","sub":"really-long-graph2","data":{"stageId":"0","op":"delay","ts":"2017-08-29T13:35:10.001103965Z"}}
  , {"type":"model.DelayScheduledEvent","sub":"really-long-graph2","data":{"stageId":"0","timeMs":"1504013711001","ts":"2017-08-29T13:35:10.001969188Z"}}
  , {"type":"model.StageAddedEvent","sub":"really-long-graph2","data":{"stageId":"1","op":"thenRun","closure":{"blobId":"cab21288-5e85-4d06-b81f-6a1b7019cd39","contentType":"application/java-serialized-object","length":"605"},"dependencies":["0"],"ts":"2017-08-29T13:35:10.039741941Z"}}
  , {"type":"model.GraphCommittedEvent","sub":"really-long-graph2","data":{"graphId":"really-long-graph2","ts":"2017-08-29T13:35:10.048728335Z"}}
  , {"type":"model.StageCompletedEvent","sub":"really-long-graph2","data":{"stageId":"0","result":{"successful":true,"datum":{"empty":{}}},"ts":"2017-08-29T13:35:11.004670028Z"}}
  , {"type":"model.StageAddedEvent","sub":"really-long-graph2","data":{"stageId":"2","op":"supply","closure":{"blobId":"adaa729d-0626-4be6-a113-259b037ddc95","contentType":"application/java-serialized-object","length":"633"},"ts":"2017-08-29T13:35:11.908785715Z"}}
  , {"type":"model.StageAddedEvent","sub":"really-long-graph2","data":{"stageId":"3","op":"supply","closure":{"blobId":"08bf3311-6c75-495b-9c25-28585da801be","contentType":"application/java-serialized-object","length":"633"},"ts":"2017-08-29T13:35:11.929119017Z"}}
  , {"type":"model.StageAddedEvent","sub":"really-long-graph2","data":{"stageId":"4","op":"thenCombine","closure":{"blobId":"ee1ef8fe-02cd-4348-b439-d1debbca658e","contentType":"application/java-serialized-object","length":"710"},"dependencies":["2","3"],"ts":"2017-08-29T13:35:11.945998794Z"}}
  , {"type":"model.StageAddedEvent","sub":"really-long-graph2","data":{"stageId":"5","op":"thenAccept","closure":{"blobId":"17be9fdb-ff0c-4f3b-bba5-b992df5032f2","contentType":"application/java-serialized-object","length":"637"},"dependencies":["4"],"ts":"2017-08-29T13:35:11.957605814Z"}}
  , {"type":"model.FaasInvocationCompletedEvent","sub":"really-long-graph2","data":{"stageId":"1","result":{"successful":true,"datum":{"empty":{}}},"ts":"2017-08-29T13:35:12.541161215Z"}}
  , {"type":"model.StageCompletedEvent","sub":"really-long-graph2","data":{"stageId":"1","result":{"successful":true,"datum":{"empty":{}}},"ts":"2017-08-29T13:35:12.542109514Z"}}
  , {"type":"model.FaasInvocationCompletedEvent","sub":"really-long-graph2","data":{"stageId":"2","result":{"successful":true,"datum":{"blob":{"blobId":"68c954a7-461f-418b-88a4-d11259337beb","contentType":"application/java-serialized-object","length":"81"}}},"ts":"2017-08-29T13:35:13.432803363Z"}}
  , {"type":"model.StageCompletedEvent","sub":"really-long-graph2","data":{"stageId":"2","result":{"successful":true,"datum":{"blob":{"blobId":"68c954a7-461f-418b-88a4-d11259337beb","contentType":"application/java-serialized-object","length":"81"}}},"ts":"2017-08-29T13:35:13.433416817Z"}}
  , {"type":"model.FaasInvocationCompletedEvent","sub":"really-long-graph2","data":{"stageId":"3","result":{"successful":true,"datum":{"blob":{"blobId":"09d0079e-7ffd-4f81-96d0-26eb8fd257df","contentType":"application/java-serialized-object","length":"81"}}},"ts":"2017-08-29T13:35:13.581551735Z"}}
  , {"type":"model.StageCompletedEvent","sub":"really-long-graph2","data":{"stageId":"3","result":{"successful":true,"datum":{"blob":{"blobId":"09d0079e-7ffd-4f81-96d0-26eb8fd257df","contentType":"application/java-serialized-object","length":"81"}}},"ts":"2017-08-29T13:35:13.582205671Z"}}
  , {"type":"model.FaasInvocationCompletedEvent","sub":"really-long-graph2","data":{"stageId":"4","result":{"successful":true,"datum":{"blob":{"blobId":"00bfab5b-d74f-47a4-9a8e-72e010b3dd41","contentType":"application/java-serialized-object","length":"81"}}},"ts":"2017-08-29T13:35:16.212588253Z"}}
  , {"type":"model.StageCompletedEvent","sub":"really-long-graph2","data":{"stageId":"4","result":{"successful":true,"datum":{"blob":{"blobId":"00bfab5b-d74f-47a4-9a8e-72e010b3dd41","contentType":"application/java-serialized-object","length":"81"}}},"ts":"2017-08-29T13:35:16.213207851Z"}}
  , {"type":"model.FaasInvocationCompletedEvent","sub":"really-long-graph2","data":{"stageId":"5","result":{"successful":true,"datum":{"empty":{}}},"ts":"2017-08-29T13:35:17.960098951Z"}}
  , {"type":"model.StageCompletedEvent","sub":"really-long-graph2","data":{"stageId":"5","result":{"successful":true,"datum":{"empty":{}}},"ts":"2017-08-29T13:35:17.960988048Z"}}
  , {"type":"model.GraphCompletedEvent","sub":"really-long-graph2","data":{"graphId":"really-long-graph2","functionId":"cloudthreads-example/completer","ts":"2017-08-29T13:35:17.961624813Z"}}
],


}
class MockCompleterClient{

  constructor(receiver){
      this.receiver = receiver;
      this.subscriptions = new Set();
      setTimeout(()=>{
         console.log("sending lifecycle events",mockActiveGraphEvents);
          mockActiveGraphEvents.forEach(receiver)
      },100);
  }

  subscribe(graphId){
    if (this.subscriptions.has(graphId)){
      return;
    }
    this.subscriptions.add(graphId);
    let events = mockSubscriptionData[graphId];
    if (!events){
      return;
    }
    setTimeout(()=>{
        events.forEach(this.receiver);
    },100);
  }
}

export  default MockCompleterClient;
