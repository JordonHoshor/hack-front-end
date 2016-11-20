(function() {

  'use strict';

  angular
    .module('alexaApp.components.main')
    .service('mainService', mainService);

  mainService.$inject = ['$http'];

  const baseUrl = 'https://broncoshack.herokuapp.com/';

  function mainService($http) {
    /*jshint validthis: true */
    this.getPlayers = () => {
      return $http.get(baseUrl);
    };
  }

})();
