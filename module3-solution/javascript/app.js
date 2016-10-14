// IIFE: Immediately-invoked function expression
(function () {
'use strinct';

angular.module('NarrowItDownApp',[])
.controller('NarrowItDownController', NarrowItDownController )
.service('MenuSearchService', MenuSearchService);

// Properly inject $scope into the controller using the $inject property
// (shown how in video lecture) to make sure to protect your code from minification.
NarrowItDownController.$inject = ["MenuSearchService"];
function NarrowItDownController(MenuSearchService){

};

function MenuSearchService(){
  var service = this;

  service.getMatchedMenuItems = function (searchTerm){
    //return $http(...).then(function (result) {
        // process result and only keep items that match
        //var foundItems...

        // return processed items
        //return foundItems;
    //});
  }
}
})();
