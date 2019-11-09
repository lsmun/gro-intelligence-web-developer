var express = require('express');
var app = express();

//set view engine
app.set("view engine","jade")

app.get('/', function (req, res) {

    res.render('index');

});

app.use(express.static('public'))

var server = app.listen(5000, function () {
    console.log('Node server is running..');
});