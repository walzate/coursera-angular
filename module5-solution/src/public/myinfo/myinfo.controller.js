(function(){
  "use strict";
  angular.module('public')
  .controller('MyInfoController', MyInfoController);

  MyInfoController.$inject = ["MenuService"];
  function MyInfoController(MenuService){
    var ctrl = this;

    ctrl.user = MenuService.getUser();
    console.log ("MyInfoController "+ ctrl.user);
  }
})();
