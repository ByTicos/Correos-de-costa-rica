(() => {
  'use strict'
  angular
    .module('correos')
    .controller('controladorListarTarjetas', controladorListarTarjetas);
    
    controladorListarTarjetas.$inject = ['$http', '$state','$scope', '$location','$stateParams', 'servicioUsuarios']

      function controladorListarTarjetas($http, $state, $scope, $location,$stateParams, servicioUsuarios) {
        let vm = this;

        listarTarjetas();
        
        // vm.editSucursal = (pSucursal) => {
        //   $state.go('editarsucursales', {objSucursalTemp: JSON.stringify(pSucursal) });
    
        // };
    
         vm.listaTarjeta = listarTarjetas();

        function listarTarjetas(){
        let listaTarjeta = servicioUsuarios.getTarjeta();

        return listaTarjeta;
      }

    }
 })();

