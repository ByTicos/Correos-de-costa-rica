(() => {
  'use strict'
  angular
    .module('correos')
    .controller('controladorEncargadoSucursal', controladorEncargadoSucursal);
    
    controladorEncargadoSucursal.$inject = ['$state', '$stateParams', '$location', 'servicioUsuarios'];

  function controladorEncargadoSucursal($state, $stateParams, $location, servicioUsuarios) {
    let vm = this;

    vm.listaEncargadoSucursal = listarEncargadoSucursal();
    vm.nuevoEncargadoSucursal = {};

    vm.registrarEncargadoSucursal = (pNuevoEncargadoSucursal) => {

      let objNuevoEncargadoSucursal = new Usuario(pNuevoEncargadoSucursal.cedula, pNuevoEncargadoSucursal.foto, pNuevoEncargadoSucursal.primerNombre, pNuevoEncargadoSucursal.segundoNombre, pNuevoEncargadoSucursal.primerApellido, pNuevoEncargadoSucursal.segundoApellido, pNuevoEncargadoSucursal.correo, pNuevoEncargadoSucursal.telefono, pNuevoEncargadoSucursal.fechaNacimiento, pNuevoEncargadoSucursal.provincia, pNuevoEncargadoSucursal.canton, pNuevoEncargadoSucursal.distrito,pNuevoEncargadoSucursal.direccionExacta, 'encargado sucursal',pNuevoEncargadoSucursal.sucursalAsignada);

      let registro = servicioUsuarios.addUsuario(objNuevoEncargadoSucursal);

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
    function listarEncargadoSucursal(){
      let listaUsuarios = servicioUsuarios.getUsuarios();
      let listaEncargadoSucursal = [];
      listaUsuarios.forEach(usuario => {
        if (usuario.tipo == 'encargado sucursal') {
          listaEncargadoSucursal.push(usuario);
        }
      });
      return listaEncargadoSucursal;
    }
  }
})();