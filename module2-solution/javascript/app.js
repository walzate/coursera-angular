// IIFE: Immediately-invoked function expression
(function () {
'use strinct';

angular.module('ShoppingListCheckOff',[])
.controller('ToBuyController', ToBuyController)
.controller('AlreadyBoughtController', AlreadyBoughtController)
.service('ShoppingListCheckOffService', ShoppingListCheckOffService);

// Properly inject $scope into the controller using the $inject property
// (shown how in video lecture) to make sure to protect your code from minification.
ToBuyController.$inject = ["ShoppingListCheckOffService"];

function ToBuyController(ShoppingListCheckOffService){
  var toBuy = this;
  toBuy.toBuyItems = ShoppingListCheckOffService.getToBuyItems();

  toBuy.removeItem = function (index){
    ShoppingListCheckOffService.removeItem(index);
  }

};

AlreadyBoughtController.$inject = ["ShoppingListCheckOffService"];
function AlreadyBoughtController(ShoppingListCheckOffService){
 var bought = this;
 bought.boughtItems = ShoppingListCheckOffService.getBoughtItems();
};

function ShoppingListCheckOffService(){
  var service = this;
  var toBuyItems = [{ name: "cookies", quantity: 10 },
                    { name: "snacks", quantity: 20 },
                    { name: "candies", quantity: 100 },
                    { name: "cakes", quantity: 12 },
                    { name: "sodas", quantity: 11 },
                  ];
  var boughtItems = [];
  var itemToMove;

  service.getToBuyItems = function (){
    return toBuyItems;
  }

  service.getBoughtItems = function (){
    return boughtItems;
  }

  service.removeItem = function (index){
    itemToMove = toBuyItems[index];
    toBuyItems.splice(index, 1);
    boughtItems.push(itemToMove);
    console.log("toBuyItems: ", toBuyItems);
    console.log("boughtItems: ", boughtItems);
    console.log("item to remove Service: ", index);
    console.log("item to move : ", itemToMove);
  }

}
})();
