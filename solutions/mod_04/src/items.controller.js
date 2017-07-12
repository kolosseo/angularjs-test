(function () {
'use strict';

angular.module('Data')
.controller('ItemsController', ItemsController)

ItemsController.$inject = ['items']
function ItemsController(items) {
    var cItems = this
    cItems.items = items 

    console.log('cItems.items', items)
}

})()
