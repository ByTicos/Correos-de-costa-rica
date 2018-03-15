(() => {
  'use strict';
  angular
    .module('correos')
    .controller('controladorEditarClientes', controladorEditarClientes);

  controladorEditarClientes.$inject = ['$stateParams', '$state', '$location', 'servicioUsuarios'];

  function controladorEditarClientes($stateParams, $state, $location, servicioUsuarios) {
    let vm = this;

    vm.regresar = () => {
      $state.go('cliente');
    }

    vm.editarCliente = {};

    let objClienteAEditar = JSON.parse($stateParams.objClienteTemp);

    let objNuevoCliente = new Usuario(objClienteAEditar.cedula, objClienteAEditar.foto, objClienteAEditar.primerNombre, objClienteAEditar.segundoNombre, objClienteAEditar.primerApellido, objClienteAEditar.segundoApellido, objClienteAEditar.correo, objClienteAEditar.telefono, objClienteAEditar.fechaNacimiento, objClienteAEditar.provincia, objClienteAEditar.canton, objClienteAEditar.distrito, objClienteAEditar.direccionExacta, 'cliente');


    vm.editarCliente.cedula = objNuevoCliente.cedula;
    vm.editarCliente.foto = objNuevoCliente.foto;
    vm.editarCliente.primerNombre = objNuevoCliente.primerNombre;
    vm.editarCliente.segundoNombre = objNuevoCliente.segundoNombre;
    vm.editarCliente.primerApellido = objNuevoCliente.primerApellido;
    vm.editarCliente.segundoApellido = objNuevoCliente.segundoApellido;
    vm.editarCliente.correo = objNuevoCliente.correo;
    vm.editarCliente.telefono = objNuevoCliente.telefono;
    vm.editarCliente.fechaNacimiento = new Date(objNuevoCliente.fechaNacimiento);
    vm.editarCliente.provincia = objNuevoCliente.provincia;
    vm.editarCliente.canton = objNuevoCliente.canton;
    vm.editarCliente.distrito = objNuevoCliente.distrito;
    vm.editarCliente.direccionExacta = objNuevoCliente.direccionExacta;

    vm.editCliente = (pUsuario) => {
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
          objUsuario.contrasenna = pUsuario.contrasenna;

          servicioUsuarios.actualizarUsuario(objUsuario);

        }
      });
      swal("Edición exitosa", "Cliente editado correctamente", "success", {
        button: "Aceptar",
      });
      $state.go('cliente')
    }
  }

})();