(()=>{
  'use strict';
  angular
  .module('correos')
  .controller('controladorPaquetesEncargadoSucursal', controladorPaquetesEncargadoSucursal);
  
  controladorPaquetesEncargadoSucursal.$inject = ['$state', '$stateParams', '$location', 'servicioUsuarios'];
  
  function controladorPaquetesEncargadoSucursal($state, $stateParams, $location, servicioUsuarios) {
    let vm = this;

    vm.listaRepartidores = listarRepartidores();  
    vm.rolSucursal = servicioUsuarios.getRolSucursal();  
    vm.listaPaquetes = servicioUsuarios.getAllPaquetes(); 

    


    function listarRepartidores(){
      let listaUsuarios = servicioUsuarios.getUsuarios();
      let listaRepartidores = [];
      listaUsuarios.forEach(usuario => {
        if (usuario.tipo == '3') {
          listaRepartidores.push(usuario);
        }
      });
      return listaRepartidores;
    } 
  
  }

  
  
  })();