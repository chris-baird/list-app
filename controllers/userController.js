const db = require("../models");

// Defining methods for the bookController
module.exports = {
  createUser: function(req, res) {
    db.User.create({
      email: req.body.email,
      userId: req.body.userId
    })
      .then(dbUser => {
        res.json(dbUser);
      })
      .catch(err => {
        console.log(err);
      });
  }
};
