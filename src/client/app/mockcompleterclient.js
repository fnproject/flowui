

import {mockActiveGraphEvents,mockSubscriptionData} from  "./sample_events.js"


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
    let firstEvent = events[0];
    const firstEventTs= Date.parse(firstEvent.data.ts);
    let timeStart = Date.now();
    const dialation = 1.0;

    events.forEach((evt)=>{
        let ts = Date.parse(evt.data.ts);
        let newTs = (ts - firstEventTs)* dialation + timeStart;
        evt.data.ts = new Date(newTs).toISOString();
    })

     function sendEvent(){
       while(events.length > 0){
         var next = events[0];
         const nowTs = Date.now();
         const eventTs = Date.parse(next.data.ts);

         if (eventTs<=nowTs){
           console.log("sending Event", next);
           this.receiver(events.shift());
         }else{

            break;
         }
       }
       if(events.length > 0){
         setTimeout(sendEvent,100);
       }else{
         console.log("Send all events ");
       }
     }

     sendEvent = sendEvent.bind(this);
     sendEvent();
  }
}

export  default MockCompleterClient;
