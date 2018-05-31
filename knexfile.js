// Update with your config settings.

module.exports = {

  development: {
    client: 'pg',
    connection: {
      database: process.env.DB_NAME,
      user:     process.env.DB_USER,
      password: ''
    },
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
    connection: process.env.DATABASE_URL,
    migrations: {
     directory: `${__dirname}/src/DB/migrations`
    },
    seeds: {
      directory: `${__dirname}/src/DB/seeds`
    }
  }
};
