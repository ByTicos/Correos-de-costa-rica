(() => {
  'use strict';
  angular
    .module('correos')
    .controller('controladorLogin', controladorLogin);

  controladorLogin.$inject = ['$location', 'servicioLogin', 'servicioUsuarios'];

  function controladorLogin($location, servicioLogin, servicioUsuarios) {
    let vm = this;
    vm.listaUsuarios = servicioUsuarios.getUsuarios();
    vm.usuario = {};

    // var md5 = require('md5');
 
// console.log(md5('message'));


    vm.inicarSesion = (pCredenciales) => {
      let inicioCorrecto = servicioLogin.inicioSesion(pCredenciales);

      if (inicioCorrecto == true) {
        // swal("Datos correctos", "Sesion iniciada correctamente", "success");
          $location.path('main/dashboard');
      }
      else {
        swal("Datos erroneos", "Intente nuevamente", "error");
      }
    }
  }
})();