(() => {
  'use strict'
  angular
    .module('correos')
    .controller('controladorRegistrarEncargadoAduana', controladorRegistrarEncargadoAduana);
    
    controladorRegistrarEncargadoAduana.$inject = ['$state', '$stateParams', '$location', 'servicioUsuarios'];

  function controladorRegistrarEncargadoAduana($state, $stateParams, $location, servicioUsuarios) {
    let vm = this;

    vm.nuevoUsuario = {};

    vm.registrarUsuario = (pNuevoUsuario) => {

      let objNuevoUsuario = new Usuario(pNuevoUsuario.cedula, pNuevoUsuario.foto, pNuevoUsuario.primerNombre, pNuevoUsuario.segundoNombre, pNuevoUsuario.primerApellido, pNuevoUsuario.segundoApellido, pNuevoUsuario.correo, pNuevoUsuario.telefono, pNuevoUsuario.fechaNacimiento, pNuevoUsuario.provincia, pNuevoUsuario.canton, pNuevoUsuario.distrito,pNuevoUsuario.direccionExacta, pNuevoUsuario.contrasenna, '4', pNuevoUsuario.puesto);

      let registro = servicioUsuarios.addUsuario(objNuevoUsuario);

      if (registro == true) {
        swal("Registro exitoso", "El usuario ha sido registrado correctamente", "success", {
          button: "Aceptar",
        });
        /*$location.path('/logIn');*/
      }
      else {
        swal("Registro fallido", "Ha ocurrido un error, intente nuevamente", "error", {
          button: "Aceptar",
        });
      }
    }
  }
})();
