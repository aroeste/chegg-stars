(function (angular) {
  'use strict';
  angular.module('stars', [
    'ui.router',
 ,'stars.main'])
  .config(function ($stateProvider, $urlRouterProvider) {
    $urlRouterProvider.otherwise('/stars/main');

    $stateProvider
      .state('stars', {
        url: '/stars',
        abstract: true,
        template: '<ui-view></ui-view>'
      });
  });
}(angular));



