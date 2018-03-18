(() => {
  'use strict';
  angular
      .module('correos')
      .service('servicioSucursales', servicioSucursales)

  servicioSucursales.$inject = ['$log', '$http'];

  function servicioSucursales($log, $http) {

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
        addSucursal: _addSucursal,
        getSucursal: _getSucursal
            }
    return publicAPI

      function _addSucursal (pNuevaSucursal){
        let listaSucursal = _getSucursal();
        let respuesta = true;
        listaSucursal.push(pNuevaSucursal);

        asyncLocalStorage.setItem('sucursalLS', listaSucursal).then((response) =>{
            respuesta = response;
        });

        return respuesta;
    };

    function _getSucursal(){
        let listaSucursal = [];
        let listaSucursalLocal = JSON.parse(localStorage.getItem("sucursalLS"));

        if(listaSucursalLocal == null){
            listaSucursal = [];
        }else{
            listaSucursalLocal.forEach(obj => {
                let objSucursal = new Sucursal (obj.Id, obj.nombre, obj.provincia,obj.canton, obj.distrito, obj.telefono, obj.horario);

                listaSucursal.push(objSucursal);
            });

            
        }

        return listaSucursal;
    }
    
    let listaSucursalCompleta = [];

    listaSucursalCompleta = new Sucursal (
      [1234, 1234],
      [],
      [],
      [],
      [],
      [],
      []
      
    );



  }
})();