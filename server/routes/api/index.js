const router = require("express").Router();
const chatGPT = require("./chatgpt");

router.use("/chatgpt", chatGPT);

module.exports = router;
