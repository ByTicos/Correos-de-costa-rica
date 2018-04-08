(() => {
  'use strict';
  angular
    .module ('correos')
    .controller ('controladorPreAlerta', controladorPreAlerta);

  controladorPreAlerta.$inject = ['$http','$state','$stateParams','$location','servicioUsuarios','servicioArticulos' ];

  function controladorPreAlerta ( $http, $state, $stateParams, $location, servicioUsuarios,servicioArticulos ) {
    let vm = this;
    vm.nuevoPaquete = {};
    vm.calculo = 0;
    vm.transporte = 0;
    vm.total = 0;
    vm.ocultarcalculo = false;

    vm.listaPreAlerta = () => {
      $state.go ('main.listaPreAlerta');
    };

     vm.tipoArticulo = servicioArticulos.getArticulo();

    
    
    //$http ({
    //   method: 'GET',
    //   url: './sources/data/articulos.json',
    // }).then (
    //   success => {
    //     vm.tipoArticulo = success.data;
    //   },
    //   error => {
    //     console.log ('Ocurrió un error ' + error.data);
    //   }
    // );

    vm.calcular = pnuevoPaquete => {
      let calculo = 0;
      let transporte = 0;
      let total = 0;
      let impuesto = Number (pnuevoPaquete.tipoArticulo._id);
      let peso = Number (pnuevoPaquete.peso);
      let precioxKilo = 0;
      let precio = Number (pnuevoPaquete.precio);
      let kilometro = Number (pnuevoPaquete.kilometro);

      if (peso <= 0.5) {
        precioxKilo = 5;
      } else {
        if (peso >= 0.6 && peso <= 4.5) {
          precioxKilo = 18;
        } else {
          if (peso >= 4.6 && peso <= 13.6) {
            precioxKilo = 52;
          } else {
            if (peso >= 13.7 && peso <= 30) {
              precioxKilo = 105;
            }
          }
        }
      }
      console.log (precioxKilo);

      calculo = precio * impuesto / 100 + precio + precioxKilo;
      transporte = kilometro * 1.5;
      total = calculo + transporte;

      vm.transporte = transporte;
      vm.calculo = calculo.toFixed (2);
      vm.total = total.toFixed (2);
    };

    vm.ocultarCalculo = () => {
      vm.ocultarcalculo = true;
    };

    vm.registrarPaquete = pnuevoPaquete => {
      let session = JSON.parse (sessionStorage.getItem ('sesion'));
      let usuario = session.nombre;

      let objNuevoPaquete = new Paquete (
        usuario,
        pnuevoPaquete.tracking,
        pnuevoPaquete.distribuidor,
        pnuevoPaquete.precio,
        pnuevoPaquete.peso,
        pnuevoPaquete.kilometro,
        pnuevoPaquete.tipoArticulo,
        pnuevoPaquete.descripcion
      );

      let fecha = new Date ();
      let hora = fecha;
      let objEstado = new Estado (usuario, fecha, hora, 'En tránsito a aduana');

      objNuevoPaquete.mostrarEstadoTraslado ('En tránsito a aduana');
      objNuevoPaquete.addEstado (objEstado);

      //console.log(objNuevoPaquete);

      let registro = servicioUsuarios.addPaquete (objNuevoPaquete);

      if (registro == true) {
        swal (
          'Registro exitoso',
          'El paquete ha sido registrado correctamente',
          'success',
          {
            button: 'Aceptar',
          }
        );
      } else {
        swal (
          'Registro fallido',
          'Ha ocurrido un error, intente nuevamente',
          'error',
          {
            button: 'Aceptar',
          }
        );
      }

      vm.nuevoPaquete = null;
    };

    
  }
}) ();
