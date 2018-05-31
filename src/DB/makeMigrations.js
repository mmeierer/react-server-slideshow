const knex = require(`${__dirname}/knex`)

knex.migrate.latest()
  .then(()=>{
    console.log('Migrated successfully');
  })
  .finally(function () {
    console.log('Done!');
      return knex.destroy();
  })
  .catch((e)=> {
    console.log('Migration failed:');
    console.log(e);
  })
