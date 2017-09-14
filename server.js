#!/usr/bin/env node

var express = require('express');
var proxy = require('http-proxy-middleware');


var app = express();

var completerUrl = process.env['COMPLETER_BASE_URL'] || 'http://localhost:8081';
var fnUrl = process.env['API_URL'] || 'http://localhost:8080';

app.use('/fn', proxy(fnUrl, {pathRewrite: {"^/fn": ""}}));

app.use('/completer', proxy(completerUrl, {ws: true, pathRewrite: {"^/completer": ""}}));
app.use(express.static('dist'));

var port = process.env['PORT'] || 3000
console.log("listening on " + port);
app.listen(port);