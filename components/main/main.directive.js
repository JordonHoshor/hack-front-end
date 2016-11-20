(function() {

  'use strict';

  angular
    .module('alexaApp.components.main')
    .directive('mainDirective', mainDirective);

  // mainDirective.$inject = ['$http'];

  function mainDirective() {
    /*jshint validthis: true */
    console.log('mainDirective');
  }

})();
