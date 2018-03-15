(() =>{

  'use strict';
  angular
  .module('correos')
  .controller('controladorPaquetes', controladorPaquetes);

  controladorPaquetes.$inject = ['$stateParams', '$state','$location', 'servicioUsuarios'];

  function controladorPaquetes($stateParams, $state,$location, servicioUsuarios){
   let vm = this;

  vm.listaPaquetes = listarPaquetes();
   vm.nuevoPaquete = {};

   listarPaquetes ();



   vm.registrarPaquete = (pnuevoPaquete) => {

     let objNuevoPaquete = new Paquete(pnuevoPaquete.traking, pnuevoPaquete.distribuidor, pnuevoPaquete.precio, pnuevoPaquete.peso, pnuevoPaquete.tipoArticulo, pnuevoPaquete.descripcion );

     console.log(objNuevoPaquete);
     
     servicioUsuarios.addPaquete(objNuevoPaquete);

     vm.nuevoPaquete = null;

     listarPaquetes();

   
   }

    function listarPaquetes () {
      vm.listaPaquetes = servicioUsuarios.getPaquete();
    }



  }

})();