'use strict';

angular.module('sksApp').controller('PackageCtrl', function($scope, $http){

    $scope.sendPackage = function () {
        if ($scope.frmPackage.$valid) {

<<<<<<< HEAD
            var data = {FirstName : $scope.firstname, LastName : $scope.lastname, Street : $scope.street, PostalCode : $scope.plz,
                City : $scope.city, Country: $scope.country, Weight : $scope.weight};
            console.log(data);
=======
            var data = new FormData(this);
>>>>>>> 7ebaac8... AngularJS Zeug
            $http.post('/Package', data)
                .success(function (data) {
                    console.log('success');
                })
                .error(function (data) {
                    console.log(data)
                })
        }
    }

});

