(() => {
    'use strict';
    angular
      .module('correos')
      .controller('controladorTarjetas', controladorTarjetas);
  
      controladorTarjetas.$inject = ['$state','$scope','servicioUsuarios']
  
    function controladorTarjetas($state, $scope,servicioUsuarios) {
      let vm = this;

        vm.nuevaTarjeta = {};
        
        getRandom();
        console.log(getRandom());
        vm.registrarTarjeta = (pnuevaTarjeta) => {

          let mes = $( "#month option:selected" ).val();
          let year = $( "#year option:selected" ).val();
          let expiracion = mes + '/' + year;  

          let objnuevaTarjeta = new Tarjeta(getRandom(), pnuevaTarjeta.nombre, pnuevaTarjeta.numero, expiracion, pnuevaTarjeta.cvv);

          servicioUsuarios.addTarjeta(objnuevaTarjeta);

          swal("Registro exitoso", "Tarjeta registrada con exito", "success", {
            button: "Aceptar",
          });

          
          vm.nuevaTarjeta = null;
          listarTarjetas();
          
        }

        function listarTarjetas() {
          vm.listarTarjetas = servicioUsuarios.getTarjeta();
        }

        // Funcion de validacion de tarjeta
    
        let mes = $( "#month option:selected" ).val();
        let year = $( "#year option:selected" ).val();
        let expiracion = mes + '/' + year;


        console.log(mes);
        console.log(year);
        console.log(expiracion);

        function listarExpiracion(mes, year){
            let expiracion = '';

            expiracion = mes + ' / ' + year;

            return expiracion;
        };

        function getRandom(){
          let randomID = (
        document.getElementById('field1').value = Math.floor(Math.random() * 100000));

        return randomID;
        console.log('randomID', randomID);
        }
      

      


    }
})();