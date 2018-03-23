(() => {
  'use strict';
  angular
    .module('correos')
    .controller('controladorModificarCliente', controladorModificarCliente);

  controladorModificarCliente.$inject = ['$stateParams', '$state', '$location', 'servicioUsuarios'];

  function controladorModificarCliente($stateParams, $state, $location, servicioUsuarios) {
    let vm = this;

    vm.regresar = () => {
      $state.go('registrarCliente');
    }

    vm.modificarCliente = {};

    let objClienteAModificar = JSON.parse($stateParams.objClienteTemp);

    let objNuevoCliente = new Usuario(objClienteAModificar.cedula, objClienteAModificar.foto, objClienteAModificar.primerNombre, objClienteAModificar.segundoNombre, objClienteAModificar.primerApellido, objClienteAModificar.segundoApellido, objClienteAModificar.correo, objClienteAModificar.telefono, objClienteAModificar.fechaNacimiento, objClienteAModificar.provincia, objClienteAModificar.canton, objClienteAModificar.distrito, objClienteAModificar.direccionExacta, 'cliente');


    vm.modificarCliente.cedula = objNuevoCliente.cedula;
    vm.modificarCliente.foto = objNuevoCliente.foto;
    vm.modificarCliente.primerNombre = objNuevoCliente.primerNombre;
    vm.modificarCliente.segundoNombre = objNuevoCliente.segundoNombre;
    vm.modificarCliente.primerApellido = objNuevoCliente.primerApellido;
    vm.modificarCliente.segundoApellido = objNuevoCliente.segundoApellido;
    vm.modificarCliente.correo = objNuevoCliente.correo;
    vm.modificarCliente.telefono = objNuevoCliente.telefono;
    vm.modificarCliente.fechaNacimiento = new Date(objNuevoCliente.fechaNacimiento);
    vm.modificarCliente.provincia = objNuevoCliente.provincia;
    vm.modificarCliente.canton = objNuevoCliente.canton;
    vm.modificarCliente.distrito = objNuevoCliente.distrito;
    vm.modificarCliente.direccionExacta = objNuevoCliente.direccionExacta;

    vm.modifCliente = (pUsuario) => {
      let listaUsuarios = servicioUsuarios.getUsuarios();

      listaUsuarios.forEach(objUsuario => {
        if (objUsuario.cedula == objNuevoCliente.cedula) {
          objUsuario.foto = pUsuario.foto;
          objUsuario.primerNombre = pUsuario.primerNombre;
          objUsuario.segundoNombre = pUsuario.segundoNombre;
          objUsuario.primerApellido = pUsuario.primerApellido;
          objUsuario.segundoApellido = pUsuario.segundoApellido;
          objUsuario.correo = pUsuario.correo;
          objUsuario.telefono = pUsuario.telefono;
          objUsuario.fechaNacimiento = pUsuario.fechaNacimiento;
          objUsuario.provincia = pUsuario.provincia;
          objUsuario.canton = pUsuario.canton;
          objUsuario.distrito = pUsuario.distrito;
          objUsuario.direccionExacta = pUsuario.direccionExacta;
    

          servicioUsuarios.actualizarUsuario(objUsuario);

        }
      });
      swal("Edición exitosa", "Cliente modificado correctamente", "success", {
        button: "Aceptar",
      });
      $state.go('listarCliente')
    }
  }

})();