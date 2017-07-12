(function () {
'use strict';

    angular.module('NarrowItDownApp', [])
        .controller('NarrowItDownController', NarrowItDownController)
        .service('MenuSearchService', MenuSearchService)
        .constant('ApiBasePath', "https://davids-restaurant.herokuapp.com")
        .directive('foundItems', MenuListDirective)


    function MenuListDirective() {
        var ddo = { 
            templateUrl: 'menuList.html',
            scope: {
                items: '<',
                onRemove: '&' 
            },
            controller: MenuListDirectiveController,
            controllerAs: 'list',
            bindToController: true
        }

        return ddo
    } 

    function MenuListDirectiveController() {
        var list = this

        list.noItems = function() {
            if ((list.items !== undefined)
             && (list.items.length == 0))
                return true

            return false
        }
    }

    NarrowItDownController.$inject = ['MenuSearchService']
    function NarrowItDownController(MenuSearchService) {

        var menu = this

        //menu.found = MenuSearchService.getItems()

        menu.search = function() {
            var promise = MenuSearchService.getMatchedMenuItems(menu.query)
            menu.noItems = false

            promise.then(function(response) {
                //console.log('response:', response)
                menu.found = response
            })
            .catch(function (error) {
                menu.found = []
                console.log('Something went wrong:')
                console.log(error.message)
            })
        }

        menu.removeItem = function(index) {
            MenuSearchService.removeItem(index)
        }
    }


    MenuSearchService.$inject = ['$http', '$q', 'ApiBasePath'];
    function MenuSearchService($http, $q, ApiBasePath) {
        var service = this

        var foundItems = []

        service.getItems = function() {
            return foundItems;
        }

        service.removeItem = function(index) {
            foundItems.splice(index, 1)
        }

        service.getMatchedMenuItems = function(query) {
            var deferred = $q.defer();
            var result = {
                message: ''
            };

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

            //*
            return $http({
                method: "GET",
                url: (ApiBasePath + "/menu_items.json")
            }).then(function (result) {

                // process result and only keep items that match
                foundItems = result.data.menu_items.filter(function(el) {
                    //console.log('desc:', el.description)
                    return el.name.toLowerCase()
                        .indexOf(query.toLowerCase()) > -1
                })

                return foundItems
            }) //*/
        }
    }
})()
