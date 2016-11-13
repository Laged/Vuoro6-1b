const massive = require('massive');
const connectionString = process.env.DATABASE_URL;
const db = massive.connectSync({connectionString:connectionString});

module.exports = {
  debug(callback) {
    console.log('debug');
    db.run('SELECT * FROM tickets;', (err, res) => {
      if (err) callback(err, null);
      console.log(res.length + " items in db");
      callback(null, res);
    });
  },
  getCount(callback) {
    console.log('getCount');
    db.tickets.count({}, (err, res) => {
      if (err) callback(err, null);
      console.log(res.length + " items in db");
      callback(null, res);
    });
  },
  getData(context, callback) {
    console.log('getData ', context);
    db.tickets.find({'year>=':context.fromYear, 'year<=':context.toYear, 'month>=':context.fromMonth, 'month<=':context.toMonth}, (err, res) => {
      if (err) callback(err, null);
      console.log(res.length + " items found");
      callback(null, res);
    });
  }
};
