
(() => {
  'use strict';
  angular
    .module('correos')
    .controller('controladorSucursal', controladorSucursal);

    controladorSucursal.$inject = ['$http', '$state','$scope','servicioSucursales']

  function controladorSucursal($http, $state, $scope, servicioSucursales) {
    let vm = this;
    
    vm.nuevaSucursal = {};
    vm.listaSucursales = listarSucursales();
    
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

    listarSucursales();

    vm.registrarSucursal = (pnuevaSucursal) => {

      let objnuevaSucursal = new Sucursal(pnuevaSucursal.Id, pnuevaSucursal.nombre, pnuevaSucursal.provincia.name, pnuevaSucursal.canton.name, pnuevaSucursal.distrito.name, pnuevaSucursal.telefono, pnuevaSucursal.horario);

      servicioSucursales.addSucursal(objnuevaSucursal);

      swal("Registro exitoso", "El usuario ha sido registrado correctamente", "success", {
        button: "Aceptar",
      });

      vm.nuevaSucursal = null;
      listarSucursales();
    }

    function listarSucursales() {
      vm.listaSucursales = servicioSucursales.getSucursal();
    }

  }
})();


