// jshint esversion:6

const express = require("express");
const app = express();
const bodyParser = require("body-parser");
app.use(bodyParser.urlencoded({extended: true}));
const request = require("request");
const port = 1108;

app.use(express.static(__dirname));

app.get("/", (req, res) => {
  res.sendFile(__dirname + "/html/signup.html");
});

app.listen(port, () => {
  console.log(`Listening on port ${port}...`);
});