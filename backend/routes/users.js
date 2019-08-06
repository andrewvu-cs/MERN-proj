const router = require('express').Router();
let User = require('../models/user.model');


// endpoint that handle incoming http get requests
router.route('/').get((req, res) => {
    // Mongoose method that retrieves data of all users, returns a promise
    User.find()
        .then(users=>res.json(users))
        .catch(err => res.status(400).json('Error: ' + err));
});


// endpoint that handle http post requests
router.route('/add').post((req, res) => {
    const username = req.body.username;

    // create new instance of user
    const newUser = new User({username});

    // saves it to mongodb atlas database
    newUser.save()
        .then(() => res.json('User added!'))
        .catch(err => res.status(400).json('Error: ' + err));
});

module.exports = router;