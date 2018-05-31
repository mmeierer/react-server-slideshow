const sqlite3 = require('sqlite3').verbose();
// create db

const db = new sqlite3.Database(`${__dirname}/localDB.db`, (err) => {
  if (err) {
    return console.error(err.message);
  }
  console.log('Connected to the localDB.');
});

db.close();
