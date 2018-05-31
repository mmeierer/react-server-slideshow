const sqlite3 = require('sqlite3').verbose();
const knex = require(`${__dirname}/knex`)
// create db

const db = new sqlite3.Database(`${__dirname}/localDB.db`, (err) => {
  if (err) {
    return console.error(err.message);
  }
  console.log('Connected to the localDB.');
});

knex.migrate.latest()
  .then(()=> {
    console.log('Tables migrated');
    return;
  })
  .then(() => {
    console.log('Server is ready!');
    db.close();
    process.exit();
    return;
  })
  .catch(function(error) {
    console.error(error);
  })
