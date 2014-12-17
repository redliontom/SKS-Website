var soap = require("soap");
var url = "http://blackwolf.azurewebsites.net/TrackingService.svc?singleWsdl";

exports.trackPackage = function (data, callback) {
    soap.createClient(url, function (error, client) {
        if (error) {
            return callback(error);
        }

        client.TrackPackage(data, function (error, result) {
            callback(error, result);
        });
    });
};

exports.reportTrackingOperation = function (data, callback) {
    soap.createClient(url, function (error, client) {
        if (error) return callback(error);

        client.ReportTrackingOperation(data, function (error, result) {
            callback(error, result);
        });
    });
};
