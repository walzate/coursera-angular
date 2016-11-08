(function () {
'use strict';

angular.module('MyApp')
.config(RoutesConfig);

RoutesConfig.$inject = ['$stateProvider', '$urlRouterProvider'];
function RoutesConfig($stateProvider, $urlRouterProvider) {
  console.log("Routes");
  // Redirect to tab 1 if no other URL matches
  $urlRouterProvider.otherwise('/');

  // Set up UI states
  $stateProvider
    .state('categories', {
      url: '/categories',
      templateUrl: 'src/categories.html'
    })
    .state('home', {
      url: '/home',
      templateUrl: '/index.html'
    })
    .state('items', {
      url: '/items/{itemShortName}',
      templateUrl: 'src/items.html',
      //controller: 'ItemsComponentController as itemDetail',
      resolve: {
        itemId: ['$stateParams', function ($stateParams){
          console.log("$stateParams.itemShortName "+$stateParams.itemShortName);
          return $stateParams.itemShortName;
        }]
      }
    })
    ;
}

})();
