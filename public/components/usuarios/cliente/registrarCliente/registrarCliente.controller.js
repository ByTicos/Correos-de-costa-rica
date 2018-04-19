(() => {
  'use strict'
  angular
    .module('correos')
    .controller('controladorRegistrarClientes', controladorRegistrarClientes);

  controladorRegistrarClientes.$inject = ['$http','$state', '$stateParams', '$location', 'servicioUsuarios', 'imageService', 'servicioSucursales', 'Upload'];

  function controladorRegistrarClientes($http ,$state, $stateParams, $location, servicioUsuarios, imageService, servicioSucursales, Upload) {
    let vm = this;

    //da error y no llena los data list cuando no hay un rol seleccionado
    // vm.rol = servicioUsuarios.getRol();
    vm.listaClientes = listarClientes();
    vm.nuevoCliente = {};
    
  /*
    var map;
    function initMap() {
        map = new google.maps.Map(document.getElementById('map'), {
        center: { lat: -34.397, lng: 150.644 },
        zoom: 8
      });
    }
  */  


    vm.provincias = $http({
      method: 'GET',
      url: './sources/data/provincias.json'
    }).then((success) => {
      vm.provincias = success.data;
    }, (error) => {
      console.log("Ocurrió un error " + error.data);
    });

    vm.rellenarCantones = (pidProvincia) => {
      vm.cantones = $http({
        method: 'GET',
        url: './sources/data/cantones.json'
      }).then((success) => {
        let cantones = [];
        for (let i = 0; i < success.data.length; i++) {
          if (pidProvincia == success.data[i].idProvincia) {
            cantones.push(success.data[i]);
          }
        }
        vm.cantones = cantones;
      }, (error) => {
        console.log("Ocurrió un error " + error.data)
      });
    }

    vm.rellenarDistrito = (pidCanton) => {
      console.log(pidCanton);
      vm.distritos = $http({
        method: 'GET',
        url: './sources/data/distritos.json'
      }).then((success) => {
        let distritos = [];
        for (let i = 0; i < success.data.length; i++) {
          if (pidCanton == success.data[i].idCanton) {
            distritos.push(success.data[i]);
          }
        }
        vm.distritos = distritos;
      }, (error) => {
        console.log("Ocurrió un error " + error.data)
      });
    }


    vm.editCliente = (pUsuario) => {
      $state.go('editarCliente', { objClienteTemp: JSON.stringify(pUsuario) });

    };

    vm.listaSucursales = servicioSucursales.getSucursal();

    vm.cloudObj = imageService.getConfiguration();

    vm.preRegistrarCliente = (pnuevoUsuario) => {
      vm.cloudObj.data.file = pnuevoUsuario.foto[0];
      Upload.upload(vm.cloudObj).success((data) =>{
        vm.registrarCliente(pnuevoUsuario, data.url);
     });
    }

    vm.registrarCliente = (pNuevoUsuario, urlImagen) => {
      let objNuevoCliente = new Usuario(pNuevoUsuario.cedula, urlImagen, pNuevoUsuario.primerNombre, pNuevoUsuario.segundoNombre, pNuevoUsuario.primerApellido, pNuevoUsuario.segundoApellido, pNuevoUsuario.correo, pNuevoUsuario.telefono, pNuevoUsuario.fechaNacimiento, pNuevoUsuario.provincia, pNuevoUsuario.canton, pNuevoUsuario.distrito, pNuevoUsuario.direccionExacta, pNuevoUsuario.contrasenna, '1', pNuevoUsuario.sucursalAsignada);

      let registro = servicioUsuarios.addUsuario(objNuevoCliente);

      if (registro == 'Se registró el usuario correctamente') {
        let sesion = JSON.parse(sessionStorage.getItem('sesion'));
        if (sesion == null || sesion.tipo != '5') {

          swal("Registro exitoso", "El cliente ha sido registrado correctamente", "success", {
            button: "Aceptar",
          });
          $location.path('/logIn');
        }
        else {
          swal("Registro exitoso", "El cliente ha sido registrado correctamente", "success", {
            button: "Aceptar",
          });
          $location.path('/main/listarCliente');
        }

      }
      else {
        swal("Registro fallido", "Ha ocurrido un error, intente nuevamente", "error", {
          button: "Aceptar",
        });
      }
    }


    function listarClientes() {
      let listaUsuarios = servicioUsuarios.getUsuarios();
      let listaClientes = [];
      listaUsuarios.forEach(usuario => {
        if (usuario.tipo == '1') {
          listaClientes.push(usuario);
        }
      });
      return listaClientes;
    }

    $('.message a').click(function(){
      $('form').animate({height: "toggle", opacity: "toggle"}, "slow");
   });
  }
})();