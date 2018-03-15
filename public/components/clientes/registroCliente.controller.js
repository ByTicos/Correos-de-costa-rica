(() => {
  'use strict'
  angular
    .module('correos')
    .controller('controladorClientes', controladorClientes);
    
    controladorClientes.$inject = ['$state', '$stateParams', '$location', 'servicioUsuarios'];

  function controladorClientes($state, $stateParams, $location, servicioUsuarios) {
    let vm = this;

    vm.listaClientes = listarClientes();
    vm.nuevoCliente = {};
    
    vm.editCliente = (pUsuario) =>{
      $state.go('editarCliente', {objClienteTemp : JSON.stringify(pUsuario)});

    };


    vm.registrarCliente = (pNuevoUsuario) => {

      let objNuevoCliente = new Usuario(pNuevoUsuario.cedula, pNuevoUsuario.foto, pNuevoUsuario.primerNombre, pNuevoUsuario.segundoNombre, pNuevoUsuario.primerApellido, pNuevoUsuario.segundoApellido, pNuevoUsuario.correo, pNuevoUsuario.telefono, pNuevoUsuario.fechaNacimiento, pNuevoUsuario.provincia, pNuevoUsuario.canton, pNuevoUsuario.distrito, pNuevoUsuario.direccionExacta, 'cliente');

      let registro = servicioUsuarios.addUsuario(objNuevoCliente);

      if (registro == true) {
        swal("Registro exitoso", "El cliente ha sido registrado correctamente", "success", {
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
    function listarClientes(){
      let listaUsuarios = servicioUsuarios.getUsuarios();
      let listaClientes = [];
      listaUsuarios.forEach(usuario => {
        if (usuario.tipo == 'cliente') {
          listaClientes.push(usuario);
        }
      });
      return listaClientes;
    }
  }
})();