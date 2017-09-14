#!/usr/bin/env node

var express = require('express');
var proxy = require('http-proxy-middleware');


var app = express();

var completerUrl = process.env['COMPLETER_BASE_URL'] || 'http://localhost:8081';
var fnUrl = process.env['API_URL'] || 'http://localhost:8080';
let completerProxy = proxy(completerUrl, {ws: true, changeOrigin:true,pathRewrite: {"^/completer": ""}});
app.use('/completer', completerProxy);
app.use('/fn', proxy(fnUrl, {pathRewrite: {"^/fn": ""}}));

app.use(express.static('dist'));

var port = process.env['PORT'] || 3000
var server = app.listen(port);

server.on('upgrade', completerProxy.upgrade);  // <-- subscribe to http 'upgrade'

console.log("listening on " + port);
