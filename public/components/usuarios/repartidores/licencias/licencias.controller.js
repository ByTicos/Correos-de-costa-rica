(() => {
'use strict'
angular
.module('correos')
.controller('controladorLicencias',controladorLicencias);

controladorLicencias.$inject = ['$stateParams', '$state', '$location', 'servicioUsuarios'];

function controladorLicencias($stateParams, $state, $location, servicioUsuarios)

vm.listaLicencias = listarLicencias();
  
      

// vm.editRepartidor = (pUsuario) =>{
//   $state.go('main.editarRepartidor', {objRepartidorTemp : JSON.stringify(pUsuario)});
// };


function listarLicencias(){
  let listaLicencias = servicioUsuarios.getLicencia();
  let listaRepartidores = [];
  listaUsuarios.forEach(usuario => {
    if (usuario.tipo == '3') {
      listaRepartidores.push(usuario);
    }
  });
  return listaRepartidores;
} 
});