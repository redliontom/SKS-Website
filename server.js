// Dependencies
var bodyParser = require("body-parser");
var express = require('express');

// Express
var app = express();

app.use(express.static(__dirname + "/public"));
app.use(bodyParser.raw());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded());

// Routing
require("./routing")(app);

// Start server
app.listen(8080);
console.log('Server is running on port 8080');
