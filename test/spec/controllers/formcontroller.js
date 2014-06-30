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
        expect(scope.data.attempts).toBe(0);
    });

    it('should increase the attempts by 1 after each submit', function(){
        scope.submit();
        expect(scope.data.attempts).toBe(1);
        scope.submit();
        expect(scope.data.attempts).toBe(2);

    });

	it('should check the value of firstName and lastName not to be empty before incrementing the attemps', function(){
		scope.submit();
		expect(scope.data.complete).toBeFalsy();
		scope.data.firstName = 'John';
		scope.data.lastName = 'Doe';

        scope.submit();

		expect(scope.data.complete).toBeTruthy();

	});
});