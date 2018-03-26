(() => {
  'use strict'
  angular
    .module('correos')
    .controller('controladorRepartidores', controladorRepartidores);
    
    controladorRepartidores.$inject = ['$stateParams','$state', '$location', 'servicioUsuarios', 'servicioSucursales'];

  function controladorRepartidores($stateParams,$state, $location, servicioUsuarios, servicioSucursales) {
    let vm = this;

    // vm.listaRepartidores = listarRepartidores();
    vm.nuevoRepartidor = {};
    servicioSucursales.listarSucursalesJson();
    vm.listaSucursales = servicioSucursales.getSucursal();
    
    
    // vm.editRepartidor = (pUsuario) =>{
    //   $state.go('main.editarRepartidor', {objRepartidorTemp : JSON.stringify(pUsuario)});
    // };

    vm.listaRepartidor=() => {
      $state.go('main.listarRepartidores')
    }
    
    
    vm.registrarRepartidor = (pNuevoUsuario) => {
      

      let objLicencia = new Licencia(pNuevoUsuario.numLicencia,
        pNuevoUsuario.tipoLicencia, pNuevoUsuario.vencimientoLicencia)

         let licencias = [];
         licencias.push(objLicencia);
        


      

      let objNuevoRepartidor = new Usuario(pNuevoUsuario.cedula, pNuevoUsuario.foto, pNuevoUsuario.primerNombre, pNuevoUsuario.segundoNombre, pNuevoUsuario.primerApellido, pNuevoUsuario.segundoApellido, pNuevoUsuario.correo, pNuevoUsuario.telefono, pNuevoUsuario.fechaNacimiento, pNuevoUsuario.provincia, pNuevoUsuario.canton, pNuevoUsuario.distrito, pNuevoUsuario.direccionExacta, '3', pNuevoUsuario.sucursalAsignada, ' ',pNuevoUsuario.vehiculo, licencias);


      let registro = servicioUsuarios.addUsuario(objNuevoRepartidor);



      if (registro == true) {
        swal("Registro exitoso", "El repartidor se registró correctamente", "success", {
          button: "Aceptar",
        });
        /*$location.path('/logIn');*/
      }
      else {
        swal("Registro fallido", "Inténtelo nuevamente", "error", {
          button: "Aceptar",
        });
      }
    }
    

  }
})();


