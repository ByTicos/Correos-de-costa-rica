(()=>{
'use strict';
angular
.module('correos')
.controller('controladorListaPaquetes', controladorListaPaquetes);

controladorListaPaquetes.$inject = ['$state', '$stateParams', '$location', 'servicioUsuarios'];

function controladorListaPaquetes($state, $stateParams, $location, servicioUsuarios) {
  let vm = this;

  vm.listaEstados = listarEstados();

   function listarEstados() {
     let listaPaquetes = servicioUsuarios.getPaquete();
     let listaEstadostemp = [];

     for (let i = 0; i < listaPaquetes.length; i++) {
       let listaEstados = listaPaquetes[i].listaEstados;
       listaEstadostemp = listaEstados;
     }
     return listaEstadostemp;
   }
}

})();