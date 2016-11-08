(function () {
'use strict';

angular.module('MyApp')
.component('items', {
    templateUrl: 'src/items.template.html',
    controller: ItemsComponentController,
    bindings: {
      values: '<',
      myTitle: '@title',
      onRemove: '&'
    }
});

ItemsComponentController.$inject = ["MenuDataService"];
function ItemsComponentController(MenuDataService) {
  var itemsDetail = this;

  //console.log(itemId);
  var promiseItems=MenuDataService.getItemsForCategory("L");
  itemsDetail.itemsForCategoryArray = [];
  promiseItems.then(function (result) {
      itemsDetail.itemsForCategoryArray = result.data.menu_items;
      console.log("itemsForCategoryArray: "+itemsDetail.itemsForCategoryArray);
  });

};

})();
