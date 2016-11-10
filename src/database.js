const massive = require('massive');
const connectionString = "postgres://postgres:asdasd@localhost/ticket";
const db = massive.connectSync({connectionString:connectionString});

module.exports = {
  debug(callback) {
    console.log('debug');
    db.run('SELECT * FROM ticketsunfiltered;', (err, res) => {
      if (err) callback(err, null);
      console.log(res.length + " items in db");
      callback(null, res);
    });
  },
  getCount(callback) {
    console.log('getCount');
    db.ticketsunfiltered.count({}, (err, res) => {
      if (err) callback(err, null);
      console.log(res.length + " items in db");
      callback(null, res);
    });
  },
  getData(context, callback) {
    console.log('getData ', context);
    db.ticketsunfiltered.find({'year>=':context.fromYear, 'year<=':context.toYear}, (err, res) => {
      if (err) callback(err, null);
      console.log(res.length + " items found");
      callback(null, res);
    });
  }
};
