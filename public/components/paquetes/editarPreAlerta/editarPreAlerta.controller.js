(()=>{

'use strict';
angular
.module('correos')
.controller('controladorEditarPreAlerta', controladorEditarPreAlerta);

controladorEditarPreAlerta.$inject = ['$state', '$stateParams', '$location', 'servicioUsuarios'];

function controladorEditarPreAlerta($state, $stateParams, $location, servicioUsuarios) {
  let vm = this;

  vm.editarPaquete = {};

  let objPaqueteAEditar = JSON.parse($stateParams.objPaqueteTemp);
  

  let objNuevoPaquete = new Paquete(objPaqueteAEditar.tracking, objPaqueteAEditar.distribuidor, objPaqueteAEditar.precio, objPaqueteAEditar.peso, objPaqueteAEditar.tipoArticulo, objPaqueteAEditar.descripcion );

  vm.editarPaquete.tracking = objNuevoPaquete.tracking;
  vm.editarPaquete.distribuidor = objNuevoPaquete.distribuidor;
  vm.editarPaquete.precio = objNuevoPaquete.precio;
  vm.editarPaquete.peso = objNuevoPaquete.peso;
  vm.editarPaquete.tipoArticulo = objNuevoPaquete.tipoArticulo;
  vm.editarPaquete.descripcion = objNuevoPaquete.descripcion;

  vm.cambiarEstadoPaquete = (pEstado) =>{
    let listaPaquetes = servicioUsuarios.getPaquete();

    listaPaquetes.forEach(objPaquetes =>{
      if (objPaquetes.tracking == objNuevoPaquete.tracking) {
        objPaquetes.cambiarEstadoDeActividad(pEstado);
      }
      servicioUsuarios.actualizarPaquete(objPaquetes);
    });
    $state.go('paquete');
  };



 vm.editPrealerta = (pPrealerta)=>{
  let listaPaquetes = servicioUsuarios.getPaquete();

  listaPaquetes.forEach(objPaquete =>{
  if(objPaquete.traking == objNuevoPaquete.traking){
   objPaquete.tracking = pPrealerta.tracking;
   objPaquete.distribuidor = pPrealerta.distribuidor;
   objPaquete.precio = pPrealerta.precio;
   objPaquete.peso = pPrealerta.peso;
   objPaquete.tipoArticulo = pPrealerta.tipoArticulo;
   objPaquete.descripcion = pPrealerta.descripcion;

   servicioUsuarios.actualizarPaquete(objPaquete);
  }
  });
  swal("Edición exitosa", "Paquete editado correctamente", "success", {
        button: "Aceptar",
      }); 
$state.go ('paquete');

};
}

})();