const router = require('express').Router();
let Algorithm = require('../models/algorithm.model');

router.route('/').get((req, res) => {
    //gets all algorithms in the db
    Algorithm.find()
        .then(algorithms => res.json(algorithms))
        .catch(err => res.status(400).json('ERROR: ' + err));
});

router.route('/add').post((req, res) => {
    //adds a new algorithm to the db
    const name = req.body.name;
    const description = req.body.description;
    const best_case = req.body.best_case;
    const average_case = req.body.average_case;
    const worst_case = req.body.worst_case;

    const newAlgorithm = new Algorithm({name, description, best_case, average_case, worst_case});

    newAlgorithm.save()
        .then(() => res.json('Algorithm added!'))
        .catch(err => res.status(400).json('ERROR: ' + err));
});

module.exports = router;
