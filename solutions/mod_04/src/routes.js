(function () {
'use strict';

angular.module('MenuApp')
.config(RoutesConfig);

RoutesConfig.$inject = ['$stateProvider', '$urlRouterProvider'];
function RoutesConfig($stateProvider, $urlRouterProvider) {

    // Redirect to home page if no other URL matches
    $urlRouterProvider.otherwise('/');

    // *** Set up UI states ***
    $stateProvider

    // Home page
    .state('home', {
        url: '/',
        templateUrl: 'src/home.template.html'
    })

    // Premade list page
    .state('categoriesList', {
        url: '/cats',
        templateUrl: 'src/categories.template.html',
        controller: 'CategoriesController as cats',
        resolve: {
            items: ['MenuDataService', function(MenuDataService) {
                return MenuDataService.getAllCategories()
            }]
        }
    })

    .state('itemsList', {
        url: '/cats/{catId}',
        templateUrl: 'src/items.template.html',
        controller: 'ItemsController as cItems',
        resolve: {
            items: ['$stateParams', 'MenuDataService', function($stateParams, MenuDataService) {
                console.log('params', $stateParams)
                console.log('catId', $stateParams.catId)
                return MenuDataService.getItemsForCategory($stateParams.catId)
            }]
        },
    })

    .state('itemsList.itemDetail', {
        //url: '/item/{itemId}',
        templateUrl: 'src/itemDetail.template.html',
        controller: "ItemDetailController as itemDetail",
        params: {
            itemId: null
        }
    })

}

})();

