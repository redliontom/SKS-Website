'use strict';

angular.module('sksApp').controller('PackageCtrl', function($scope, $http){

    $scope.sendPackage = function () {
        if ($scope.frmPackage.$valid) {

            var data = {Firstname : $scope.Firstname, Lastname: $scope.Lastname, Street: $scope.Street, PostalCode: $scope.PostalCode,
                City: $scope.City, Weight: $scope.Weight};
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

