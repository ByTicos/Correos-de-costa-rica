(() => {
  'use strict'
  angular
    .module('correos')
    .controller('controladorRegistrarEncargadoSucursal', controladorRegistrarEncargadoSucursal);
    
    controladorRegistrarEncargadoSucursal.$inject = ['$state', '$stateParams', '$location', 'servicioUsuarios', 'servicioSucursales'];

  function controladorRegistrarEncargadoSucursal($state, $stateParams, $location, servicioUsuarios, servicioSucursales) {
    let vm = this;

    vm.nuevoUsuario = {};
    servicioSucursales.listarSucursalesJson();
    vm.listaSucursales = servicioSucursales.getSucursal();
    console.log('Prueba', servicioSucursales.getSucursal());

    vm.registrarUsuario = (pNuevoUsuario) => {

      let objNuevoUsuario = new Usuario(pNuevoUsuario.cedula, pNuevoUsuario.foto, pNuevoUsuario.primerNombre, pNuevoUsuario.segundoNombre, pNuevoUsuario.primerApellido, pNuevoUsuario.segundoApellido, pNuevoUsuario.correo, pNuevoUsuario.telefono, pNuevoUsuario.fechaNacimiento, pNuevoUsuario.provincia, pNuevoUsuario.canton, pNuevoUsuario.distrito, pNuevoUsuario.direccionExacta, pNuevoUsuario.contrasenna, '2',pNuevoUsuario.sucursalAsignada);

      let registro = servicioUsuarios.addUsuario(objNuevoUsuario);

      if (registro == 'Se registró el usuario correctamente') {
        let sesion = JSON.parse(sessionStorage.getItem('sesion'));
        if(sesion == null || sesion.tipo != '5'){
          
          swal("Registro exitoso", "El usuario ha sido registrado correctamente", "success", {
            button: "Aceptar",
          }); 
          
        }
        else{
          swal("Registro exitoso", "El usuario ha sido registrado correctamente", "success", {
            button: "Aceptar",
          });
          $location.path('/mainlistarEncargadoSucursal');
        }
        
      }
      else {
        swal("Registro fallido", "Ha ocurrido un error, intente nuevamente", "error", {
          button: "Aceptar",
        });
      }
    }
  }
})();
