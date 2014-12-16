module.exports = function (app) {
    app.route("/Package")
        .get(function (request, response) {
            response.send(405);
        })
        .post(function (request, response) {
            require("./service/package").submitNewPackage(request.body, function (error, result) {
                if (error) {
                    console.error(error);
                    response.send(500);
                } else {
                    response.send(result);
                }
            });
        });

    app.route("/TrackPackage")
        .post(function (request, response) {
            response.send(405);
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
            response.send(405);
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
            response.send(405);
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
            response.send(405);
        })
        .post(function (request, response) {
            require("./service/routing").post(request.body, function (error, result) {
                if (error) {
                    console.error(error);
                    response.sendStatus(500);
                } else {
                    response.sendStatus(result);
                }
            });
        });
};
