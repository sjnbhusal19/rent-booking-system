require('dotenv').config({path: `${process.cwd()}/.env`})

console.log('> Loaded DB config:', {
  user:     process.env.DB_USERNAME,
  pass:     process.env.DB_PASSWORD,
  database: process.env.DB_NAME,
  host:     process.env.DB_HOST,
  port:     process.env.DB_PORT,
});


module.exports = {
  development: {
    username: process.env.DB_USERNAME || 'postgres',
    password: process.env.DB_PASSWORD || 'sujan',
    database: process.env.DB_NAME || 'rental_db',
    host:     process.env.DB_HOST || 'localhost',
    port:     parseInt(process.env.DB_PORT, 10) || 5432,
    dialect:  'postgres',
  },

  test: {
    username: process.env.TEST_DB_USERNAME || 'root',
    password: process.env.TEST_DB_PASSWORD || null,
    database: process.env.TEST_DB_NAME || 'database_test',
    host:     process.env.TEST_DB_HOST || '127.0.0.1',
    port:     parseInt(process.env.TEST_DB_PORT, 10) || 3306,
    dialect:  'postgres',
  },

  production: {
    username: process.env.PROD_DB_USERNAME || 'root',
    password: process.env.PROD_DB_PASSWORD || null,
    database: process.env.PROD_DB_NAME || 'database_production',
    host:     process.env.PROD_DB_HOST || '127.0.0.1',
    port:     parseInt(process.env.PROD_DB_PORT, 10) || 3306,
    dialect:  'postgres',
  },
};