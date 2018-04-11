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
        if (listaEntidades[i].cedulaJuridica == pNuevaEntidad.cedulaJuridica || listaEntidades[i].nombre == pNuevaEntidad.nombre) {
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
      let listaEntidadesBD = dataStorageFactory.getEntidadesData();
      listaEntidadesBD.forEach(objEntidad => {
        let objEntidadTemp = new Entidad(objEntidad.nombre, objEntidad.cedulaJuridica);
        objEntidadTemp.convenios = objEntidad.convenios;
        listaEntidades.push(objEntidadTemp);

      });

      return listaEntidades;

    };

    function _addConvenio(pConvenio) {
      let listaConvenios = _getConvenios();
      let listaEntidades = _getEntidades();
      let registroExitoso;
      let convenioRepetido = false;

      for (let i = 0; i < listaConvenios.length; i++) {
        if (listaConvenios[i].tipoTramite == pConvenio.tipoTramite) {
          convenioRepetido = true;
        }
      }
      if (convenioRepetido === false) {
        for (let i = 0; i < listaEntidades.length; i++) {
          if (listaEntidades[i].nombre == pConvenio.nombreEntidad) {
            listaEntidades[i].registrarConvenio(pConvenio.tipoTramite);
           
          }
        }
      registroExitoso = dataStorageFactory.setConvenioData(pConvenio);
      } else {
        registroExitoso = false;
      }

      return registroExitoso;
    };

    function _getConvenios() {
      let listaConvenios = [];
      let listaConveniosBD = dataStorageFactory.getConveniosData();
      listaConveniosBD.forEach(objConvenio => {
        let objConvenioTemp = new Convenio(objConvenio.nombreEntidad, objConvenio.tipoTramite);

        listaConvenios.push(objConvenioTemp);

      });

      return listaConvenios;

    };

    function actualizarLocal(plistaActualizada) {
      localStorage.setItem('entidadesLS', JSON.stringify(plistaActualizada));
    }
  }
})();