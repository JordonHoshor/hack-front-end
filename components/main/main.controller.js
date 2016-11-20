(function() {

  'use strict';

  angular
    .module('alexaApp.components.main', [])
    .controller('mainController', mainController);

  mainController.$inject = ['mainService'];

  function mainController(mainService) {
    /*jshint validthis: true */
    this.players = {};
    this.players.bench = [];
    mainService.getPlayers().then((data) => {
      const results = data.data.data;
      results.map(player => {
        switch (player.team_slot) {
          case 'QB':
            this.players.QB = player;
            break;
          case 'RB1':
            this.players.RB1 = player;
            break;
          case 'RB2':
            this.players.RB2 = player;
            break;
          case 'WR1':
            this.players.WR1 = player;
            break;
          case 'WR2':
            this.players.WR2 = player;
            break;
          case 'TE':
            this.players.TE = player;
            break;
          case 'FLEX':
            this.players.FLEX = player;
            break;
          case 'DEF':
            this.players.DEF = player;
            break;
          case 'K':
            this.players.K = player;
            break;
          case 'Bench':
            this.players.bench.push(player);
            break;
        }
      });
    });
  }

})();
// $scope.myData = response.list;
//
// // Update ngTable to reflect the new data
// if ($scope.tableParams) {
//     $scope.tableParams.reload();
// } else {
//     // create your table as before,
//     // but tying it to $scope.myData
//     // instead of response.list
// }
