// IIFE: Immediately-invoked function expression
(function () {
'use strinct';

angular.module('MyApp',['data','ui.router'])
.controller('NarrowItDownController', NarrowItDownController );

NarrowItDownController.$inject = ["MenuDataService"];
function NarrowItDownController(MenuDataService){
  var promise =MenuDataService.getAllCategories();
  narrow = this;

  narrow.allCategoriesArray = [];
  promise.then(function (result) {
      narrow.allCategoriesArray = result.data;
      console.log("allCategoriesArray: "+narrow.allCategoriesArray);
  });

}

})();
