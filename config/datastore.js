const { Pool } = require('pg');

const pool = new Pool({
  user: 'jon',
  host: 'localhost',
  database: 'redmercury',
  password: '',
  port: 5432,
});

module.exports = pool;
