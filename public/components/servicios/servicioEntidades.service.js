(() => {
  'use strict';
  angular
    .module('correos')
    .service('servicioEntidades', servicioEntidades)

  servicioEntidades.$inject = ['$log', '$http'];

  function servicioEntidades($log, $http) {

    const asyncLocalStorage = {
      setItem: function (key, value) {
        return Promise.resolve().then(() => {
          let response = true;
          localStorage.setItem(key, JSON.stringify(value));
          return response
        });
      }
    };

    let publicAPI = {
      addEntidad: _addEntidad,
      getEntidades: _getEntidades,
      addConvenio: _addConvenio
    }
    return publicAPI

    function _addEntidad(pNuevaEntidad) {
      let listaEntidades = _getEntidades();
      let respuesta = true;
      listaEntidades.push(pNuevaEntidad);

      asyncLocalStorage.setItem('entidadesLS', listaEntidades).then((response) => {
        respuesta = response;
      });

      return respuesta;
    };

    function _getEntidades() {
      let listaEntidades = [];
      let listaEntidadesLocal = JSON.parse(localStorage.getItem("entidadesLS"));
      if (listaEntidadesLocal == null) {
        listaEntidades = [];
      }
      else {
        listaEntidadesLocal.forEach(objEntidad => {
          let objEntidadTemp = new Entidad(objEntidad.nombre, objEntidad.cedulaJuridica);
          if (objEntidad.convenios != []) {
            for (let i = 0; i < objEntidad.convenios.length; i++) {
              objEntidadTemp.registrarConvenio(objEntidad.convenios[i]);
            }
          }

          listaEntidades.push(objEntidadTemp);
        });
      }
      return listaEntidades;
    };
    function _addConvenio(pConvenio) {
      let listaEntidades = _getEntidades();
      let entidad = pConvenio.nombreEntidad;
      let respuesta = true;
      listaEntidades.forEach(objEntidad => {
        if (objEntidad.nombre == entidad) {
          objEntidad.registrarConvenio(pConvenio);
        }

      });
      asyncLocalStorage.setItem('entidadesLS', listaEntidades).then((response) => {
        respuesta = response;
      });

      return respuesta;
    }

    function actualizarLocal(plistaActualizada) {
      localStorage.setItem('entidadesLS', JSON.stringify(plistaActualizada));
  }
  }
})();