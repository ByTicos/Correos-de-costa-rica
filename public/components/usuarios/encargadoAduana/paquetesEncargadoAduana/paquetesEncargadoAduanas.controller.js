(()=>{
  'use strict';
  angular
  .module('correos')
  .controller('controladorpaquetesEncargadoAduana', controladorpaquetesEncargadoAduana);
  
  controladorpaquetesEncargadoAduana.$inject = ['$state', '$stateParams', '$location', 'servicioUsuarios'];
  
  function controladorpaquetesEncargadoAduana($state, $stateParams, $location, servicioUsuarios) {
    let vm = this;
  
    vm.listaPaquetes = servicioUsuarios.getAllPaquetes();

    vm.cambiarEstadoTraslado1 = (pnuevoPaquete) => {
      
      let articulo = pnuevoPaquete.tipoArticulo;


 
      let objNuevoPaquete = new Paquete(pnuevoPaquete.usuario, pnuevoPaquete.tracking, pnuevoPaquete.distribuidor, pnuevoPaquete.precio, pnuevoPaquete.peso, pnuevoPaquete.tipoArticulo, pnuevoPaquete.descripcion);

      let listaEstados = pnuevoPaquete.listaEstados;

      listaEstados.forEach(objEstado => {
        objNuevoPaquete.addEstado(objEstado);
        
      });
     
      let fecha = new Date();
      let hora = fecha;
      let objEstado = new Estado(pnuevoPaquete.usuario, fecha,hora, 'En proceso de desalmacenaje');
      
      objNuevoPaquete.mostrarEstadoTraslado('En proceso de desalmacenaje');
      objNuevoPaquete.addEstado(objEstado);
      servicioUsuarios.actualizarEstadoPaquete(objNuevoPaquete);
      location.reload();
  
      
    }
  


    vm.cambiarEstadoTraslado2 = (pnuevoPaquete) => {
      
      let articulo = pnuevoPaquete.tipoArticulo;


 
      let objNuevoPaquete = new Paquete(pnuevoPaquete.usuario, pnuevoPaquete.tracking, pnuevoPaquete.distribuidor, pnuevoPaquete.precio, pnuevoPaquete.peso, pnuevoPaquete.tipoArticulo, pnuevoPaquete.descripcion);

      let listaEstados = pnuevoPaquete.listaEstados;

      listaEstados.forEach(objEstado => {
        objNuevoPaquete.addEstado(objEstado);
        
      });
     
      let fecha = new Date();
      let hora = fecha;
      let objEstado = new Estado(pnuevoPaquete.usuario, fecha,hora, 'En transito a centro de distribución');
      
      objNuevoPaquete.mostrarEstadoTraslado('En transito a centro de distribución');
      objNuevoPaquete.addEstado(objEstado);
      servicioUsuarios.actualizarEstadoPaquete(objNuevoPaquete);
      location.reload();
  
      
    }
     
  }
  
  })();