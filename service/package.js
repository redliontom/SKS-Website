var soap = require("soap");
var url = "http://blackwolf.azurewebsites.net/PackageService.svc?singleWsdl";

/**
 * Sends client data to the webservice.
 *
 * @param {Object} data Data to forward to the service.
 * @param {Function} callback Get called after finishing or aborting the operation.
 */
exports.submitNewPackage = function (data, callback) {
    console.log(data);
    soap.createClient(url, function (error, client) {
        if (error) return callback(error);

        client.SubmitNewPackage(data, function (error, result) {
            callback(error, result);
        });
    });
};
