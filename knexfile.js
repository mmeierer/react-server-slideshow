// Update with your config settings.

module.exports = {

  development: {
    client: 'pg',
    connection: 'postgresql://localhost:5432',
    migrations: {
     directory: `${__dirname}/src/DB/migrations`
    },
    seeds: {
      directory: `${__dirname}/src/DB/seeds`
    }
  },

  production: {
    client: 'pg',
    ssl: true,
    connection: process.env.DATABASE_URL + '?ssl=true',
    migrations: {
     directory: `${__dirname}/src/DB/migrations`
    },
    seeds: {
      directory: `${__dirname}/src/DB/seeds`
    }
  }
};
