(()=>{

  'use strict';
angular
.module('correos')
.controller('controladorListaEstadosCliente', controladorListaEstadosCliente);

controladorListaEstadosCliente.$inject = ['$http','$state', '$stateParams', '$location', 'servicioUsuarios'];

function controladorListaEstadosCliente($http,$state, $stateParams, $location, servicioUsuarios){
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
   };
};
})();