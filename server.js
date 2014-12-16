// Dependencies
var bodyParser = require("body-parser");
var express = require('express');

// Express
var app = express();

<<<<<<< HEAD
<<<<<<< HEAD
app.use(express.static(__dirname + "/public"));
app.use(bodyParser.json());

// Routing
require("./routing")(app);
=======
=======
app.use(express.static(__dirname + "/public"));

>>>>>>> 95a574f... hurr
// Routing
<<<<<<< HEAD
require("routing")(app);
>>>>>>> a9a6c2a... Routing
=======
require("./routing")(app);
>>>>>>> 70abca6... bugfix

// Start server
app.listen(8080);
console.log('Server is running on port 8080');
