(function () {
'use strict'

angular.module('myFirstApp', [])

.controller('MyFirstController', function ($scope) {
    $scope.name = 'Jacopo'
    $scope.sayHello = function() {
        return 'Hello!'
    }
})

})()
