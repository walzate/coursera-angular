(function () {
'use strict';

angular.module('MyApp')
.component('items', {
    templateUrl: 'src/items.template.html',
    //controller: ItemsComponentController,
    bindings: {
      values: '<'
    }
});

})();
