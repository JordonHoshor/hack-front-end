(function() {

  'use strict';

  angular
    .module('alexaApp.components.main', [])
    .controller('mainController', mainController);

  mainController.$inject = ['mainService'];

  function mainController(mainService) {
    /*jshint validthis: true */
    this.greeting = 'Hello World!';
  }

})();
