(() => {
  'use strict'
  angular
    .module('correos')
    .controller('controladorListaArticulo', controladorListaArticulo);
    
    controladorListaArticulo.$inject = ['$http', '$state','$scope', '$location','$stateParams', 'servicioArticulos']

      function controladorListaArticulo($http, $state, $scope, $location,$stateParams, servicioArticulos) {
        let vm = this;

        vm.editArticulo = (pArticulo)=>{
        $state.go('editarArticulo', {objArticuloTemp : JSON.stringify(pArticulo)});
        };
        
        servicioArticulos.listarArticulosJson();
        listarArticulo();
        
        
    
         vm.listaArticulos = listarArticulo();

        function listarArticulo(){
        let listaArticulos = servicioArticulos.getArticulo();

        return listaArticulos;
      }

    }
 })();