(function () {
'use strict'

    angular.module('ShoppingListCheckOff', [])
        .controller('ToBuyController', ToBuyController)
        .controller('AlreadyBoughtController', AlreadyBoughtController)
        .service('ShoppingListService', ShoppingListService)

    // TO BUY LIST - controller
    ToBuyController.$inject = ['ShoppingListService']
    function ToBuyController(ShoppingListService) {

        this.items = ShoppingListService.getToBuyItems()

        this.buyItem = function (i) {
            try {
                ShoppingListService.buyItem(i)
            } catch (error) {
                this.errorMessage = error.message
            }
        }
    }

    // BOUGHT LIST - controller
    AlreadyBoughtController.$inject = ['ShoppingListService']
    function AlreadyBoughtController(ShoppingListService) {
        this.items = ShoppingListService.getBoughtItems()
    }

    function ShoppingListService() {
        var service = this

        var boughtItems = []
        var toBuyItems = [
            {
                name: 'cookies',
                qty: 10
            },
            {
                name: 'pizza',
                qty: 4
            },
            {
                name: 'noodles',
                qty: 1
            },
            {
                name: 'pasta',
                qty: 8
            }
        ]

        service.buyItem = function (itemIndex) {
            var el = toBuyItems.splice(itemIndex, 1)

            boughtItems.push(el[0])
        }

        service.getToBuyItems = function () {
            return toBuyItems
        }

        service.getBoughtItems = function () {
            return boughtItems
        }
    }

})()

