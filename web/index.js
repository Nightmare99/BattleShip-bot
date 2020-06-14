var express = require('express');
var bodyParser = require('body-parser');
var app = express();

app.use(bodyParser.urlencoded({extended: false}));
app.set('view engine', 'pug');
app.set('views', './views');

app.get('/', (req, res) => {
    res.render('main');
    //socket.emit('myID', {id: 1000});
    res.end();
});

app.get('/room', (req, res) => {
    res.render('waiting', {roomNum: req.query.id});
    socket.emit('joinRoom', {roomNum: req.query.id});
    res.end();
});

app.listen(8000);