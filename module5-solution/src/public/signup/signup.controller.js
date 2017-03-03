(function(){
"use strict";

angular.module('public')
.controller('SignUpController', SignUpController);

function SignUpController(){
  var ctrl = this;

  console.log ("Hello signup 2");

  ctrl.user= null;

  ctrl.submit = function () {
    console.log ("Submit");
    console.log (ctrl.user);
  };
}
})();
