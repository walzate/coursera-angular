(function () {
"use strict";

angular.module('common')
.service('MenuService', MenuService);


var registeredUser;

MenuService.$inject = ['$http', 'ApiPath'];
function MenuService($http, ApiPath) {
  var service = this;

  service.getCategories = function () {
    return $http.get(ApiPath + '/categories.json').then(function (response) {
      return response.data;
    });
  };


  service.getMenuItems = function (category) {
    var config = {};
    if (category) {
      config.params = {'category': category};
    }

    return $http.get(ApiPath + '/menu_items.json', config).then(function (response) {
      return response.data;
    });
  };


  service.setUser = function(user){
    console.log ("Setting the user: "+ user);
    registeredUser = user;
  }

  service.getUser = function(){
    console.log ("Getting the user: "+ registeredUser);
    return registeredUser;
  }

  service.getMenuItem = function (shortName) {
    var config = {};

    console.log ("User service: "+ shortName)

    return $http.get(ApiPath + '/menu_items/'+shortName+'.json', config)
    ;
  };

}



})();
