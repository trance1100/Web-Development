// jshint esversion: 6
const express = require("express");
const bodyParser = require("body-parser");
const request = require("request");

const app = express();

app.use(express.static("public"));
app.use(bodyParser.urlencoded({
    extended: true
}));

app.get("/", function (req, res) {
    res.sendFile(__dirname + "/signup.html");
});

app.post("/", function (req, res) {
    var fname = req.body.fname;
    var lname = req.body.lname;
    var email = req.body.email;

    var data = {
        members: [{
            email_address: email,
            status: "subscribed",
            merge_fields: {
                FNAME: fname,
                LNAME: lname
            }
        }]
    };

    var jsonData = JSON.stringify(data);
    var options = {
        url: "https://us20.api.mailchimp.com/3.0/lists/1db7e53167",
        method: "POST",
        headers: {
            "Authorization": "larry1011 427802ef1dd92eead16f1a5808328761-us20"
        },
        body: jsonData
    };

    request(options, function (error, response, body) {
        if (error) {
            res.sendFile(__dirname + "/failure.html");
        } else {
            if(response.statusCode === 200) {
                res.sendFile(__dirname + "/sucess.html");
            } else {
                res.sendFile(__dirname + "/failure.html");
            }
        }
    });
});

app.post("/failure", function (req, res) {
   res.redirect("/");
});

app.listen(3000, function () {
    console.log("Listening on port 3000");
});

// 427802ef1dd92eead16f1a5808328761-us20
// List ID - 1db7e53167