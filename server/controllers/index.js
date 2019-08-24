const express = require("express");

const router = express.Router();
const { getCities } = require('../database/queries/getCities');
const { addCity } = require('../database/queries/addCity');

router.get('/cities', (req, res, next) => {
    getCities()
        .then((result) => res.send(result.rows))
        .catch((err) => next(err.stack));
});

router.post('/add-city', (req, res, next) => {
    addCity(req.body)
        .then((result) => res.redirect('/'))
        .catch((err) => next(err.stack));
});

module.exports = router;