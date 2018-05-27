const environment = process.env.ENVIRONMENT || 'development'
const path = require('path');
const knex = path.resolve(__dirname, '../../knexfile.js');
const config = require(knex)[environment];
module.exports = require('knex')(config);
