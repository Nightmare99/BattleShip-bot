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
        if (isRoomAvailable(data)) {
            gameList.push(data);
            console.log(gameList);
            socket.emit('roomCreated', {roomNum: data});
            socket.join(data);
        }
        else {
            console.log('room: ' + data + ' under use');
            socket.emit('roomUsed');
        }
    });

    socket.on('joinRoom', data => {
        io.of('/').in(data.roomNum).clients((err, clients) => {
            if (err) socket.emit('room404');
            else if (clients.length > 2) socket.emit('roomOverload');
            else if (!clients.includes(socket.id)) {
                socket.join(data.roomNum);
                socket.emit('confirmJoin', {roomNum: data.roomNum});
                console.log(socket.id + ' joined room ' + data.roomNum);
            }
        });
    })
});