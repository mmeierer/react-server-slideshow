// Update with your config settings.

module.exports = {

  development: {
    client: 'sqlite3',
    connection: {
      filename: `${__dirname}/src/DB/localDB.db`
    },
    migrations: {
     directory: `${__dirname}/src/DB/migrations`
    },
    seeds: {
      directory: `${__dirname}/src/DB/seeds`
    },
    useNullAsDefault: true
  },

  production: {
    client: 'sqlite3',
    connection: {
      filename: `${__dirname}/src/DB/localDB.db`
    },
    migrations: {
     directory: `${__dirname}/src/DB/migrations`
    },
    seeds: {
      directory: `${__dirname}/src/DB/seeds`
    },
    useNullAsDefault: true
  }
};
