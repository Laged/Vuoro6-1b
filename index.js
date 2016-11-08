const express = require('express');
const app = express();
const http = require('http');
const server = require('http').Server(app);
const io = require('socket.io')(server);
const port = process.env.PORT || 5000;
const utils = require('./src/utils.js');
const visualizationContext = {
  fromYear: 2014,
  fromMonth: 1,
  toYear: 2016,
  toMonth: 12
}

io.on('connection', client => {
  console.log('Connection from client');
  client.emit('response', visualizationContext);

  client.on('request', data => {
    console.log('request: ', data);
    const newContext = utils.mergeContext(data, visualizationContext);
    client.emit('response', newContext);
  });
})

app.use(express.static('public'));

app.get('/', (req, res) => {
  res.sendFile(__dirname + '/public/index.html');
});

server.listen(port, () => console.log('Running on ' + port));
module.exports = app;
