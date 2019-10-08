// jshint esversion: 6

const express = require("express");
const bodyParser = require("body-parser");
const request = require("request");

const app = express();

app.use(bodyParser.urlencoded({extended:true}));

app.get("/", function(req, res){
    res.sendFile(__dirname + "/index.html");
});

app.post("/", function(req, res) {
    var crypto = req.body.crypto;
    var fiat = req.body.fiat;
    var url = "https://apiv2.bitcoinaverage.com/indices/global/ticker/";
    url += crypto + fiat;
    console.log(url);
    request(url, function(error, response, body){
        var data = JSON.parse(body);
        var price = data.averages.day;
        res.send("<h1>The price of " + crypto + " is: " + price + fiat + "</h1>");
    });
});

app.listen(3000, function(){
    console.log("Server is running on port 3000");
});
