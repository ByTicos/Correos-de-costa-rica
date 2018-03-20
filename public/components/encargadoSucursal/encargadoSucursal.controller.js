(() => {
  'use strict'
  angular
    .module('correos')
    .controller('controladorencargadoSucursal', controladorencargadoSucursal);
    
    controladorencargadoSucursal.$inject = ['$state', '$stateParams', '$location', 'servicioUsuarios'];

  function controladorencargadoSucursal($state, $stateParams, $location, servicioUsuarios) {
    let vm = this;

    vm.listaUsuarios = listarUsuarios();

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