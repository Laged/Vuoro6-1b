const express = require('express');
const app = express();
const http = require('http');
const server = require('http').Server(app);
const io = require('socket.io')(server);
const port = process.env.PORT || 5000;
const utils = require('./src/utils.js');
const db = require('./src/database.js');
app.set('db', db);

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
    db.getData(newContext, (err, res) => {
      if (err) client.emit('error', err);
      else client.emit('data', res);
    })
    client.emit('response', newContext);
  });
})

app.use(express.static('public'));

app.get('/count', (req, res) => {
  console.log('GET /count');
  db.getCount( (err, count) => {
    if (err) res.status(500).json({message:err});
    res.json({ticketCount: count});
  });
});

app.get('/debug', (req, res) => {
  db.debug( (err, data) => {
    if (err) {
      res.status(500).json(err);
    } else {
      res.json(data);
    }
  });
});

app.get('/context', (req, res) => {
  db.getData( visualizationContext, (err, data) => {
    if (err) {
      res.status(500).json(err);
    } else {
      res.json(data);
    }
  });
})

app.get('/', (req, res) => {
  res.sendFile(__dirname + '/public/index.html');
});


server.listen(port, () => console.log('Running on ' + port));
module.exports = app;
