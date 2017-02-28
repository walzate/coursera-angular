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
      controller: 'ItemsComponentController as itemsController',
      resolve: {
        items: ['MenuDataService', '$stateParams', function(MenuDataService, $stateParams) {
          return MenuDataService.getItemsForCategory($stateParams.itemShortName);
        }]
      }
    })
    ;
}

})();
