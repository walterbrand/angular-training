angular.module('app').controller('formcontroller', ['$scope', function ($scope) {
	'use strict';
	$scope.data = {
		attempts: 0,
		complete: false,
		firstName: '',
		lastName: ''
	};
	$scope.transaction = {
		fromAccountRef: '',
		toAccountRef: '',
		transactionRef: '',
		amount: 0,
		description: ''
	};

	$scope.onChangeAmount = function () {
		console.log('onChangeAmount: %o', arguments);
	};

	$scope.submit = function () {
		if ($scope.data.firstName.length > 0 && $scope.data.lastName.length > 0) {
			$scope.data.attempts++;
			$scope.data.complete = true;
		} else {
			$scope.data.complete = false;
		}
	};
}]);
angular.module('app').directive('moneyInput', function () {
	'use strict';
	return {
		restrict: 'E',
		template: '<div  >' +
			'<span>&euro;</span>' +
			'<span contenteditable="true" >{{transaction.amount | currencyNoFraction}}</span>' +
			'<span style="font-size: xlarge; margin-right: 5px; ">,</span>' +
			'<span contenteditable="true">{{transaction.amount | currencyFraction}}</span>' +
			'</div>'
	};
});

angular.module('app').filter('currencyFraction', [ '$filter', function ($filter) {
	'use strict';
	var currency = $filter('currency'),
		formats = {
			CURRENCY_SYM: '$',
			DECIMAL_SEP: '.',
			GROUP_SEP: ','
		};
	return function (amount, symbol) {
		var value = currency(amount, symbol).split(formats.DECIMAL_SEP);
		return value[1] || '';
	};
}]);
angular.module('app').filter('currencyNoFraction', [ '$filter', function ($filter) {
	'use strict';
	var currency = $filter('number'),
		formats = {
			CURRENCY_SYM: '$',
			DECIMAL_SEP: '.',
			GROUP_SEP: ','
		};
	return function (amount) {
		var value = currency(amount).split(formats.DECIMAL_SEP)[0];
		return value;
	};
}]);