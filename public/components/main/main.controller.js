(() => {
  'use strict';
  angular
    .module('correos')
    .controller('controladorMain', controladorMain);

    controladorMain.$inject = ['$state','$location', 'servicioLogin', 'servicioUsuarios'];

  function controladorMain($state, $location, servicioLogin, servicioUsuarios) {
    const vm = this;

    vm.rol = servicioUsuarios.getRol();
    vm.listaPaquetes = servicioUsuarios.getPaquete();

    vm.cerrarSesion = ()=>{
      servicioLogin.cerrarSesion();

    }
    vm.getUsuarioActivo = () => {
      let listaUsuarios = servicioUsuarios.getUsuarios();
      let sesion = JSON.parse(sessionStorage.getItem('sesion'));
      let usuarioActivo = '';
      listaUsuarios.forEach(objUsuario => {
        if (objUsuario.primerNombre == sesion.nombre) {
          usuarioActivo = objUsuario.primerNombre + ' ' + objUsuario.segundoNombre + ' ' + objUsuario.primerApellido;
        }
      });
      return usuarioActivo
    };    
    
  }
})();