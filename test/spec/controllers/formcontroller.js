'use strict';

describe('Controller: formcontroller', function () {

    // load the controller's module
    beforeEach(module('app'));

    var formcontroller,
        scope;

    // Initialize the controller and a mock scope
    beforeEach(inject(function ($controller, $rootScope) {
        scope = $rootScope.$new();
        formcontroller = $controller('formcontroller', {
            $scope: scope
        });
    }));

    it('should have an initial count of 0 attempts', function () {

    });
});