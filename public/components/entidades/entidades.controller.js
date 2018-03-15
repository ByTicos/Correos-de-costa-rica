(() => {
  'use strict'
  angular
    .module('correos')
    .controller('controladorEntidades', controladorEntidades);
    
    controladorEntidades.$inject = ['$stateParams', '$state', 'servicioEntidades'];

  function controladorEntidades($stateParams, $state, servicioEntidades) {
    let vm = this;

    vm.nuevaEntidad = {};
    vm.listaEntidades = servicioEntidades.getEntidades();
    
    vm.registrarConvenio = (pEntidad) => {
      $state.go('convenio', {objEntidadTemp : JSON.stringify(pEntidad)});
    }

    vm.registrarEntidad = (pNuevaEntidad) => {

      let objNuevaEntidad = new Entidad(pNuevaEntidad.nombre, pNuevaEntidad.cedulaJuridica);

      let registro = servicioEntidades.addEntidad(objNuevaEntidad);

      if (registro == true) {
        swal("Registro exitoso", "La entidad ha sido registrado correctamente", "success", {
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