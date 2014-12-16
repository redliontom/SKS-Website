<<<<<<< HEAD
var multiparty = require("connect-multiparty");
var multiMiddle = multiparty();

module.exports = function (app) {
    app.route("/Package")
        .get(function (request, response) {
            response.sendStatus(405);
=======
module.exports = function (app) {
    app.route("/Package")
        .get(function (request, response) {
            response.send(405);
>>>>>>> a9a6c2a... Routing
        })
        .post(function (request, response) {
            require("./service/package").submitNewPackage(request.body, function (error, result) {
                if (error) {
                    console.error(error);
<<<<<<< HEAD
                    response.sendStatus(500);
                } else {
                    response.sendStatus(result);
=======
                    response.send(500);
                } else {
                    response.send(200);
>>>>>>> a9a6c2a... Routing
                }
            });
        });

    app.route("/TrackPackage")
        .post(function (request, response) {
<<<<<<< HEAD
            response.sendStatus(405);
=======
            response.send(405);
>>>>>>> a9a6c2a... Routing
        })
        .get(function (request, response) {
            require("./service/tracking").trackPackage(request.query, function (error, result) {
                if (error) {
                    console.error(error);
<<<<<<< HEAD
                    response.sendStatus(500);
                } else {
                    response.sendStatus(result);
=======
                    response.send(500);
                } else {
                    response.send(200);
>>>>>>> a9a6c2a... Routing
                }
            });
        });

    app.route("/ReportTrackingOperation")
        .post(function (request, response) {
<<<<<<< HEAD
            response.sendStatus(405);
=======
            response.send(405);
>>>>>>> a9a6c2a... Routing
        })
        .get(function (request, response) {
            require("./service/tracking").reportTrackingOperation(request.body, function (error, result) {
                if (error) {
                    console.error(error);
<<<<<<< HEAD
                    response.sendStatus(500);
                } else {
                    response.sendStatus(result);
=======
                    response.send(500);
                } else {
                    response.send(200);
>>>>>>> a9a6c2a... Routing
                }
            });
        });

    app.route("/PredictRoute")
        .get(function (request, response) {
<<<<<<< HEAD
            response.sendStatus(405);
=======
            response.send(405);
>>>>>>> a9a6c2a... Routing
        })
        .post(function (request, response) {
            require("./service/routing").predictRoute(request.body, function (error, result) {
                if (error) {
                    console.error(error);
<<<<<<< HEAD
                    response.sendStatus(500);
                } else {
                    response.sendStatus(result);
=======
                    response.send(500);
                } else {
                    response.send(200);
>>>>>>> a9a6c2a... Routing
                }
            });
        });

    app.route("/Warehouse")
        .get(function (request, response) {
<<<<<<< HEAD
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
=======
            response.send(405);
        })
        .post(function (request, response) {
            require("./service/routing").post(request.body, function (error, result) {
                if (error) {
                    console.error(error);
                    response.send(500);
                } else {
                    response.send(200);
>>>>>>> a9a6c2a... Routing
                }
            });
        });
};
