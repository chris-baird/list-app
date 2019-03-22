const router = require("express").Router();
const todoController = require("../../controllers/todoController");

router.route("/").get(todoController.findAll);

module.exports = router;
