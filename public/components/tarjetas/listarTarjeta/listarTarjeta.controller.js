(()=>{
  'use strict';
  angular
  .module('correos')
  .controller('controladorListarTarjetas', controladorListarTarjetas);
  controladorListarTarjetas.$inject = ['$state','$stateParams','$location','servicioUsuarios'];

      function controladorListarTarjetas($state, $stateParams, $location, servicioUsuarios) {
        let vm = this;

    
         vm.listaTarjeta = ListarTarjetas();

        function ListarTarjetas() {
          // let usuarios = servicioUsuarios.getUsuarios();
          let usuariosDB = servicioUsuarios.getUsuarios();
          let usuarioSession = JSON.parse(sessionStorage.getItem('sesion'));
          let tarjetasDB = servicioUsuarios.getTarjeta();
          let listaTarjeta = [];
          
          for (let i = 0; i < usuariosDB.length; i++) {
            if (usuariosDB[i].correo == usuarioSession.correo) {
              for (let j = 0; j < tarjetasDB.length; j++) {
                if (tarjetasDB[j].id == usuariosDB[i].listaTarjetas.id){
                  
                  listaTarjeta.push(tarjetasDB[j]);
                }
              }
            }



          }
          return listaTarjeta;

        }



        
      }

    
 })();

