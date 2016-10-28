(function () {
'use strict';

angular.module('data')
.service('MenuDataService', MenuDataService);

MenuDataService.$inject = ['$http']
function MenuDataService($http) {
    var service = this;

    service.getAllCategories = function(){

    }
    service.getItemsForCategory = function(categoryShortName){

    }

}
})();
