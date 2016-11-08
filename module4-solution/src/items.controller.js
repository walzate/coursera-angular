(function () {
'use strict';

angular.module('MyApp')
.controller('ItemsComponentController', ItemsComponentController);

ItemsComponentController.$inject = ['items'];
function ItemsComponentController(items) {
  console.log("ItemsComponentController");
  var itemsController = this;
  itemsController.itemsForCategoryArray= items.data.menu_items;
  console.log("itemsController.itemsForCategoryArray ");
  console.log(itemsController.itemsForCategoryArray);
};

})();
