const dbconnection = require('../config/connection');

exports.getCities = () => dbconnection
    .query('select * from cities');