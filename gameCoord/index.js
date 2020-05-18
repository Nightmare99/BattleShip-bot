var express = require('express');
var app = express();
var server = require('http').createServer(app).listen(3000);
var io = require('socket.io').listen(server);

io.sockets.on('connection', function (socket) {
    console.log('client connected');
    socket.on('myID', data => {
        console.log(data.id);
    });
});