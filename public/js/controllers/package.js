'use strict';

angular.module('sksApp').controller('PackageCtrl', function($scope, $http){

    $scope.sendPackage = function () {
        if ($scope.frmPackage.$valid) {

            var data = new FormData(this);
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

