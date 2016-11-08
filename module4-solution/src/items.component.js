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
};

})();
