const router = require('express').Router();
let User = require('../models/user.model');


router.route('/').get((req, res) => {
    User.find()
        .then(users => res.json(users))
        .catch(err => res.status(400).json('ERROR: ' + err));
});

router.route('/add').post((req, res) => {
    const username = req.body.username;
    const email = req.body.email;

    const newUser = new User({username, email});

    newUser.save()
        .then(() => res.json('User added!'))
        .catch(err => res.status(400).json('ERROR: ' + err));
});

router.route('/put/:id').put((req, res) =>{
    User.findByIdAndUpdate({_id: req.params.id}, req.body).then(function(){
        User.findOne({_id: req.params.id}).then(function(user) {
          res.send(user);
        });
    });
});

router.route('/:id').get((req, res) =>{
    User.findById({_id: req.params.id}).then(function(user){
      res.send(user);
    });
});

module.exports = router;
