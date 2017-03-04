(function() {
"use strict";

angular.module('common', [])
.constant('ApiPath', 'https://powerful-escarpment-57363.herokuapp.com')
.config(config);

config.$inject = ['$httpProvider'];
function config($httpProvider) {
  $httpProvider.interceptors.push('loadingHttpInterceptor');
}

})();
