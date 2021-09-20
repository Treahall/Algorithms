const router = require('express').Router();
let Algorithm = require('../models/algorithm.model');

router.route('/').get((req, res) => {
    Algorithm.find()
        .then(algorithms => res.json(algorithms))
        .catch(err => res.status(400).json('ERROR: ' + err));
});

router.route('/add').post((req, res) => {
    const name = req.body.name;
    const description = req.body.description;

    const newAlgorithm = new Algorithm({name, description});

    newAlgorithm.save()
        .then(() => res.json('Algorithm added!'))
        .catch(err => res.status(400).json('ERROR: ' + err));
});

module.exports = router;
