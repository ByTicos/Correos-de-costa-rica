(() => {
  'use strict'
  angular
    .module('correos')
    .controller('controladorListarRepartidores', controladorListarRepartidores);
    
    controladorListarRepartidores.$inject = ['$state', '$stateParams', '$location', 'servicioUsuarios'];

  function controladorListarRepartidores($state, $stateParams, $location, servicioUsuarios) {
    let vm = this;

    // vm.listaUsuarios = listarUsuarios();
    vm.listaRepartidores = listarRepartidores();
  
      

    vm.editRepartidor = (pUsuario) =>{
      $state.go('main.editarRepartidor', {objRepartidorTemp : JSON.stringify(pUsuario)});
    };


    function listarRepartidores(){
      let listaUsuarios = servicioUsuarios.getUsuarios();
      let listaRepartidores = [];
      listaUsuarios.forEach(usuario => {
        if (usuario.tipo == 'repartidor') {
          listaRepartidores.push(usuario);
        }
      });
      return listaRepartidores;
    } 
    
  }
})();