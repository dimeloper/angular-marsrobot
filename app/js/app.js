'use strict';

/* App Module */

var marsrobotApp = angular.module('marsrobotApp', [
  'ngRoute',
  'marsrobotControllers',
  'marsrobotFilters',
  'marsrobotServices'
]);

marsrobotApp.config(['$routeProvider',
  function($routeProvider) {
    $routeProvider.
      when('/home', {
        templateUrl: 'partials/home-view.html',
        controller: 'HomeCtrl'
      }).
      otherwise({
        redirectTo: '/home'
      });
  }]);
