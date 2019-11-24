// jshint esversion:6

const express = require("express");
const app = express();
const bodyParser = require("body-parser");
app.use(bodyParser.urlencoded({ extended: true }));
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

	var data = {
		members: [
			{
				email_address: email,
				status: "subscribed",
				merge_fields: {
					FNAME: firstName,
					LNAME: lastName
				}
			}
		]
	};

	var jsonData = JSON.stringify(data);

	var options = {
		url: "https://us4.api.mailchimp.com/3.0/lists/10adaca160",
		method: "POST",
		headers: {
			Authorization: "bob1 3f2ac03ddb9435b21ca11ef31f8db82f-us4"
		},
		body: jsonData
	};

	request(options, (error, response, body) => {
		if (error) {
			console.log(error);
		} else {
			console.log(response.statusCode);
		}
	});
});

app.listen(port, () => {
	console.log(`Listening on port ${port}...`);
});

//APIKEY: 3f2ac03ddb9435b21ca11ef31f8db82f-us4
//audience id: 10adaca160
