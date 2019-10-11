const express = require("express");
const bodyParser = require("body-parser");

const app = express();

var items = [];
let workItems = [];

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
        listTitle: day,
        Newitems: items
    });
});

app.get("/work", function (req, res) {
    res.render("list", {
        listTitle: "Work",
        Newitems: workItems
    });
});

app.get("/about", function(req, res){
    res.render("about");
});

app.post("/", function (req, res) {
    var item = req.body.item;

    if (req.body.list === "Work") {
        workItems.push(item);
        res.redirect("/work");
    } else {
        items.push(item);
        res.redirect("/");
    }

});

app.listen(3000, function () {
    console.log("Server started on port 3000");
});