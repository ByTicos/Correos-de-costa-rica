(() =>{

  'use strict';
  angular
  .module('correos')
  .controller('controladorPreAlerta', controladorPreAlerta);

  controladorPreAlerta.$inject = ['$state', '$stateParams','$location', 'servicioUsuarios'];
  function controladorPreAlerta($state, $stateParams,$location, servicioUsuarios){
   let vm = this;
   vm.nuevoPaquete = {};
   

   vm.listaPreAlerta = ()=>{
     $state.go('listaPreAlerta');
   }
   

   vm.registrarPaquete = (pnuevoPaquete) => {
     let session = JSON.parse(sessionStorage.getItem('sesion'));
     let usuario = session.nombre;
     

     let objNuevoPaquete = new Paquete(usuario, pnuevoPaquete.tracking, pnuevoPaquete.distribuidor, pnuevoPaquete.precio, pnuevoPaquete.peso, pnuevoPaquete.tipoArticulo, pnuevoPaquete.descripcion );
    
     
     
     let fecha = new Date();
     let hora = fecha;
     let objEstado = new Estado(usuario, fecha,hora, 'En tránsito a aduana');
     
     objNuevoPaquete.mostrarEstadoTraslado('En tránsito a aduana');
     objNuevoPaquete.addEstado(objEstado);
     

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
     
   }

    



  }

})();
