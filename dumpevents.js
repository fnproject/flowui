#!/usr/bin/env node

var WebSocket = require('ws');
var fs = require('fs');

var graphId = process.argv[2];

if ( !graphId){
    console.log("Specify a graph iD");
    return 1;
}
console.log("Getting graphId", graphId);

const ws = new WebSocket('ws://localhost:8081/wss');
var events = {};
var creates = [];

var eventCount =0;

ws.on('message', function (msgString) {
    //console.log('got data ',msgString);

    var msg = JSON.parse(msgString);
    if (msg.sub !== '_all') {
        eventCount++;
        if(!events[msg.sub]){
            events[msg.sub] = [msg];
        }
        events[msg.sub].push(msg);
        if(msg.type === "model.GraphCreatedEvent"){
            const newMsg = JSON.parse(msgString);
            newMsg.sub = "_all";
            creates.push(newMsg);
        }
    }
});

ws.on('open', function () {
    console.log("Connection open  subscribing to ",graphId);
    console.log("Hit Ctrl+C to save data when you are done");
    ws.send(JSON.stringify({command: 'subscribe', graph_id: graphId}));
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


