const { Pool } = require('pg');
require('env2')('./config.env');

let dbURL = '';

if (process.env.NODE_ENV === 'test') {
    dbURL = process.env.cities_test_DB;
} else if (process.env.NODE_ENV === 'production') {
    dbURL = process.env.DATABASE_URL;
} else {
    dbURL = process.env.DB_URL;
}

if (!dbURL) throw new Error('No Database URL!!!');

const options = {
    connectionString: dbURL,
    ssl: true
}

module.exports = new Pool(options);