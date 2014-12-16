var soap = require("soap");
var url = "http://blackwolf.azurewebsites.net/RoutingService.svc?wsdl";

exports.predictRoute = function (data, callback) {
    soap.createClient(url, function (error, client) {
        if (error) {
            return callback(error);
        }

        client.PredictRoute(data, function (error, result) {
            callback(error, result);
        });
    });
};
