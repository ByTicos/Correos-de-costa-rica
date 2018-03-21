(()=>{
  'use strict';
  angular
  .module('correos')
  .controller('controladorPaquetesEncargadoSucursal', controladorPaquetesEncargadoSucursal);
  
  controladorPaquetesEncargadoSucursal.$inject = ['$state', '$stateParams', '$location', 'servicioUsuarios'];
  
  function controladorPaquetesEncargadoSucursal($state, $stateParams, $location, servicioUsuarios) {
    let vm = this;
  
    vm.listaPaquetes = servicioUsuarios.getAllPaquetes();
  
     
  }
  
  })();