(function(){
"use strict";

angular.module('public')
.controller('SignUpController', SignUpController);

SignUpController.$inject = ["MenuService"];
function SignUpController(MenuService){
  var ctrl = this;

  console.log ("Hello signup 2");

  ctrl.user= null;
  ctrl.infoSaved = false;
  ctrl.menuItemDoesntExist = false;

  ctrl.submit = function () {
    console.log ("Submit");
    console.log (ctrl.user);

    var promise = MenuService.getMenuItem(ctrl.user.menuNumber);

    promise.then(function (response) {
      ctrl.user.menuItem = response.data;
      console.log(ctrl.user.menuItem);
      console.log("ctrl.user.menuItem");
      console.log(ctrl.user.menuItem);
      if(!ctrl.user.menuItem.short_name){
        ctrl.menuItemDoesntExist = true;
        ctrl.infoSaved = false;
      }else{
        MenuService.setUser(ctrl.user);
        ctrl.infoSaved = true;
      }
    }).catch(function(e){
      ctrl.menuItemDoesntExist = true;
      ctrl.infoSaved = false;
       console.log("got an error in initial processing",e);
       throw e; // rethrow to not marked as handled,
                // in $q it's better to `return $q.reject(e)` here
    })



  };
}
})();
