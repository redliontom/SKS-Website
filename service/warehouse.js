var http = require("http");
var url = "http://blackwolf.azurewebsites.net/WarehouseService.svc";

var options = {
    hostname: url,
    port: 80,
    path: "/",
    method: "POST"
};

exports.post = function (data, callback) {
    var request = http.request(function (response) {
        callback(response.statusCode);
    });

    request.on("error", function (error) {
        callback(error);
    });

    request.write(JSON.stringify(data));
    request.end();
};
