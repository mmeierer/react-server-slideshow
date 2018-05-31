const sqlite3 = require('sqlite3').verbose();
const knex = require(`${__dirname}/knex`)
// create db

const db = new sqlite3.Database(`${__dirname}/localDB.db`, (err) => {
  if (err) {
    return console.error(err.message);
  }
  console.log('Connected to the localDB.');
});

try {
  return knex.migrate.latest()
  .finally(function () {
      return knex.destroy(); //works
    });
} catch(e){
  console.log('Migration failed:');
  console.log(e);
}
db.close();
