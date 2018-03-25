(() => {
  'use strict'
  angular
    .module('correos')
    .controller('controladorListarTarjetas', controladorListarTarjetas);
    
    controladorListarTarjetas.$inject = ['$http', '$state','$scope', '$location','$stateParams', 'servicioUsuarios']

      function controladorListaTarjetas($http, $state, $scope, $location,$stateParams, servicioUsuarios) {
        let vm = this;

    
         vm.listaTarjeta = servicioUsuarios.getTarjeta();

         vm.editTarjeta = (pTarjeta) => {
           $state.go('main.editarTarjeta', {objTarjetaTemp: JSON.stringify(pTarjeta)});
         };
         

        
      }

    }
 })();

