(function () {
'use strict'

angular.module('nameCalculator', [])

.controller('nameCalculatorController', function ($scope) {
    $scope.name = ''
    $scope.totalValue = 0

    //$scope.totalValueFun = function() {
    //     return $scope.name
    //}

    $scope.displayNumeric = function() {
        var totalNameValue = calculateNumericForString($scope.name)
        $scope.totalValue = totalNameValue
    }

    function calculateNumericForString(string) {
        var val = 0
        for (var i = 0; i < string.length; i++) {
            val += string.charCodeAt(i)
        }
        return val
    }
})

})()
