const router = require("express").Router();
let User = require("../models/user.model");

router.route("/").get((req, res) => {
  //gets all users in the db
  User.find()
    .then((users) => res.json(users))
    .catch((err) => res.status(400).json("ERROR: " + err));
});

router.route("/add").post((req, res) => {
  //creates a new user and adds it to the db
  const id = req.body.id;
  const username = req.body.username;
  const email = req.body.email;

  const newUser = new User({ username, email, id });

  newUser
    .save()
    .then(() => res.json("User added!"))
    .catch((err) => res.status(400).json("ERROR: " + err));
});

router.route("/put/:id").put((req, res) => {
  //find the user in the db and update using the body of the request
  User.findByIdAndUpdate({ id: req.params.id }, req.body).then(function () {
    //responds with the updated user entry
    User.findOne({ id: req.params.id }).then(function (user) {
      res.send(user);
    });
  });
});

router.route("/:id").get((req, res) => {
  //finds a user in the db based on the id
  User.findById({ id: req.params.id }).then(function (user) {
    res.send(user);
  });
});

module.exports = router;
