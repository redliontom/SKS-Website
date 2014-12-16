// Dependencies
var express = require('express');

// Express
var app = express();

app.use(express.static(__dirname + "/public"));

// Routing
require("./routing")(app);

// Start server
app.listen(8080);
console.log('Server is running on port 8080');
