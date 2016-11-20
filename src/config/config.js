(function() {

  'use strict';

  angular
    .module('alexaApp.config', [])
    .config(routes);

  function routes($stateProvider, $urlRouterProvider) {
    $stateProvider
      .state('main', {
        url: '/main',
        controller: 'mainController',
        controllerAs: 'mainCtrl',
        templateUrl: 'components/main/main.view.html'
      });

    $urlRouterProvider
      .otherwise('/home');
  }

})();
