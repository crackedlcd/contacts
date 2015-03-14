var contacts = angular.module('contacts', [ 'ui.router' ,'contactCtrl', 'contactService'])

  .config(function($stateProvider, $urlRouterProvider) {

    $urlRouterProvider.otherwise("/show");

    $stateProvider

      .state('show', {
        url: '/show',
        templateUrl: '../views/partial/show.html'
      })
      .state('add', {
        url: '/add',
        templateUrl: '../views/partial/add.html'
      });
  });