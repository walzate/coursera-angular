// IIFE: Immediately-invoked function expression
(function () {
'use strinct';

angular.module('NarrowItDownApp',[])
.controller('NarrowItDownController', NarrowItDownController )
.service('MenuSearchService', MenuSearchService)
/*.directive('foundItems', FoundItemsDirective);

function FoundItemsDirective() {
  var ddo = {
    templateUrl: 'loader/itemsloaderindicator.template.html',
    scope: {
      items: '<',
      myTitle: '@title',
      badRemove: '=',
      onRemove: '&'
    },
    controller: FoundItemsDirectiveController,
    controllerAs: 'list',
    bindToController: true
  };

  return ddo;
}

function FoundItemsDirectiveController() {
  var list = this;

  list.cookiesInList = function () {
    for (var i = 0; i < list.items.length; i++) {
      var name = list.items[i].name;
      if (name.toLowerCase().indexOf("cookie") !== -1) {
        return true;
      }
    }

    return false;
  };
}*/

// Properly inject $scope into the controller using the $inject property
// (shown how in video lecture) to make sure to protect your code from minification.
NarrowItDownController.$inject = ["MenuSearchService"];
function NarrowItDownController(MenuSearchService){
  var narrow = this;
  narrow.searchTerm="";

  narrow.getMatchedMenuItems = function (){
    MenuSearchService.getMatchedMenuItems(narrow.searchTerm);
    narrow.foundItems = MenuSearchService.getFoundItems();
  };

  narrow.removeItem = function(index){
    MenuSearchService.removeItem(index);
  }

};

MenuSearchService.$inject = ['$http']
function MenuSearchService($http){
  var service = this;
  var foundItems = [];

  service.getMatchedMenuItems = function (searchTerm){
    foundItems = [];

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
            foundItems.push(item);
          }
          i++;
        }
      }
    });;

    return promise;
  }

  service.getFoundItems = function (){
    return foundItems;
  }

  service.removeItem = function (index){
    foundItems.splice(index, 1);
  }
};
})();
