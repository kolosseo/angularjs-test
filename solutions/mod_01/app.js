(function () {
'use strict'

angular.module('LunchCheck', [])

.controller('LunchCheckController', LunchCheckController)

LunchCheckController.$inject = ['$scope', '$filter', '$injector']
function LunchCheckController ($scope, $filter, $injector) {
    $scope.string = '';
    $scope.res = '';

	$scope.checkIfTooMuch = function() {
        var s = $scope.string;
        var list = s.split(',');

        if (!s) {
            $scope.res = 'Please enter data first!';
        }
        else if (list.length > 3) {
            $scope.res = 'Too Much!';
        }
        else {
            $scope.res = 'Enjoy!';
        }
    }
}

})()
