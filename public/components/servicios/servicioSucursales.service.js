(() => {
  'use strict';
  angular
      .module('correos')
      .service('servicioSucursales', servicioSucursales)

  servicioSucursales.$inject = ['$log', '$http'];

  function servicioSucursales($log, $http) {


      let publicAPI = {
        addSucursal: _addSucursal,
        getSucursal: _getSucursal,
        actualizarSucursal: _actualizarSucursal,
        listarSucursalesJson : _listarSucursalesJson,
        actualizarSucursalLocal: _actualizarSucursalLocal
            }
    return publicAPI
    
    // listarSucursales();
            
    function _addSucursal (pnuevaSucursal){
        
        let listaSucursal = _getSucursal();
        console.log('pnuevaSucursal', pnuevaSucursal);
        listaSucursal.push(pnuevaSucursal);

      localStorage.setItem('sucursalLS', JSON.stringify(listaSucursal));
            console.log('push');
         
        }

    function _getSucursal(){
        let listaSucursal = [];
        let listaSucursalLocal = JSON.parse(localStorage.getItem("sucursalLS"));
        console.log('listaactual', listaSucursalLocal);

        if(listaSucursalLocal == null){
            listaSucursal = [];
        }else{
            listaSucursalLocal.forEach(obj => {
                let objSucursal = new Sucursal (obj.id, obj.nombre, obj.provincia, obj.canton, obj.distrito, obj.telefono, obj.horario);

                listaSucursal.push(objSucursal);
            });

            
        }
        console.log(listaSucursal);
        return listaSucursal;
        
    };
    

    function _listarSucursalesJson(){

        let listaSucursalCompleta = [
            {
                id : 1500,
                nombre : 'Acosta',
                provincia : 'San Jose',
                canton : 'Acosta',
                distrito : 'San Ignacio',
                telefono : '2410-0095',
                horario : 'Lunes a Viernes 8:00am-5:00pm'
    
            },

            {
                id : 1000,
                nombre : 'Administracion Central',
                provincia : 'San Jose',
                canton : 'San Jose',
                distrito : 'Merced',
                telefono : '2223-9766',
                horario : 'Lunes a Viernes de 7:30am-6:00pm'
    
            }
        ];
        
        if(JSON.parse(localStorage.getItem("sucursalLS")) == null){
            
            listaSucursalCompleta.forEach(pSucursal => {
                let objNuevaSucursal = new Sucursal (pSucursal.id, pSucursal.nombre, pSucursal.provincia,pSucursal.canton, pSucursal.distrito, pSucursal.telefono, pSucursal.horario);
    
                _addSucursal(objNuevaSucursal);
            });
            
        }
    };
    // listaSucursalCompleta = new Sucursal (
    //   [1500, 1000],
    //   ["Acosta", "(Administracion Central)"],
    //   ["San Jose","San Jose" ],
    //   ["Acosta", "San Jose"],
    //   ["San Ignacio", "Merced"],
    //   ["2410-0095", "2223-9766"]
    //   ["(Lunes a Viernes 8:00am-5:00pm)","(Lunes a Viernes de 7:30am-6:00pm)"]
      
    // );

    function _actualizarSucursal(pSucursal) {
        let listaSucursal = _getSucursal();

        for (let i = 0; i < listaSucursal.length; i++) {
            if (pSucursal.id == listaSucursal[i].id) {
                listaSucursal[i] = pSucursal;
            }
        }
        actualizarSucursalLocal(listaSucursal);
    };

    function _actualizarSucursalLocal(plistaActualizadaSucursal) {
        
        localStorage.setItem('sucursalLS', JSON.stringify(plistaActualizadaSucursal));
    }

  }
})();