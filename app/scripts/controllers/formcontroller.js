angular.module('app').controller('formcontroller', ['$scope', function($scope){
    'use strict';
    $scope.data = {
        attempts : 0,
        complete : false
    };

    $scope.submit = function(){
        this.data.attempts++;
    }
}]);