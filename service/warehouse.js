var http = require("http");
var fs = require("fs");

var options = {
    hostname: "blackwolf.azurewebsites.net",
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

        if (error) return callback(error);

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
