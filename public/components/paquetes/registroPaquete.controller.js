(() =>{

  'use strict';
  angular
  .module('correos')
  .controller('controladorPaquetes', controladorPaquetes);

  controladorPaquetes.$inject = ['$stateParams', '$state','$location', 'servicioUsuarios'];

  function controladorPaquetes($stateParams, $state,$location, servicioUsuarios){
   let vm = this;
   vm.nuevoPaquete = {};
   
   vm.listaPaquetes = listarPaquetes();

   listarPaquetes();

   vm.editPrealerta = (pPaquete)=>{
   $state.go('editarPaquete', {objPaqueteTemp : JSON.stringify(pPaquete)});
   };

   vm.registrarPaquete = (pnuevoPaquete) => {

     let objNuevoPaquete = new Paquete(pnuevoPaquete.tracking, pnuevoPaquete.distribuidor, pnuevoPaquete.precio, pnuevoPaquete.peso, pnuevoPaquete.tipoArticulo, pnuevoPaquete.descripcion );

     //console.log(objNuevoPaquete);
     
     let registro = servicioUsuarios.addPaquete(objNuevoPaquete);

     if (registro == true) {
        swal("Registro exitoso", "El paquete ha sido registrado correctamente", "success", {
          button: "Aceptar",
        });

      }
      else {
        swal("Registro fallido", "Ha ocurrido un error, intente nuevamente", "error", {
          button: "Aceptar",
        });
      }
      
     vm.nuevoPaquete = null;
     listarPaquetes ();
     
   }

    function listarPaquetes() {
      let listaPaquetes = servicioUsuarios.getPaquete();
      return listaPaquetes;
    }



  }

})();