(()=>{
  'use strict';
  angular
  .module('correos')
  .controller('controladorListarTarjetas', controladorListarTarjetas);
  controladorListarTarjetas.$inject = ['$state','$stateParams','$location','servicioUsuarios'];

      function controladorListarTarjetas($state, $stateParams, $location, servicioUsuarios) {
        let vm = this;

    
         vm.listaTarjeta = servicioUsuarios.getTarjeta();
         console.log('servicioUsuarios.getTarjeta()', servicioUsuarios.getTarjeta());

         vm.editTarjeta = (pTarjeta) => {
           $state.go('main.editarTarjetas', {objTarjetaTemp: JSON.stringify(pTarjeta)});
         };
         

        
      }

    
 })();

