(() => {
  'use strict'
  angular
    .module('correos')
    .controller('controladorListarEncargadoSucursal', controladorListarEncargadoSucursal);
    
    controladorListarEncargadoSucursal.$inject = ['$state', '$stateParams', '$location', 'servicioUsuarios'];

  function controladorListarEncargadoSucursal($state, $stateParams, $location, servicioUsuarios) {
    let vm = this;

    vm.listaUsuarios = listarUsuarios();
  

    vm.editUsuarios = (pUsuario) =>{
      $state.go('modificarEncargadoSucursal', {objUsuarioTemp : JSON.stringify(pUsuario)});

    };

    function listarUsuarios(){
      let listaUsuarios = servicioUsuarios.getUsuarios();
      return listaUsuarios;
    }
  }
})();

// function listarEncargadoSucursal(){
//   let listaUsuarios = servicioUsuarios.getUsuarios();
//   let listaEncargadoSucursal = [];
//   listaUsuarios.forEach(usuario => {
//     if (usuario.tipo == '2') {
//       listaEncargadoSucursal.push(usuario);
//     }
//   });
//   return listaEncargadoSucursal;
// }