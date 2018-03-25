(() => {
  'use strict'
  angular
    .module('correos')
    .controller('controladorListarTarjetas', controladorListarTarjetas,);
    
    controladorListarTarjetas.$inject = ['$http', '$state','$scope', '$location','$stateParams', 'servicioUsuarios']

      function controladorListarTarjetas($http, $state, $scope, $location,$stateParams, servicioUsuarios) {
        let vm = this;

        
        
        // vm.editTarjeta = (pTarjeta) => {
        //   $state.go('editarsucursales', {objTarjetaTemp: JSON.stringify(pTarjeta) });
    
        // };
    
         vm.listaTarjeta = listarTarjetas();

         listarTarjetas();

        function listarTarjetas(){
        let listaTarjeta = servicioUsuarios.getTarjeta();

        return listaTarjeta;
      }

    }
 })();

