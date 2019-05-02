const router = require("express").Router();
const listController = require("../../controllers/listController");

router.route("/create").post(listController.createList);

module.exports = router;
