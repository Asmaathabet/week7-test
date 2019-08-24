const dbconnection = require('../config/connection');

exports.addCity = (data) => {
    const {
        name,
        city,
    } = data;
    const sql = {
        text: 'INSERT INTO cities (name, city) VALUES ($1, $2);',
        values: [name, city],
    };
    return dbconnection.query(sql);
};