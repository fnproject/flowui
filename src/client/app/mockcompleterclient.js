
const mockActiveGraphEvents = [
  {
      "type": "model.GraphCreatedEvent",
      "sub": "_all",
      "data": {
          "graph_id": "532925fa-bcec-42fb-8a1c-ef63b511fbd0",
          "function_id": "test/fn",
          "ts": "2017-08-28T13:30:56.817212658Z"
      }
  }
];

const mockSubscriptionData =
    {"532925fa-bcec-42fb-8a1c-ef63b511fbd0":[
    {"type":"model.GraphCreatedEvent","sub":"532925fa-bcec-42fb-8a1c-ef63b511fbd0","data":{"graph_id":"532925fa-bcec-42fb-8a1c-ef63b511fbd0","function_id":"ct/cloudthreads-example","ts":"2017-08-29T20:00:09.212919157Z"}},
    {"type":"model.StageAddedEvent","sub":"532925fa-bcec-42fb-8a1c-ef63b511fbd0","data":{"stage_id":"0","op":"delay","closure":null,"dependencies":[],"ts":"2017-08-29T20:00:09.228207327Z"}},
    {"type":"model.DelayScheduledEvent","sub":"532925fa-bcec-42fb-8a1c-ef63b511fbd0","data":{"stage_id":"0","time_ms":"1504036809729","ts":"2017-08-29T20:00:09.229931385Z"}},
    {"type":"model.StageAddedEvent","sub":"532925fa-bcec-42fb-8a1c-ef63b511fbd0","data":{"stage_id":"1","op":"thenRun","closure":{"blob_id":"4778dca7-16ad-4aff-a82a-f48111b390a3","content_type":"application/java-serialized-object","length":"605"},"dependencies":["0"],"ts":"2017-08-29T20:00:09.266399329Z"}},
    {"type":"model.GraphCommittedEvent","sub":"532925fa-bcec-42fb-8a1c-ef63b511fbd0","data":{"graph_id":"532925fa-bcec-42fb-8a1c-ef63b511fbd0","ts":"2017-08-29T20:00:09.278723717Z"}},
    {"type":"model.StageCompletedEvent","sub":"532925fa-bcec-42fb-8a1c-ef63b511fbd0","data":{"stage_id":"0","result":{"successful":true,"datum":{"empty":{}}},"ts":"2017-08-29T20:00:09.733806792Z"}},
    {"type":"model.FaasInvocationStartedEvent","sub":"532925fa-bcec-42fb-8a1c-ef63b511fbd0","data":{"stage_id":"1","ts":"2017-08-29T20:00:09.735873405Z"}},
    {"type":"model.StageAddedEvent","sub":"532925fa-bcec-42fb-8a1c-ef63b511fbd0","data":{"stage_id":"2","op":"supply","closure":{"blob_id":"39257dab-274f-472e-b785-ca6d5f408a58","content_type":"application/java-serialized-object","length":"633"},"dependencies":[],"ts":"2017-08-29T20:00:10.870329053Z"}},
    {"type":"model.FaasInvocationStartedEvent","sub":"532925fa-bcec-42fb-8a1c-ef63b511fbd0","data":{"stage_id":"2","ts":"2017-08-29T20:00:10.872569580Z"}},
    {"type":"model.StageAddedEvent","sub":"532925fa-bcec-42fb-8a1c-ef63b511fbd0","data":{"stage_id":"3","op":"supply","closure":{"blob_id":"67b9300a-3f2e-4aae-82bb-530c9ced753a","content_type":"application/java-serialized-object","length":"633"},"dependencies":[],"ts":"2017-08-29T20:00:10.892581274Z"}},
    {"type":"model.FaasInvocationStartedEvent","sub":"532925fa-bcec-42fb-8a1c-ef63b511fbd0","data":{"stage_id":"3","ts":"2017-08-29T20:00:10.894591696Z"}},
    {"type":"model.StageAddedEvent","sub":"532925fa-bcec-42fb-8a1c-ef63b511fbd0","data":{"stage_id":"4","op":"thenRun","closure":{"blob_id":"3239cc9c-9832-4832-aa49-1108154a7e39","content_type":"application/java-serialized-object","length":"596"},"dependencies":["2"],"ts":"2017-08-29T20:00:10.903225391Z"}},
    {"type":"model.StageAddedEvent","sub":"532925fa-bcec-42fb-8a1c-ef63b511fbd0","data":{"stage_id":"5","op":"thenCombine","closure":{"blob_id":"67d1e1a9-e1e8-47de-8861-932156475cc5","content_type":"application/java-serialized-object","length":"710"},"dependencies":["2","3"],"ts":"2017-08-29T20:00:10.919534573Z"}},
    {"type":"model.StageAddedEvent","sub":"532925fa-bcec-42fb-8a1c-ef63b511fbd0","data":{"stage_id":"6","op":"thenAccept","closure":{"blob_id":"7243ebe5-7b42-45c3-a4a1-8bd4216b1b36","content_type":"application/java-serialized-object","length":"637"},"dependencies":["5"],"ts":"2017-08-29T20:00:10.935628519Z"}},
    {"type":"model.FaasInvocationCompletedEvent","sub":"532925fa-bcec-42fb-8a1c-ef63b511fbd0","data":{"stage_id":"1","result":{"successful":true,"datum":{"empty":{}}},"ts":"2017-08-29T20:00:10.976193142Z"}},
    {"type":"model.StageCompletedEvent","sub":"532925fa-bcec-42fb-8a1c-ef63b511fbd0","data":{"stage_id":"1","result":{"successful":true,"datum":{"empty":{}}},"ts":"2017-08-29T20:00:10.982755390Z"}},
    {"type":"model.FaasInvocationCompletedEvent","sub":"532925fa-bcec-42fb-8a1c-ef63b511fbd0","data":{"stage_id":"3","result":{"successful":true,"datum":{"blob":{"blob_id":"3ea9e2ea-57f1-49e9-8cfc-2764f1874c80","content_type":"application/java-serialized-object","length":"81"}}},"ts":"2017-08-29T20:00:12.606033471Z"}},
    {"type":"model.StageCompletedEvent","sub":"532925fa-bcec-42fb-8a1c-ef63b511fbd0","data":{"stage_id":"3","result":{"successful":true,"datum":{"blob":{"blob_id":"3ea9e2ea-57f1-49e9-8cfc-2764f1874c80","content_type":"application/java-serialized-object","length":"81"}}},"ts":"2017-08-29T20:00:12.609785766Z"}},
    {"type":"model.FaasInvocationCompletedEvent","sub":"532925fa-bcec-42fb-8a1c-ef63b511fbd0","data":{"stage_id":"2","result":{"successful":true,"datum":{"blob":{"blob_id":"5fa52bed-646f-4485-ac17-f50ec4f5286c","content_type":"application/java-serialized-object","length":"81"}}},"ts":"2017-08-29T20:00:12.611499614Z"}},
    {"type":"model.StageCompletedEvent","sub":"532925fa-bcec-42fb-8a1c-ef63b511fbd0","data":{"stage_id":"2","result":{"successful":true,"datum":{"blob":{"blob_id":"5fa52bed-646f-4485-ac17-f50ec4f5286c","content_type":"application/java-serialized-object","length":"81"}}},"ts":"2017-08-29T20:00:12.614194356Z"}},
    {"type":"model.FaasInvocationStartedEvent","sub":"532925fa-bcec-42fb-8a1c-ef63b511fbd0","data":{"stage_id":"4","ts":"2017-08-29T20:00:12.615905864Z"}},
    {"type":"model.FaasInvocationStartedEvent","sub":"532925fa-bcec-42fb-8a1c-ef63b511fbd0","data":{"stage_id":"5","ts":"2017-08-29T20:00:12.617777710Z"}},
    {"type":"model.FaasInvocationCompletedEvent","sub":"532925fa-bcec-42fb-8a1c-ef63b511fbd0","data":{"stage_id":"5","result":{"successful":true,"datum":{"blob":{"blob_id":"dd32a7a2-dc8f-49c2-bca3-68aa3abca223","content_type":"application/java-serialized-object","length":"81"}}},"ts":"2017-08-29T20:00:14.395827729Z"}},
    {"type":"model.StageCompletedEvent","sub":"532925fa-bcec-42fb-8a1c-ef63b511fbd0","data":{"stage_id":"5","result":{"successful":true,"datum":{"blob":{"blob_id":"dd32a7a2-dc8f-49c2-bca3-68aa3abca223","content_type":"application/java-serialized-object","length":"81"}}},"ts":"2017-08-29T20:00:14.398177993Z"}},
    {"type":"model.FaasInvocationStartedEvent","sub":"532925fa-bcec-42fb-8a1c-ef63b511fbd0","data":{"stage_id":"6","ts":"2017-08-29T20:00:14.399694495Z"}},
    {"type":"model.FaasInvocationCompletedEvent","sub":"532925fa-bcec-42fb-8a1c-ef63b511fbd0","data":{"stage_id":"4","result":{"successful":false,"datum":{"blob":{"blob_id":"d8f9a927-166e-41cd-951f-c0e1d56749d0","content_type":"application/java-serialized-object","length":"1426"}}},"ts":"2017-08-29T20:00:15.071196506Z"}},
    {"type":"model.StageCompletedEvent","sub":"532925fa-bcec-42fb-8a1c-ef63b511fbd0","data":{"stage_id":"4","result":{"successful":false,"datum":{"blob":{"blob_id":"d8f9a927-166e-41cd-951f-c0e1d56749d0","content_type":"application/java-serialized-object","length":"1426"}}},"ts":"2017-08-29T20:00:15.072965107Z"}},
    {"type":"model.FaasInvocationCompletedEvent","sub":"532925fa-bcec-42fb-8a1c-ef63b511fbd0","data":{"stage_id":"6","result":{"successful":true,"datum":{"empty":{}}},"ts":"2017-08-29T20:00:15.479810355Z"}},
    {"type":"model.StageCompletedEvent","sub":"532925fa-bcec-42fb-8a1c-ef63b511fbd0","data":{"stage_id":"6","result":{"successful":true,"datum":{"empty":{}}},"ts":"2017-08-29T20:00:15.481823813Z"}},
    {"type":"model.GraphCompletedEvent","sub":"532925fa-bcec-42fb-8a1c-ef63b511fbd0","data":{"graph_id":"532925fa-bcec-42fb-8a1c-ef63b511fbd0","function_id":"ct/cloudthreads-example","ts":"2017-08-29T20:00:15.483660985Z"}}]};

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
