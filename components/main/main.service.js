(function() {

  'use strict';

  angular
    .module('alexaApp.components.main')
    .service('mainService', mainService);

  mainService.$inject = ['$http'];

  function mainService($http) {
    /*jshint validthis: true */
    console.log('mainService');
  }

})();
