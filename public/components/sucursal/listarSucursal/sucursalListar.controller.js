(() => {
  'use strict'
  angular
    .module('correos')
    .controller('controladorSucursalListar', controladorSucursalListar);
    
    controladorSucursalListar.$inject = ['$http', '$state','$scope', '$location','$stateParams', 'servicioSucursales']

      function controladorSucursalListar($http, $state, $scope, $location,$stateParams, servicioSucursales) {
        let vm = this;

        listarSucursales();
        
        
        vm.editSucursal = (pSucursal) => {
          $state.go('main.editarsucursales', {objSucursalTemp: JSON.stringify(pSucursal) });
    
        };
    
         vm.listaSucursales = listarSucursales();

         vm.cambiarEstadoSucursal = (pEstado, pSucursal) => {
          let listaSucursal = servicioSucursales.getSucursal();
          let sucursal = {};
    
          for (let i = 0; i < listaSucursal.length; i++) {
            if (listaSucursal[i].id == pSucursal.id){
              listaSucursal[i].cambiarEstadoDeActividadSucursal(pEstado);
              sucursal = listaSucursal[i];
            }
          }
            servicioSucursales.actualizarSucursal(sucursal);
            $state.go('main.listarSucursales');
            vm.listaSucursales = listarSucursales();
            
          };

        function listarSucursales(){
        let listaSucursales = servicioSucursales.getSucursal();

        return listaSucursales;
      }

    }
 })();

