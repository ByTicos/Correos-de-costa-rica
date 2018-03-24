(() => {
    'use strict';
    angular
      .module('correos')
      .controller('controladorTarjetas', controladorTarjetas);
  
      controladorTarjetas.$inject = ['$state','$scope','servicioUsuarios']
  
    function controladorTarjetas($state, $scope,servicioUsuarios) {
      let vm = this;


        vm.nuevaTarjeta = {};
          
          function verificar(){
          let fullDate, someday, fullDateFrom;
          let today = new Date();
          let exMonth= document.getElementById("month").value;
          let exYear= document.getElementById("year").value;
          let mes = today.getMonth()+1;
          let anno = today.getFullYear();
          fullDate = 0 + mes + "/" + anno;
          console.log('fecha', fullDate);
          someday = new Date();
          someday.setFullYear(exYear, exMonth, 1);
          fullDateFrom = exMonth + "/" + exYear;
          console.log('fecha2', fullDateFrom);
          if (someday < today) {
            swal("The expiry date is before today's date. Please select a valid expiry date", {
              button: "ok",
            });
            return false;
          }
        } 
        
        getRandom();
        console.log(getRandom());
        vm.registrarTarjeta = (pnuevaTarjeta) => {

          let mes = $( "#month option:selected" ).val();
          let year = $( "#year option:selected" ).val();
          let expiracion = mes + '/' + year;  
          
          let objnuevaTarjeta = new Tarjeta(getRandom(), pnuevaTarjeta.nombre, pnuevaTarjeta.numero, expiracion, pnuevaTarjeta.cvv);
          
          servicioUsuarios.addTarjeta(objnuevaTarjeta);
          verificar();
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