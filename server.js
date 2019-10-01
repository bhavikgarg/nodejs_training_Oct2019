var express = require('express');
var app = express();
var routes = require('./routes');

app.listen(3000, function() {
    console.log("Server started");
});

// app.get('/', function(req, res) {
//     res.send("Ok I am running")
// })

// app.get('/api/students', function(req, res) {
//     res.send("Ok. Students fetched");
// });

// routes(app);
require('./routes')(app);

module.exports = app;