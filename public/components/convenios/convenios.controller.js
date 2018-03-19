(() => {
  'use strict';
  angular
    .module('correos')
    .controller('controladorConvenios', controladorConvenios);
  controladorConvenios.$inject = ['$stateParams', '$state', 'servicioEntidades']
  function controladorConvenios($stateParams, $state, servicioEntidades) {
    let vm = this;
    let objEntidad = JSON.parse($stateParams.objEntidadTemp);
    vm.nuevoConvenio = {};
    vm.listaConvenios = objEntidad.convenios;
    vm.listaEntidades = servicioEntidades.getEntidades();
    
    vm.regresar = () => {
      $state.go('entidades');
    }

    vm.registrarConvenio = (pNuevoConvenio) => {
      
      let objNuevoConvenio = new Convenio(objEntidad.nombre, vm.nuevoConvenio.tipoTramite);
      let registro = servicioEntidades.addConvenio(objNuevoConvenio);

      if (registro == true) {
        swal("Registro exitoso", "El convenio ha sido registrado correctamente", "success", {
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