(function () {
'use strict';

    angular.module('CounterApp', [])
        .controller('CounterController', CounterController);

    CounterController.$inject = ['$scope', '$timeout'];
    function CounterController($scope, $timeout) {
        $scope.counter = 0;

        $scope.upCounter = function () {
            $timeout(function() {
                $scope.counter++
                console.log('counter incremented')
            }, 2000)
        };

        // this way is equivalent to the lines above.
        // it doesn't use the native "$timeout" but wraps the code
        // into $scope.$apply to keep it into the angular flow, and
        // to keep the excepions seen by angular too.
        //
        //$scope.upCounter = function () {
        //    setTimeout(function() {
        //        $scope.$apply( function() {
        //            $scope.counter++
        //            console.log('counter incremented')
        //        })
        //    }, 2000)
        //};

        // this other way is almost equivalent to the lines
        // above, anyway it is not suggested.
        // it keeps the code inside the setTimeout into the
        // angular flow, by explicitly calling the "Digest Cycle",
        // but it doesn' keep the excepions to be seen by angular.
        //
        //$scope.upCounter = function () {
        //    setTimeout(function() {
        //        $scope.counter++
        //        console.log('counter incremented')
        //        $scope.$digest()
        //    }, 2000)
        //};
    }

})();
