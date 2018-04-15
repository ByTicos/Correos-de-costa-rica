(() => {
  'use strict';
  angular
    .module('correos')
    .factory('dataStorageFactory', dataStorageFactory);

  dataStorageFactory.$inject = ['$q', '$log', '$http'];

  function dataStorageFactory($q, $log, $http) {

    const localAPI = {
      getUsersData: _getUsersData,
      setUserData: _setUserData,
      updateUserData: _updateUserData,
      setEntidadData: _setEntidadData,
      getEntidadesData:_getEntidadesData,
      setSession: _setSession,
      closeSession: _closeSession,
      getSession: _getSession,
      getArticuloData: _getArticuloData,
      setArticuloData: _setArticuloData,
      getConveniosData:_getConveniosData,
      setConvenioData:_setConvenioData,
      getTarjetasData: _getTarjetasData,
      setTarjetasData:_setTarjetasData,
      sendMail: _sendMail,
      buscarEntidadPorId:_buscarEntidadPorId,
      agregarConvenio:_agregarConvenio
    };
    return localAPI;

    /**
     * Funcion que obtiene los datos de los usuarios del back end y los retorna
     */
    function _getUsersData() {
      let listaUsuarios = [];

      let peticion = $.ajax({
        url: 'http://localhost:4000/api/get_all_users',
        type: 'get',
        contentType: 'application/x-www-form-urlencoded; charset=utf-8',
        dataType: 'json',
        async: false,
        data: {}
      });

      peticion.done((usuarios) => {
        console.log('Datos que vienen desde la base de datos')
        console.log(usuarios);
        listaUsuarios = usuarios;
      });
      peticion.fail(() => {
        listaUsuarios = [];
        console.log('Ocurrió un error');
      });

      return listaUsuarios;
    }

    function _setUserData(data) {
      let response;

      let peticion = $.ajax({
        url: 'http://localhost:4000/api/save_user',
        type: 'post',
        contentType: 'application/x-www-form-urlencoded; charset=utf-8',
        dataType: 'json',
        async: false,
        data: {
          'cedula': data.cedula,
          'foto': data.foto,
          'primerNombre': data.primerNombre,
          'segundoNombre': data.segundoNombre,
          'primerApellido': data.primerApellido,
          'segundoApellido': data.segundoApellido,
          'correo': data.correo,
          'telefono':data.telefono,
          'fechaNacimiento': data.fechaNacimiento,
          'provincia': data.provincia,
          'canton': data.canton,
          'distrito': data.distrito,
          'direccionExacta': data.direccionExacta,
          'tipo': data.tipo,
          'listaPaquetes': data.listaPaquetes,
          'sucursalAsignada': data.sucursalAsignada,
          'puesto': data.puesto,
          'vehiculo': data.vehiculo,
          'listaLicencias': data.listaLicencias,
          'estado': data.estado,
          'listaTarjetas': data.listaTarjetas,
          'listaPaquetesConvenios': data.listaPaquetesConvenios,
          'contrasenna': data.contrasenna,
        }
      });

      peticion.done((datos) => {
        response = datos.msj;
        console.log('Petición realizada con éxito');
      });
      peticion.fail((error) => {
        response = error;
        console.log('Ocurrió un error');
      });

      return response;
    }

    function _updateUserData(data) {
      let response;

      let peticion = $.ajax({
        url: 'http://localhost:4000/api/update_user',
        type: 'put',
        contentType: 'application/x-www-form-urlencoded; charset=utf-8',
        dataType: 'json',
        async: false,
        data: {
          'cedula': data.cedula,
          'foto': data.foto,
          'primerNombre': data.primerNombre,
          'segundoNombre': data.segundoNombre,
          'primerApellido': data.primerApellido,
          'segundoApellido': data.segundoApellido,
          'correo': data.correo,
          'telefono':data.telefono,
          'fechaNacimiento': data.fechaNacimiento,
          'provincia': data.provincia,
          'canton': data.canton,
          'distrito': data.distrito,
          'direccionExacta': data.direccionExacta,
          'tipo': data.tipo,
          'listaPaquetes': data.listaPaquetes,
          'sucursalAsignada': data.sucursalAsignada,
          'puesto': data.puesto,
          'vehiculo': data.vehiculo,
          'listaLicencias': data.listaLicencias,
          'estado': data.estado,
          'listaTarjetas': data.listaTarjetas,
          'listaPaquetesConvenios': data.listaPaquetesConvenios,
          'contrasenna': data.contrasenna,
        }
      });

      peticion.done((datos) => {
        response = datos.msj;
        console.log('Petición realizada con éxito');
      });
      peticion.fail((error) => {
        response = error;
        console.log('Ocurrió un error');
      });

      return response;
    }
    
    function _getEntidadesData() {
      let listaEntidades = [];

      let peticion = $.ajax({
        url: 'http://localhost:4000/api/get_all_entidades',
        type: 'get',
        contentType: 'application/x-www-form-urlencoded; charset=utf-8',
        dataType: 'json',
        async: false,
        data: {}
      });

      peticion.done((entidades) => {
        console.log('Datos que vienen desde la base de datos')
        console.log(entidades);
        listaEntidades = entidades;
      });
      peticion.fail(() => {
        listaEntidades = [];
        console.log('Ocurrió un error');
      });

      return listaEntidades;
    }

    function _getConveniosData() {
      let listaConvenios = [];

      let peticion = $.ajax({
        url: 'http://localhost:4000/api/get_all_convenios',
        type: 'get',
        contentType: 'application/x-www-form-urlencoded; charset=utf-8',
        dataType: 'json',
        async: false,
        data: {}
      });

      peticion.done((convenios) => {
        console.log('Datos que vienen desde la base de datos')
        console.log(convenios);
        listaConvenios = convenios;
      });
      peticion.fail(() => {
        listaConvenios = [];
        console.log('Ocurrió un error');
      });

      return listaConvenios;
    }

    function _setEntidadData(data) {
      let response;

      let peticion = $.ajax({
        url: 'http://localhost:4000/api/save_entidad',
        type: 'post',
        contentType: 'application/x-www-form-urlencoded; charset=utf-8',
        dataType: 'json',
        async: false,
        data: {
          'nombre': data.nombre,
          'cedulaJuridica': data.cedulaJuridica,
          'convenios': data.convenios,
        }
      });

      peticion.done((datos) => {
        response = datos.msj;
        console.log('Petición realizada con éxito');
      });
      peticion.fail((error) => {
        response = error;
        console.log('Ocurrió un error');
      });

      return response;
    }

    function _setConvenioData(data) {
      let response;

      let peticion = $.ajax({
        url: 'http://localhost:4000/api/save_convenio',
        type: 'post',
        contentType: 'application/x-www-form-urlencoded; charset=utf-8',
        dataType: 'json',
        async: false,
        data: {
          'nombreEntidad': data.nombreEntidad,
          'tipoTramite': data.tipoTramite,
        }
      });

      peticion.done((datos) => {
        response = datos.msj;
        console.log('Petición realizada con éxito');
      });
      peticion.fail((error) => {
        response = error;
        console.log('Ocurrió un error');
      });

      return response;
    }

    function _agregarConvenio(pId, pConvenio){
      let peticion = $.ajax({
          url: 'http://localhost:4000/api/agregar_convenio',
          type: 'post',
          contentType: 'application/x-www-form-urlencoded; charset=utf-8',
          dataType : 'json',
          async:false,
        data: {
          '_id': pId,
          'tipoTramite': pConvenio.tipoTramite,
        }
        });
      
        peticion.done(function(response){
          
        });
      
        peticion.fail(function(){
         
        });
  }

  function _buscarEntidadPorId(pid){
    let entidad = [];
    let peticion = $.ajax({
        url: 'http://localhost:4000/api/buscar_entidad_id',
        type: 'post',
        contentType: 'application/x-www-form-urlencoded; charset=utf-8',
        dataType : 'json',
        async:false,
        data:{
            'id' : pid
        }
      });
    
      peticion.done(function(response){
        entidad = response;
      });
    
      peticion.fail(function(){
       
      });

    return entidad;
}

    function _sendMail(data) {
      let response;

      let peticion = $.ajax({
        url: 'http://localhost:4000/api/mail',
        type: 'post',
        contentType: 'application/x-www-form-urlencoded; charset=utf-8',
        dataType: 'json',
        async: false,
        data: {
          'correo': data.correo,
          'contrasenna': data.contrasenna,
        }
      });

      peticion.done((datos) => {
        response = datos.success;
        console.log('Petición realizada con éxito');
      });
      peticion.fail((error) => {
        response = error;
        console.log('Ocurrió un error');
      });

      return response;
    }

    /**
     * Función que almacena las credenciales dentro del session Storage
     * @param {Credenciales} value 
     */
    function _setSession(value) {
      let response = true;
      sessionStorage.setItem('session', JSON.stringify(value));
      return response;
    }

    /**
     * Función que elimina los datos de la sesión activa
     */
    function _closeSession() {
      let response = true;
      sessionStorage.removeItem('session');
      return response;
    };

    /**
     * Función que retorna los datos almacenados dentro del sessionStorage
     */
    function _getSession() {
      let sessionActive = JSON.parse(sessionStorage.getItem('session'));

      return sessionActive;
    }

     function _getArticuloData() {
      let listaArticulos = [];

      let peticion = $.ajax({
        url: 'http://localhost:4000/api/get_all_articulos',
        type: 'get',
        contentType: 'application/x-www-form-urlencoded; charset=utf-8',
        dataType: 'json',
        async: false,
        data: {}
      });

      peticion.done((articulos) => {
        console.log('Datos que vienen desde la base de datos')
        console.log(articulos);
        listaArticulos = articulos;
      });
      peticion.fail(() => {
        listaArticulos = [];
        console.log('Ocurrió un error');
      });

      return listaArticulos;
    }

    function _setArticuloData(data) {
      let response;

      let peticion = $.ajax({
        url: 'http://localhost:4000/api/save_articulo',
        type: 'post',
        contentType: 'application/x-www-form-urlencoded; charset=utf-8',
        dataType: 'json',
        async: false,
        data: {
          'id': data.id,
          'producto': data.producto,
          'impuesto': data.impuesto,
          'estado': data.estado
          
        }
      });

  }

  function _getTarjetasData() {
    let listaTarjetas = [];

    let peticion = $.ajax({
      url: 'http://localhost:4000/api/get_all_tarjetas',
      type: 'get',
      contentType: 'application/x-www-form-urlencoded; charset=utf-8',
      dataType: 'json',
      async: false,
      data: {}
    });

    peticion.done((tarjetas) => {
      console.log('Datos que vienen desde la base de datos')
      console.log(tarjetas);
      listaTarjetas = tarjetas;
    });
    peticion.fail(() => {
      listaTarjetas = [];
      console.log('Ocurrió un error');
    });

    return listaTarjetas;
  }

  function _setTarjetasData(data) {
    let response;

    let peticion = $.ajax({
      url: 'http://localhost:4000/api/save_tarjetas',
      type: 'post',
      contentType: 'application/x-www-form-urlencoded; charset=utf-8',
      dataType: 'json',
      async: false,
      data: {
        'id': data.id,
        'nombre': data.nombre,
        'numero': data.numero,
        'expiracion': data.expiracion,
        'cvv': data.cvv,
        'estado': data.estado,

      }
    });

    peticion.done((datos) => {
      response = datos.msj;
      console.log('Petición realizada con éxito');
    });
    peticion.fail((error) => {
      response = error;
      console.log('Ocurrió un error');
    });

    return response;
  }
 }
})();