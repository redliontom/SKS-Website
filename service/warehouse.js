var http = require("http");
var fs = require("fs");
var url = "blackwolf.azurewebsites.net";

var options = {
    hostname: url,
    port: 80,
    path: "/WarehouseService.svc/",
    method: "POST",
    headers: {
        "content-type": "application/json"
    }
};

exports.post = function (data, callback) {
    fs.readFile(data.path, function (error, buffer) {
        fs.unlinkSync(data.path);
        var request = http.request(options, function (response) {
            callback(null, response.statusCode);
        });

        request.on("error", function (error) {
            callback(error);
        });

        request.write(buffer);
        request.end();
    });
};
