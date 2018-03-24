(() => {
  'use strict'
  angular
    .module('correos')
    .controller('controladorRepartidores', controladorRepartidores);
    
    controladorRepartidores.$inject = ['$state', '$stateParams', '$location', 'servicioUsuarios'];

  function controladorRepartidores($state, $stateParams, $location, servicioUsuarios) {
    let vm = this;

    vm.listaRepartidores = listarRepartidores();
    vm.nuevoRepartidor = {};
    // vm.agregarLicencias = agregarLicencia();
    // vm.listaLicencias = listarLicencia();
    
    vm.editRepartidor = (pUsuario) =>{
      $state.go('editarRepartidor', {objRepartidorTemp : JSON.stringify(pUsuario)});
    };

    
    
    vm.registrarRepartidor = (pNuevoUsuario) => {
      

      let objLicencia = new Licencia(pNuevoUsuario.numLicencia,
        pNuevoUsuario.tipoLicencia, pNuevoUsuario.vencimientoLicencia)

         let licencias = [];
         licencias.push(objLicencia);
        


      

      let objNuevoRepartidor = new Usuario(pNuevoUsuario.cedula, pNuevoUsuario.foto, pNuevoUsuario.primerNombre, pNuevoUsuario.segundoNombre, pNuevoUsuario.primerApellido, pNuevoUsuario.segundoApellido, pNuevoUsuario.correo, pNuevoUsuario.telefono, pNuevoUsuario.fechaNacimiento, pNuevoUsuario.provincia, pNuevoUsuario.canton, pNuevoUsuario.distrito, pNuevoUsuario.direccionExacta, 'repartidor', pNuevoUsuario.sucursalAsignada, ' ',pNuevoUsuario.vehiculo, licencias);


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
    function listarRepartidores(){
      let listaUsuarios = servicioUsuarios.getUsuarios();
      let listaRepartidores = [];
      listaUsuarios.forEach(usuario => {
        if (usuario.tipo == 'repartidor') {
          listaRepartidores.push(usuario);
        }
      });
      return listaRepartidores;
    }


  }
})();


