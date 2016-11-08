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

ItemsComponentController.$inject = ["MenuDataService", '$stateParams'];
function ItemsComponentController(MenuDataService, $stateParams) {
  console.log("ItemsComponentController");
  var $ctrl = this;
  console.log("Es: " + $stateParams.itemShortName);
  console.log("Entró");

  //if(undefined != $stateParams.itemShortName){
    console.log($stateParams.itemShortName);
    var promiseItems=MenuDataService.getItemsForCategory($stateParams.itemShortName);

    $ctrl.itemsForCategoryArray = [];
    promiseItems.then(function (result) {
        $ctrl.itemsForCategoryArray = result.data.menu_items;
        console.log("itemsForCategoryArray: "+$ctrl.itemsForCategoryArray);
    });
  //}

};

})();
