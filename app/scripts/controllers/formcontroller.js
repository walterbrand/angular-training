angular.module('app').controller('formcontroller', ['$scope', function($scope){
    'use strict';
    $scope.data = {
        attempts : 0,
		complete : false,
	    firstName: '',
	    lastName: ''
    };

    $scope.submit = function(){
        $scope.data.attempts++;
	    if( $scope.data.firstName.length > 0 && $scope.data.lastName.length > 0){
		    $scope.data.complete = true;
	    } else {
		    $scope.data.complete = false;

	    }
    }
}]);