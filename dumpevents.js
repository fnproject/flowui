#!/usr/bin/env node
var fs = require('fs');
var oboe = require('oboe');

var flowId = process.argv[2];

if ( !flowId){
    console.log("Specify a flow iD");
    return 1;
}
console.log("Getting flowId", flowId);

var events = {};
var creates = [];

var eventCount =0;
    
oboe(`http://localhost:8081/v1/flows/${flowId}/stream`)
    .done((data) => {
        console.log("Received event from stream", data.result);
        eventCount++;
        if(!events[data.result.flow_id]){
            events[data.result.flow_id] = [data.result];
        } else {
            events[data.result.flow_id].push(data.result);
        }

        if (data.result.graph_created) {
            creates.push(data.result);
        }

    })
    .fail((error) => {
        events.error("Failed to subscribe to stream", error);
    });


process.on('SIGINT', () => {
    var stream = fs.createWriteStream("sample_events.js");


    let eventData = "const mockActiveGraphEvents=" + JSON.stringify(creates,null,"\t") + ";\n\nconst mockSubscriptionData= " + JSON.stringify(events,null,"\t") +";\n   export {mockActiveGraphEvents,mockSubscriptionData} ;\n";
    console.log("Captured ",eventCount, " events");
    stream.once('open', function (fd) {
        stream.write(eventData);
        stream.end();
    });
    stream.once('close',function(){
        process.exit();
    });

});


