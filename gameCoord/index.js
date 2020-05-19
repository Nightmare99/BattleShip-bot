var express = require('express');
var app = express();
var server = require('http').createServer(app).listen(3000);
var io = require('socket.io').listen(server);

var gameList = [];
var isRoomAvailable = (roomNum) => {
    if (gameList.includes(roomNum))
        return false;
    return true;
}

io.sockets.on('connection', function (socket) {
    console.log('client connected');
    
    socket.on('myID', data => {
        console.log(data.id);
    });

    socket.on('createRoom', data => {
        if (isRoomAvailable(data.roomNum)) {
            gameList.push(data.roomNum);
            console.log(gameList);
        }
    });
});