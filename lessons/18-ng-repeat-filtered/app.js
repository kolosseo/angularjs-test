(function () {
'use strict';

    var shoppingList = [
        "Milk", "Donuts", "Cookies", "Chocolate",
        "Peanut Butter", "Pepto Bismol",
        "Pepto Bismol (Chocolate flavor)", "Pepto Bismol (Cookie flavor)"
    ];

    angular.module('ShoppingListApp', [])
        .controller('ShoppingListController', ShoppingListController);

    ShoppingListController.$inject = ['$scope'];
    function ShoppingListController($scope) {
        $scope.shoppingList = shoppingList;

        // this is not necessary,
        // due to the native angular filter on html side
        //
        //function containsFilter(value) {
        //    return value.indexOf(searchValue) !== -1
        //}
        //$filteredShoppingList = $scope.shoppingList.filter(containsFilter)
    }

})();
