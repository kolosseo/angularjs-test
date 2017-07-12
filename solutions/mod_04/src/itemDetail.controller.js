(function () {
'use strict';

angular.module('Data')
.controller('ItemDetailController', ItemDetailController);

ItemDetailController.$inject = ['items', '$stateParams'];
function ItemDetailController(items, $stateParams) {
    var itemDetail = this
    var item = items[$stateParams.itemId]

    console.log('ITEMS', items)
    console.log('PARAM', $stateParams.itemId)
    //console.log('itemDetail', itemDetail)

    itemDetail.name = item.name
    itemDetail.short_name = item.short_name
    itemDetail.description = item.description
}

})()

