(() => {

  'use strict';
  angular
    .module('correos')
    .controller('controladorPreAlerta', controladorPreAlerta);

  controladorPreAlerta.$inject = ['$http', '$state', '$stateParams', '$location', 'servicioUsuarios'];

  function controladorPreAlerta($http, $state, $stateParams, $location, servicioUsuarios) {
    let vm = this;
    vm.nuevoPaquete = {};
    vm.calculo = 0;


    vm.listaPreAlerta = () => {
      $state.go('main.listaPreAlerta');
    }

    vm.tipoArticulo = $http({
      method: 'GET',
      url: './sources/data/articulos.json',
    }).then(
      success => {
        vm.tipoArticulo = success.data;
      },
      error => {
        console.log('Ocurrió un error ' + error.data);
      }
    );


    
vm.calcular = (pnuevoPaquete) => {
  let calculo = 0;
  let impuesto = Number (pnuevoPaquete.tipoArticulo._id);
  let peso = Number (pnuevoPaquete.peso);
  let precio = Number (pnuevoPaquete.precio);
  
  
  calculo = peso * precio;
  console.log (pnuevoPaquete.tipoArticulo._id);

  vm.calculo = calculo;
};




    vm.registrarPaquete = (pnuevoPaquete) => {
      let session = JSON.parse(sessionStorage.getItem('sesion'));
      let usuario = session.nombre;


      let objNuevoPaquete = new Paquete(usuario, pnuevoPaquete.tracking, pnuevoPaquete.distribuidor, pnuevoPaquete.precio, pnuevoPaquete.peso, pnuevoPaquete.tipoArticulo, pnuevoPaquete.descripcion);
     
     
      


      let fecha = new Date();
      let hora = fecha;
      let objEstado = new Estado(usuario, fecha, hora, 'En tránsito a aduana');

      objNuevoPaquete.mostrarEstadoTraslado('En tránsito a aduana');
      objNuevoPaquete.addEstado(objEstado);


      //console.log(objNuevoPaquete);

      let registro = servicioUsuarios.addPaquete(objNuevoPaquete);

      if (registro == true) {
        swal("Registro exitoso", "El paquete ha sido registrado correctamente", "success", {
          button: "Aceptar",
        });

      } else {
        swal("Registro fallido", "Ha ocurrido un error, intente nuevamente", "error", {
          button: "Aceptar",
        });
      }

      vm.nuevoPaquete = null;

    }





  }

})();