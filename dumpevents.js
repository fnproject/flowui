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
var events = [];

ws.on('message', function (msgString) {
    console.log('got data ',msgString);

    var msg = JSON.parse(msgString);
    if (msg.sub !== '_all') {
        events.push(msg);
    }
});

ws.on('open', function () {
    console.log("Connection open  subscribing to ",graphId);
    ws.send(JSON.stringify({command: 'subscribe', graph_id: graphId}));
});


process.on('SIGINT', () => {
    var stream = fs.createWriteStream("sample_events.js");

    eventData = "var mockEvents = [\n" + events.map(JSON.stringify).join(",\n") + "];\n";

    stream.once('open', function (fd) {
        stream.write(eventData);
        stream.end();
    });
    stream.once('close',function(){
        process.exit();
    });

});


