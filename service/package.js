var wcf = require("wcf.js");
var url = "http://blackwolf.azurewebsites.net/PackageService.svc";

/**
 * Sends client data to the webservice.
 *
 * @param {Object} data Data to forward to the service.
 * @param {Function} callback Get called after finishing or aborting the operation.
 */
exports.submitNewPackage = function (data, callback) {
    var BasicHttpBinding = wcf.BasicHttpBinding;
    var Proxy = wcf.Proxy;
    var binding = new BasicHttpBinding();
    var proxy = new Proxy(binding, url);
    var message = "";

    proxy.send(message, url + "/SubmitNewPackage", function (response, context) {
        console.log(response);
        callback(new Error("not implemented"));
    });
};
