// IIFE: Immediately-invoked function expression
(function () {
'use strinct';

angular.module('NarrowItDownApp',[])
.controller('NarrowItDownController', NarrowItDownController )
.service('MenuSearchService', MenuSearchService)
.directive('foundItems', FoundItemsDirective);

function FoundItemsDirective() {
  var ddo = {
    templateUrl: 'loader/itemsloaderindicator.template.html',
    scope: {
      foundItemsArray: '<',
      onRemove: '&'
    },
    controller: FoundItemsDirectiveController,
    controllerAs: 'items',
    bindToController: true
  };

  return ddo;
};

FoundItemsDirectiveController.$inject = ["MenuSearchService"];
function FoundItemsDirectiveController(MenuSearchService) {
  var items = this;
  
};

// Properly inject $scope into the controller using the $inject property
// (shown how in video lecture) to make sure to protect your code from minification.
NarrowItDownController.$inject = ["MenuSearchService"];
function NarrowItDownController(MenuSearchService){
  var narrow = this;
  narrow.searchTerm="";

  narrow.getMatchedMenuItems = function (){
    MenuSearchService.getMatchedMenuItems(narrow.searchTerm);
    narrow.foundItemsArray = MenuSearchService.getFoundItemsArray();
    console.log(narrow.foundItemsArray);
  };

  narrow.removeItem = function(index){
    MenuSearchService.removeItem(index);
  }

};

MenuSearchService.$inject = ['$http']
function MenuSearchService($http){
  var service = this;
  var foundItemsArray = [];

  service.getMatchedMenuItems = function (searchTerm){
    foundItemsArray = [];

    var promise = $http({
      method: "GET",
      url: "https://davids-restaurant.herokuapp.com/menu_items.json"
    }).then(function (result) {
      if(searchTerm.length>0){
        var menuItems = result.data.menu_items;
        var i=0;
        for (var i = 0; i<menuItems.length ; i++){
          item = menuItems[i];
          if(item.description.toLowerCase().indexOf(searchTerm.toLowerCase()) !== -1){
            foundItemsArray.push(item);
          }
          i++;
        }
      }
    });;

    return promise;
  }

  service.getFoundItemsArray = function (){
    return foundItemsArray;
  }

  service.removeItem = function (index){
    foundItemsArray.splice(index, 1);
  }
};
})();
