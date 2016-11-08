// IIFE: Immediately-invoked function expression
(function () {
'use strinct';

angular.module('MyApp',['data','ui.router'])
.controller('NarrowItDownController', NarrowItDownController );

NarrowItDownController.$inject = ["MenuDataService", '$stateParams'];
function NarrowItDownController(MenuDataService, $stateParams){
  var promise =MenuDataService.getAllCategories();
  narrow = this;

  narrow.allCategoriesArray = [];
  promise.then(function (result) {
      narrow.allCategoriesArray = result.data;
      console.log("allCategoriesArray: "+narrow.allCategoriesArray);
  });
    console.log("Entró");

    //if(undefined != $stateParams.itemShortName){
      //console.log($stateParams.itemShortName);
      var promiseItems=MenuDataService.getItemsForCategory('L');

      narrow.itemsForCategoryArray = [];
      promiseItems.then(function (result) {
          narrow.itemsForCategoryArray = result.data.menu_items;
          console.log("itemsForCategoryArray: "+narrow.itemsForCategoryArray);
      });
    //}




}

})();
