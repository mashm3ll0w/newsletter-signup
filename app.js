// jshint esversion:6

const express = require("express");
const app = express();
const bodyParser = require("body-parser");
app.use(bodyParser.urlencoded({extended: true}));
const request = require("request");
const port = 1108;

app.use(express.static(__dirname)); // this looks at the entire directory
//app.use(express.static("public")); // this points the app to look into a folder called "public" that will house the css,imgs etc.

app.get("/", (req, res) => {
  res.sendFile(__dirname + "/html/signup.html");
});

app.post("/", (req, res) => {
  var firstName = req.body.firstName;
  var lastName = req.body.lastName;
  var email = req.body.email;
  res.send(`Thank you for signing up for the newsletter ${firstName} ${lastName}!! Cheers :)`);
});

app.listen(port, () => {
  console.log(`Listening on port ${port}...`);
});