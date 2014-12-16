var multiparty = require("connect-multiparty");
var multiMiddle = multiparty();

module.exports = function (app) {
    app.route("/Package")
        .get(function (request, response) {
            response.sendStatus(405);
        })
        .post(function (request, response) {
            require("./service/package").submitNewPackage(request.body, function (error, result) {
                if (error) {
                    console.error(error);
                    response.sendStatus(500);
                } else {
                    response.sendStatus(result);
                }
            });
        });

    app.route("/TrackPackage")
        .post(function (request, response) {
            response.sendStatus(405);
        })
        .get(function (request, response) {
            require("./service/tracking").trackPackage(request.query, function (error, result) {
                if (error) {
                    console.error(error);
                    response.sendStatus(500);
                } else {
                    response.sendStatus(result);
                }
            });
        });

    app.route("/ReportTrackingOperation")
        .post(function (request, response) {
            response.sendStatus(405);
        })
        .get(function (request, response) {
            require("./service/tracking").reportTrackingOperation(request.body, function (error, result) {
                if (error) {
                    console.error(error);
                    response.sendStatus(500);
                } else {
                    response.sendStatus(result);
                }
            });
        });

    app.route("/PredictRoute")
        .get(function (request, response) {
            response.sendStatus(405);
        })
        .post(function (request, response) {
            require("./service/routing").predictRoute(request.body, function (error, result) {
                if (error) {
                    console.error(error);
                    response.sendStatus(500);
                } else {
                    response.sendStatus(result);
                }
            });
        });

    app.route("/Warehouse")
        .get(function (request, response) {
            response.sendStatus(405);
        })
        .post(multiMiddle, function (request, response) {
            require("./service/warehouse").post(request.files.Warehouse, function (error, result) {
                delete request.files;

                if (error) {
                    console.error(error);
                    response.sendStatus(500);
                } else {
                    response.sendStatus(result);
                }
            });
        });
};
