var express = require('express');
var bodyParser = require('body-parser');
var app = express();
var io = require('socket.io-client');

app.use(bodyParser.urlencoded({extended: false}));

app.get('/', (req, res) => {
    var socket = io('http://localhost:3000/');
    socket.emit('connection');
    res.write("<h1>Client should be connected</h1>");
    socket.emit('myID', {id: 1000});
    res.end();
});

app.listen(8000);