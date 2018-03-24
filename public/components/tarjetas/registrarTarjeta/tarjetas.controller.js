(() => {
    'use strict';
    angular
      .module('correos')
      .controller('controladorTarjetas', controladorTarjetas);
  
      controladorTarjetas.$inject = ['$state','$scope','servicioUsuarios']
  
    function controladorTarjetas($state, $scope,servicioUsuarios) {
      let vm = this;

      let objSinFormatoUsuario = JSON.parse($stateParams.objUsuarioTemp);

      let objUsuario = new Usuario(objUsuario.cedula, objUsuario.foto, objUsuario.primerNombre, objUsuario.segundoNombre, objUsuario.primerApellido, objUsuario.segundoApellido, objUsuario.correo, objUsuario.telefono, objUsuario.fechaNacimiento, objUsuario.provincia, objUsuario.canton, objUsuario.distrito, objUsuario.direccionExacta, objUsuario.tipo,objUsuario.sucursalAsignada, objUsuario.puesto,objUsuario.vehiculo,objUsuario.tarjeta);

      listaTarjetas(objUsuario);
          
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
        vm.pnuevaTarjeta = {};



        vm.registrarTarjeta = (pnuevaTarjeta) => {

          let mes = $( "#month option:selected" ).val();
          let year = $( "#year option:selected" ).val();
          let expiracion = mes + '/' + year;  
          
          let objnuevaTarjeta = new Tarjeta(getRandom(), pnuevaTarjeta.nombre, pnuevaTarjeta.numero, expiracion, pnuevaTarjeta.cvv);

          let objUsuario2 = servicioUsuarios.addTarjeta(objUsuario, objTarjeta);
          objUsuario = new Usuario(objUsuario2.cedula, objUsuario2.foto, objUsuario2.primerNombre, objUsuario2.segundoNombre, objUsuario2.primerApellido, objUsuario2.segundoApellido, objUsuario2.correo, objUsuario2.telefono, objUsuario2.fechaNacimiento, objUsuario2.provincia, objUsuario2.canton, objUsuario2.distrito, objUsuario2.direccionExacta, objUsuario2.tipo,objUsuario2.sucursalAsignada, objUsuario2.puesto,objUsuario2.vehiculo,objUsuario2.tarjeta);

          listaTarjetas(objUsuario);
          
          // servicioUsuarios.addTarjeta(objnuevaTarjeta);
          // verificar();
          swal("Registro exitoso", "Tarjeta registrada con exito", "success", {
            button: "Aceptar",
          });

          vm.volver = () => {
            $state.go('tarjetas');
          }
   
          
        }

        function listaTarjetas(objUsuario) {
          vm.listararjetas = objUsuario.obtenerTarjeta();
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