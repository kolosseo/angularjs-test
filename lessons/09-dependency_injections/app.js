(function () {
'use strict'

angular.module('DIApp', [])

.controller('DIController', DIController)
// next line is needed to save controller parameters from minification:
//.controller('DIController', ['$scope', '$filter', '$injector', DIController])

// otherwise, the nex line is a more elegant way:
DIController.$inject = ['$scope', '$filter', '$injector']
function DIController ($scope, $filter, $injector) {
    $scope.name = 'Yaakov'

    $scope.upper = function () {
        var upCase = $filter('uppercase')
        $scope.name = upCase($scope.name)
    }

    console.log(DIController)
    console.log($injector.annotate(DIController))
}

//console.log(DIController.toString())

})()
