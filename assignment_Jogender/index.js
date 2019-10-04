var express = require('express');
var api = require("./nodejs_training_Oct2019/Assignment_Jogender/routes");
var bodyParser = require('body-parser');

var app = express();
app.use(bodyParser());
app.use(bodyParser.urlencoded({ extended: true }));
app.use('/api', api);

app.listen(8080, function() {
    console.log("App listing port 8080");
});