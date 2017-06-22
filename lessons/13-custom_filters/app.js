(function () {
'use strict';

    angular.module('MsgApp', [])
        .controller('MsgController', MsgController)
        .filter('love', myLoveFilter)
        .filter('truth', truthFilter);

    // the name of the filter below is the
    // name before + the word "Filter" appended
    MsgController.$inject = ['$scope', 'loveFilter'];
    function MsgController($scope, loveFilter) {
        $scope.name = 'Pippo';
        $scope.stateOfBeing = 'hungry';
        $scope.cookieCost = .45;

        $scope.sayMessage = function () {
            var msg = 'Pippo likes to eat healthy snacks at night!';
            var output = loveFilter(msg);
            return output;
        };

        $scope.feedPippo = function () {
            $scope.stateOfBeing = 'fed';
        };
    }

    // filter functions have to return as
    // function with the effective filter:
    function myLoveFilter() {
        return function(input) {
            input = input || '';
            input = input.replace('like', 'love');

            return input;
        }
    }

    function truthFilter() {
        return function(input, target, replace) {
            input = input || '';
            input = input.replace(target, replace);

            return input;
        }
    }

})();
