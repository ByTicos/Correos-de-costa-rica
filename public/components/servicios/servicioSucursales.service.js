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

      function _addSucursal (pnuevaSucursal){
        let listaSucursal = _getSucursal();
        let respuesta = true;
        listaSucursal.push(pnuevaSucursal);

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
                let objSucursal = new Sucursal (obj.Id, obj.Nombre, obj.Provincia,obj.Canton, obj.Distrito, obj.Telefono, obj.Horario);

                listaSucursal.push(objSucursal);
            });

            
        }

        return listaSucursal;
    }
    
    let listaSucursalCompleta = [];

    listaSucursalCompleta = new Sucursal (
      [1500, 1000],
      ["Acosta", "(Administracion Central)"],
      ["San Jose","San Jose" ],
      ["Acosta", "San Jose"],
      ["San Ignacio", "Merced"],
      ["2410-0095", "2223-9766"]
      ["(Lunes a Viernes 8:00am-5:00pm)","(Lunes a Viernes de 7:30am-6:00pm)"]
      
    );



  }
})();