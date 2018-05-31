const environment = process.env.NODE_ENV || 'development'
const path = require('path');
const knex = path.resolve(__dirname, '../../knexfile.js');
const config = require(knex)[environment];
module.exports = require('knex')(config);
