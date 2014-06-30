angular.module('app').controller('formcontroller', ['$scope', function($scope){
    'use strict';
    $scope.data = {
        attempts : 0,
	complete : false,
	    firstName: '',
	    lastName: ''
    };

    $scope.submit = function(){
        this.data.attempts++;
    }
}]);