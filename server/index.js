require("dotenv").config();
const path = require("path");

// Express setup
const express = require("express");
const app = express();

// start express

// host public react

app.use(express.static(path.join(__dirname, "../client/dist")));
app.get("*", (req, res) => {
  res.sendFile(path.join(__dirname, "../client/dist/index.html"));
});

app.listen(3000, () => {
  console.log("App listening on port 3000");
});
