const environment = process.env.ENVIRONMENT || 'development'
const path = require('path');
const knex = path.resolve(__dirname, '../../knexfile.js');
console.log(knex);
const config = require(knex)[environment];
module.exports = require('knex')(config);
