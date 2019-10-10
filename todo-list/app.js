const express = require("express");
const bodyParser = require("body-parser");

const app = express();

var items = [];

app.use(bodyParser.urlencoded({
    extended: true
}));

app.use(express.static("public"));

app.set('view engine', 'ejs');

app.get("/", function (req, res) {
    var today = new Date();

    var options = {
        weekday: "long",
        day: "numeric",
        month: "long"
    };

    var day = today.toLocaleDateString("en-US", options);

    res.render("list", {
        KindOfDay: day,
        Newitems: items
    });
});

app.post("/", function (req, res) {
    var item = req.body.item;
    items.push(item);
    res.redirect("/");
});
app.listen(3000, function () {
    console.log("Server started on port 3000");
});