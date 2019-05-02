const db = require("../models");

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
  },
  findUser: (req, res) => {
    db.User.findOne({
      where: {
        userId: req.params.userId
      },
      include: [db.List]
    }).then(function(dbUser) {
      res.json(dbUser);
    });
  }
};
