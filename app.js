"use strict";

const express = require('express'),
      app = express(),
      bodyParser = require('body-parser'),
      morgan = require('morgan'),
      path = require('path');

const port = 4000;

app.use(bodyParser.json());

app.use(express.static(__dirname + '/public'));

app.get('/', function(req, res) {
    res.sendFile(path.join(__dirname, "./public/views/index.html"));
});

app.get('/test_suite', function(req, res) {
    res.sendFile(path.join(__dirname, "./public/views/test_suite.html"));
});

app.listen(port);

console.log("Connected on port: " + port);

exports = module.exports = app;
