const router = require("express").Router();
const userController = require("../../controllers/userController");

router.route("/create").post(userController.createUser);

router.route("/:userId").get(userController.findUser);

module.exports = router;
