const express = require('express');
const app = express();
const http = require('http');
const server = require('http').Server(app);
const io = require('socket.io')(server);
const port = process.env.PORT || 5000;

io.on('connection', client => {
  console.log('Connection from client');
  client.on('request', data => {
    console.log('request: ', data);
    client.emit('response', 'data for ' + data);
  });
})

app.use(express.static('public'));

app.get('/', (req, res) => {
  res.sendFile(__dirname + '/public/index.html');
});

server.listen(port, () => console.log('Running on ' + port));
module.exports = app;
