(function () {
'use strict';

angular.module('MyApp')
.component('categories', {
    templateUrl: 'src/categories.template.html',
    controller: CategoriesComponentController,
    bindings: {
      items: '<',
      myTitle: '@title',
      onRemove: '&'
    }
});

CategoriesComponentController.$inject = ["MenuDataService"];
function CategoriesComponentController(MenuDataService) {
  var $ctrl = this;

};

})();
