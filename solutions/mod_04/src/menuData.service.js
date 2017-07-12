(function () {
'use strict';

angular.module('Data')
    .constant('ApiBasePath', "https://davids-restaurant.herokuapp.com")
    .service('MenuDataService', MenuDataService)

    MenuDataService.$inject = ['$http', '$q', 'ApiBasePath']
    function MenuDataService($http, $q, ApiBasePath) {
        var service = this

        var foundCategories = []

        service.getItems = function() {
            return foundCategories
        }

        service.getAllCategories = function() {

            console.log('into Service')

            var deferred = $q.defer()
            var result = {
                message: ''
            };

            return $http({
                method: "GET",
                url: (ApiBasePath + "/categories.json")
            }).then(function (result) {
                return result.data
            })
        }

        service.getItemsForCategory = function(query) {

            console.log('into Service')

            var deferred = $q.defer()
            var result = {
                message: ''
            }

            if (! query) {
                result.message = 'No search query!';
                deferred.reject(result);
                return deferred.promise;
            }

/*
            var response = $http({
                method: "GET",
                url: (ApiBasePath + "/menu_items.json")
            })

            console.log(response)

            deferred.resolve(result);

            return deferred.promise;
 //*/

            return $http({
                method: "GET",
                url: (ApiBasePath + "/menu_items.json?category=" + query)
            }).then(function (result) {
                return result.data.menu_items
            })
        }
    }

})()
