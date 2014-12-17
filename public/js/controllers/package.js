'use strict';

angular.module('sksApp').controller('PackageCtrl', function($scope, $http){

    $scope.sendPackage = function () {
        if ($scope.frmPackage.$valid) {

            var data = {FirstName : $scope.firstname, LastName : $scope.lastname, Street : $scope.street, PostalCode : $scope.plz,
                City : $scope.city, Weight : $scope.weight};
            console.log(data);
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

