(function () {
'use strict';

angular.module('Data')
.controller('CategoriesController', CategoriesController);

CategoriesController.$inject = ['items'];
function CategoriesController(items) {
    var cats = this
    cats.items = items 

    console.log('items', items)
}

})()
