(()=>{

  'use strict';
  angular
    .module ('correos')
    .controller ('controladorEditarArticulo', controladorEditarArticulo);

  controladorEditarArticulo.$inject = ['$http','$state','$stateParams','$location','servicioArticulos' ];

  function controladorEditarArticulo ( $http, $state, $stateParams, $location, servicioArticulos ) {

  let vm = this;

  vm.edicionDeArticulo = {};

  let objArticuloAEditar = JSON.parse ($stateParams.objArticuloTemp);

  vm.objArticuloNuevo = new Articulo (objArticuloAEditar.id, objArticuloAEditar.producto, objArticuloAEditar.impuesto);

  vm.edicionDeArticulo.id = objArticuloAEditar.id;
  vm.edicionDeArticulo.producto = objArticuloAEditar.producto;
  vm.edicionDeArticulo.impuesto = objArticuloAEditar.impuesto;

  vm.editArticulo = (pArticulo) =>{
    let listaArticulos = servicioArticulos.getArticulo();

    listaArticulos.forEach(objEditar => {

      if (objEditar.id == objArticuloNuevo.id ) {
        
        vm.objEditar.id = pArticulo.id;
        vm.objEditar.producto = pArticulo.producto;
        vm.objEditar.impuesto = pArticulo.impuesto;

        servicioArticulos.actualizarArticulo(objEditar);
      }



    });

  }
  

  









  vm.editArticulo = (pNuevoArticulo)=>{

    let ArticuloTemp = new Articulo(pNuevoArticulo.id, pNuevoArticulo.producto,pNuevoArticulo.impuesto);

    servicioArticulos.addArticulo(ArticuloTemp);

  }

  }



  

})();