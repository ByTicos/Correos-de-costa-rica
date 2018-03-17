
(() => {
  'use strict';
  angular
    .module('correos')
    .controller('controladorSucursal', controladorSucursal);

    controladorSucursal.$inject = ['$http', '$state','$scope']

  function controladorSucursal($http, $state, $scope) {
    let vm = this;
    
    vm.nuevaSucursal = {};

    vm.provincias = $http({
      method: 'GET',
      url: './sources/data/provincias.json'
    }).then( (success) => {
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

    vm.registrarSucursal = (pnuevaSucursal) => {

      let objNuevaSucursal = new Sucursal(pnuevaSucursal.id, pnuevaSucursal.nombre, pnuevaSucursal.provincia.name, pnuevaSucursal.canton.name, pnuevaSucursal.distrito.name);

      let registroExitoso = servicioUsuarios.addSucursal(objNuevaSucursal);

      if (registroExitoso == true){
        swal({
          title: 'Registro Exitoso',
          text: "Sucursal registrada exitosamente",
          icon: "sucess",
          button: "Aceptar"
        });
        vm.nuevaSucursal = null;
      }else{
        swal({
          title: "Hubo un error",
          text: "Ha ocurrido un error, inténtelo por favor intente de nuevo",
          icon: "error",
          button: "Aceptar",
        });
      }

    }


  }
})();


