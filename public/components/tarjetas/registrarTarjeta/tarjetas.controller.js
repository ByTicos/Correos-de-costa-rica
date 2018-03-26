(() => {
    'use strict';
    angular
      .module('correos')
      .controller('controladorTarjetas', controladorTarjetas);
  
      controladorTarjetas.$inject = ['$state','$scope','$location', 'servicioUsuarios']
  
    function controladorTarjetas($state, $scope, $location, servicioUsuarios) {
      let vm = this;

  

      // Format input for card number entry
      var input = document.getElementById('cardNumber');
      console.log('input',input);
      payform.cardNumberInput(input)
      console.log('input',input); 
      // Get card type from number
      
      

      vm.getType = () => {
        console.log(payform.parseCardType(vm.nuevaTarjeta.numero));
      }



      vm.listaTarjeta = () => {
        $state.go('main.listartarjetas');
      }

          
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
        
        let idRandom = getRandom();
        console.log(getRandom());
        vm.pnuevaTarjeta = {};



        vm.registrarTarjeta = (pnuevaTarjeta) => {

          
          let session = JSON.parse(sessionStorage.getItem('sesion'));
          let usuario = session.nombre;

          let mes = $( "#month option:selected" ).val();
          let year = $( "#year option:selected" ).val();
          let expiracion = mes + '/' + year;  
          
          let objnuevaTarjeta = new Tarjeta(idRandom, pnuevaTarjeta.nombre, pnuevaTarjeta.numero, expiracion, pnuevaTarjeta.cvv);

          let registro = servicioUsuarios.addTarjeta(objnuevaTarjeta);

          if (registro == true) {
            swal("Registro exitoso", "Tarjeta registrada con exito", "success", {

              button: "Aceptar",
          });

        }else{
          swal("Registro fallido", "Ha ocurrido un error, intente nuevamente", "error", {
            button: "Aceptar",
          });

          vm.pnuevaTarjeta = null;
        }
      };
          

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