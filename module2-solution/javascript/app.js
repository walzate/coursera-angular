// IIFE: Immediately-invoked function expression
(function () {
'use strinct';

angular.module('ShoppingListCheckOff',[])
.controller('ToBuyController', ToBuyController)
.controller('AlreadyBoughtController', AlreadyBoughtController)
.service('ShoppingListCheckOffService', ShoppingListCheckOffService);

// Properly inject $scope into the controller using the $inject property
// (shown how in video lecture) to make sure to protect your code from minification.
ToBuyController.$inject = ['$scope'];

function ToBuyController($scope){

  $scope.menu;
  $scope.messageStyle;
  $scope.inputBorderStyle;
  $scope.checkMenu = function(){
  $scope.menu = removeEmptyItems ($scope.menu);
  var menuLength = calculateMenuLength($scope.menu);
  console.debug ("menuLength: " + menuLength);
  // If the textbox is empty and the user clicks the "Check If Too Much"
  // button, the message "Please enter data first" should show up.
  if(menuLength==0){
    $scope.message="Please enter data first";
    $scope.messageStyle = "failure";
    $scope.inputBorderStyle = "inputBorderFailure";
  }
  // If the number of items in the textbox is less than or equal to 3
  //(e.g., 1, 2, or 3), a message should show up under to the textbox
  //saying "Enjoy!".
  else if(menuLength<=3){
    $scope.message="Enjoy!";
    $scope.messageStyle = "success";
    $scope.inputBorderStyle = "inputBorderSuccess";
  }
  //If the number of items is greater than 3 (4, 5, and above),
  //the message "Too much!"
  else if(menuLength>3){
    $scope.message="Too much!";
    $scope.messageStyle = "success";
    $scope.inputBorderStyle = "inputBorderSuccess";
  }
  };
};
  /*
  * Method used to calculate the number of elements
  * having as separator the comma character
  */
  function calculateMenuLength (menu){
    var menuLength = 0;
    if(undefined !== menu && menu.length > 0){
      menuLength = menu.split(',').length;
    }
    return menuLength;
  }
  /*
  * Implement this case item 1, item2,,item3 or this case item 1, item2, ,item3
  * as not counting an 'empty' item towards the count of how many items there
  * are in the list.
  */
  function removeEmptyItems(menu){
    var result;
    result = menu.replace(/ /g,'').replace(',,', ',');
    return result;
  }

})();
