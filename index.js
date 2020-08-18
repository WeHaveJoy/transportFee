const transportFee = require('./transportFee');
const express = require('express');

const exphbs = require("express-handlebars");
const bodyParser = require("body-parser");

const app = express();

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.engine('handlebars', exphbs());
app.set('view engine', 'handlebars');

// console.log(transportFee("morning"));
// console.log(transportFee("afternoon"));
// console.log(transportFee("evening"));

app.get('/', function (req, res) {
    res.render("index");
});

app.post('/fee', function (req, res) {
    const price = transportFee(req.body.shift);
    res.render("fee",{price});
});

app.get('/Sinovuyo/', function (req, res) {
    res.send("Hi, Sinovuyo!")
});

//route that takes a parameter
app.get("/fee/:time", function (req, res) {
    const theFee = transportFee(req.params.time);
    res.send("The fee is:" + theFee);

});

app.listen(3007, function () {
    console.log("App started on port 3007");
})