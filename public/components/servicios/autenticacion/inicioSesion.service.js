(() => {
  'use strict';
  angular
  .module('correos')
  .service('servicioLogin', servicioLogin);

  servicioLogin.$inject = ['$log', '$http', 'servicioUsuarios', 'servicioSesion'];

  function servicioLogin($log, $http, servicioUsuarios, servicioSesion){

    let publicAPI = {
      inicioSesion : _inicioSesion
    }
    return publicAPI
    
    function _inicioSesion(pCredenciales) {
      
      let listaUsuarios = servicioUsuarios.getUsuarios();
      let incioExitoso = false;

      for(let i = 0; i<listaUsuarios.length; i++){
        if(listaUsuarios[i].primerNombre == pCredenciales.primerNombre){
          servicioSesion.crear(
            {
              nombre: listaUsuarios[i].primerNombre,
              cedula: listaUsuarios[i].cedula
            }
          );
          incioExitoso = true;
        }
      }

      return incioExitoso;
    }
  }

})();