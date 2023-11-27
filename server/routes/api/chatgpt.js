const router = require("express").Router();

const { getTest, postAnswer } = require("../../controllers/gptController.js");

router.route("/").post(postAnswer).get(getTest);

router.route("/");

module.exports = router;
