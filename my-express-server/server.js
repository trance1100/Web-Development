const express = require('express');

const app = express();


app.get("/", function (req, res) {
    res.send("<h1> Hello, World!</h1>");
    console.log(req);
});

app.get("/contact", function(req, res)  {
    res.send("<h1>Contact me at larry1011x@gmail.com</h1>");
});

app.get("/about", function(req, res) {
    res.send("Just a programmer interested in code and also a computer support specialist.");
});
app.listen(3000, function () {
    console.log("Server started on port 3000");

});