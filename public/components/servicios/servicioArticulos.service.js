(() => {
  'use strict';
  angular.module ('correos').service ('servicioArticulos', servicioArticulos);

  servicioArticulos.$inject = ['$log', '$http', 'dataStorageFactory'];

  function servicioArticulos ($log, $http, dataStorageFactory) {
  

    let publicAPI = {
      addArticulo: _addArticulo,
      getArticulo: _getArticulo,
      listarArticulosJson: _listarArticulosJson,
      actualizarArticulo: _actualizarArticulo

    };
    return publicAPI;

    function _addArticulo (pNuevoArticulo) {
      let listaArticulos = _getArticulo (),
          registroExitoso,
          articuloRepetido = false;


       for (let i = 0; i < listaArticulos.length; i++) {
         if (pNuevoArticulo.id == listaArticulos[i].id) {

           articuloRepetido = true;
         }
       }

       if (articuloRepetido === false){
         registroExitoso = dataStorageFactory.setArticuloData(pNuevoArticulo);

       }else{
         registroExitoso = false;
         
       }
            return registroExitoso;
       
    }


    function _getArticulo() {
      let listaArticulos = [];
      let listaArticulosBD = dataStorageFactory.getArticuloData();


      if (listaArticulosBD == null) {
        listaArticulos = [];
      } else {
        listaArticulosBD.forEach (objArticulo => {
          let objArticuloTemp = new Articulo (
            objArticulo.id,
            objArticulo.producto,
            objArticulo.impuesto
            
          );

          objArticuloTemp.cambiarEstadoDeActividadArticulo (objArticulo.estado);


          listaArticulos.push (objArticuloTemp);
        });
      }
      return listaArticulos;
    }
  

  function _listarArticulosJson() {
    let listaArticulosCompleta = [];


      if(JSON.parse(localStorage.getItem('articulosLS')) == null){
            
            listaArticulosCompleta.forEach(pArticulo => {
                let objNuevoArticulo = new Articulo(pArticulo.id, pArticulo.producto, pArticulo.impuesto);
    
                _addArticulo(objNuevoArticulo);
            });
            
        }
  };

  function _actualizarArticulo(pObjEditar) {
    let listaArticulos = _getArticulo();

    for (let i = 0; i < listaArticulos.length; i++) {
      if (listaArticulos[i].id == pObjEditar.id ) {
        listaArticulos[i] = pObjEditar;

      }
    }
    actualizarArticuloLocal(listaArticulos);
  };
  function actualizarArticuloLocal (plistaActualizada) {
    localStorage.setItem ('articulosLS', JSON.stringify (plistaActualizada));
  }
  }
}) ();
