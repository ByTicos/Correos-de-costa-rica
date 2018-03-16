(()=>{

'use strict';
angular
.module('correos')
.controller('controladorEditarPaquetes', controladorEditarPaquetes);

controladorEditarPaquetes.$inject = ['$stateParams', '$state', '$location', 'servicioUsuarios'];

function controladorEditarPaquetes($stateParams, $state, $location, servicioUsuarios) {
  let vm = this;

  vm.editarPaquete = {};

  let objPaqueteAEditar = JSON.parse ($stateParams.objPaqueteTemp);
  

  let objNuevoPaquete = new Paquete(objPaqueteAEditar.traking, objPaqueteAEditar.distribuidor, objPaqueteAEditar.precio, objPaqueteAEditar.peso, objPaqueteAEditar.tipoArticulo, objPaqueteAEditar.descripcion );

  vm.editarPaquete.traking = objNuevoPaquete.traking;
  vm.editarPaquete.distribuidor = objNuevoPaquete.distribuidor;
  vm.editarPaquete.precio = objNuevoPaquete.precio;
  vm.editarPaquete.peso = objNuevoPaquete.peso;
  vm.editarPaquete.tipoArticulo = objNuevoPaquete.tipoArticulo;
  vm.editarPaquete.descripcion = objNuevoPaquete.descripcion;
  
 vm.editPrealerta = (pPrealerta)=>{
  let listaPaquetes = servicioUsuarios.getPaquete();

  listaPaquetes.forEach(objPaquete =>{
  if(objPaquete.traking == objNuevoPaquete.traking){
   objPaquete.traking = pPrealerta.traking;
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