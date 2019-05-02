const db = require("../models");

module.exports = {
  createList: function(req, res) {
    db.List.create({
      store: req.body.store,
      UserId: req.body.UserId
    })
      .then(dbList => {
        res.json(dbList);
      })
      .catch(err => {
        console.log(err);
      });
  }
};
