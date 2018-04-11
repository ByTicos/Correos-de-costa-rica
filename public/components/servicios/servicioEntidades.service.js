(() => {
  'use strict';
  angular
    .module('correos')
    .service('servicioEntidades', servicioEntidades)

  servicioEntidades.$inject = ['$log', '$http', 'dataStorageFactory'];

  function servicioEntidades($log, $http, dataStorageFactory) {

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
      addConvenio: _addConvenio,
      getConvenios: _getConvenios
    }
    return publicAPI

    function _addEntidad(pNuevaEntidad) {
      let listaEntidades = _getEntidades();
      let registroExitoso;
      let entidadRepetida = false;

      for (let i = 0; i < listaEntidades.length; i++) {
        if (listaEntidades[i].cedulaJuridica == pNuevaEntidad.cedulaJuridica) {
            entidadRepetida = true;
        }
      }
      if (entidadRepetida === false) {
          registroExitoso = dataStorageFactory.setEntidadData(pNuevaEntidad);
      } else {
          registroExitoso = false;
      }

      return registroExitoso;
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
      let respuesta = true;
      for(let i=0; i< listaEntidades.length;i++){
        if (listaEntidades[i].nombre == pConvenio.nombreEntidad) {
          listaEntidades[i].registrarConvenio(pConvenio);
        }
      }
      actualizarLocal(listaEntidades);
      return respuesta;

    }

    function _getConvenios() {
      let listaEntidadesLocal = JSON.parse(localStorage.getItem("entidadesLS"));
      let listaConvenios = [];
      if (listaEntidadesLocal == null) {
        listaConvenios = [];
      }
      else {
        listaEntidadesLocal.forEach(objEntidad => {
          if (objEntidad.convenios != null) {
            for (let i = 0; i < objEntidad.convenios.length; i++) {
              listaConvenios.push(objEntidad.convenios[i]);
            }
          }
        });
      }
      return listaConvenios;
    };

    function actualizarLocal(plistaActualizada) {
      localStorage.setItem('entidadesLS', JSON.stringify(plistaActualizada));
    }
  }
})();