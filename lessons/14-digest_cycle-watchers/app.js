(function () {
'use strict'

angular.module('CounterApp', [])
    .controller('CounterController', CounterController)

CounterController.$inject = ['$scope']
function CounterController($scope) {
    $scope.onceCounter = 0
    $scope.counter = 0

    $scope.showNumberOfWatchers = function () {
        console.log($scope)
        // watchers can be explicitly called, like done below,
        // anyway, they are automatically called when using variables
        // in html code (inside mustaches "{{ }}", or inside "ng-model")
        console.log($scope.$$watchersCount)
    }

    $scope.countOnce = function() {
        $scope.onceCounter = 1
    }

    $scope.upCounter = function() {
        $scope.counter++
    }

    // SPECIFIC WATCHER:
    // (get fired when a scpecific scope variable is touched,
    // if the variable is not modified, it fires only once.
    // if it is modified, it fires one more time to check
    // something else is not changed (dirty checking))
//  $scope.$watch('onceCounter', function(oldVal, newVal) {
//      console.log('once: old val', oldVal)
//      console.log('once: new val', newVal)
//  })
//  
//  $scope.$watch('counter', function(oldVal, newVal) {
//      console.log('upcounter: old val', oldVal)
//      console.log('upcounter: new val', newVal)
//  })

    // GENERIC WATCHER:
    // (get fired when every scope variable is touched,
    // if the variable is not modified, it fires only once.
    // if it is modified, it fires one more time to check
    // something else is not changed (dirty checking))
    $scope.$watch(function() {
        console.log('Digest Looop fired')
    })

}

})()
