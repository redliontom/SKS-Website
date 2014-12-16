angular.module('sksApp', ['ui.router'])

    .config(['$urlRouterProvider', '$stateProvider', '$locationProvider', function($urlRouterProvider, $stateProvider, $locationProvider) {
        $urlRouterProvider.otherwise('/');

        $stateProvider

            .state('home', {
                url: '/',
                views: {
                    "mainView": {
                        templateUrl: '/templates/dashboard.html'
                    }
                }
            })

            .state('package', {
                url: '/package',
                views: {
                    "mainView": {
                        templateUrl: '/templates/package.html',
                        controller: 'PackageCtrl'
                    }
                }
            })

            .state('tracking', {
                url: '/tracking',
                views: {
                    "mainView": {
                        templateUrl: '/templates/tracking.html',
                        controller: 'TrackingCtrl'
                    }
                }
            })

            .state('report', {
                url: '/report',
                views: {
                    "mainView": {
                        templateUrl: '/templates/report.html',
                        controller: 'TrackingCtrl'
                    }
                }
            })

            .state('warehouse', {
                url: '/warehouse',
                views: {
                    "mainView": {
                        templateUrl: '/templates/warehouse.html',
                        controller: 'WarehouseCtrl'
                    }
                }
            })

            .state('routing', {
                url: '/routing',
                views: {
                    "mainView": {
                        templateUrl: '/templates/routing.html',
                        controller: 'RoutingCtrl'
                    }
                }
            })

    }]);

