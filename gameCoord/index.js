import express from 'express';
import Server from 'socket.io';

const app = express();
const io = new Server();

app.listen(8080, () => {
    console.log('Server running in port 8080')
});