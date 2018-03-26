(() => {
  'use strict'
  angular
    .module('correos')
    .controller('controladorSucursalListar', controladorSucursalListar);
    
    controladorSucursalListar.$inject = ['$http', '$state','$scope', '$location','$stateParams', 'servicioSucursales']

      function controladorSucursalListar($http, $state, $scope, $location,$stateParams, servicioSucursales) {
        let vm = this;
        servicioSucursales.listarSucursalesJson();
        listarSucursales();
        
        vm.editSucursal = (pSucursal) => {
          $state.go('main.editarsucursales', {objSucursalTemp: JSON.stringify(pSucursal) });
    
        };
    
         vm.listaSucursales = listarSucursales();

        function listarSucursales(){
        let listaSucursales = servicioSucursales.getSucursal();

        return listaSucursales;
      }

    }
 })();

