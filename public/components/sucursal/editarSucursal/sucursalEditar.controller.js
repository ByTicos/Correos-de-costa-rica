(() => {
  'use strict';
  angular
    .module('correos')
    .controller('controladorSucursalEditar', controladorSucursalEditar);

  controladorSucursalEditar.$inject = ['$http','$stateParams', '$state', '$location', 'servicioSucursales'];

  function controladorSucursalEditar($http, $stateParams, $state, $location, servicioSucursales) {
    let vm = this;
    
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


    vm.regresar = () => {
      $state.go('listarsucursales');
    }

    vm.editarSucursal = {};

    let objSucursalEditar = JSON.parse($stateParams.objSucursalTemp);

    let objNuevaSucursal = new Sucursal(objSucursalEditar.id, objSucursalEditar.nombre, objSucursalEditar.provincia.name, objSucursalEditar.canton.name, objSucursalEditar.distrito.name, objSucursalEditar.telefono, objSucursalEditar.horario);


    vm.editarSucursal.id = objNuevaSucursal.id;
    vm.editarSucursal.nombre = objNuevaSucursal.nombre;
    vm.editarSucursal.provincia = objNuevaSucursal.provincia;
    vm.editarSucursal.canton = objNuevaSucursal.canton;
    vm.editarSucursal.distrito = objNuevaSucursal.distrito;
    vm.editarSucursal.telefono = objNuevaSucursal.telefono;
    vm.editarSucursal.horario = objNuevaSucursal.horario;


    vm.editSucursal = (pSucursal) => {
      let listaSucursal = servicioSucursales.getSucursal();

      listaSucursal.forEach(objSucursal => {
        if (objSucursal.id == objNuevaSucursal.id) {
          
          objSucursal.nombre = pSucursal.nombre;
          objSucursal.provincia = pSucursal.provincia;
          objSucursal.canton = pSucursal.canton;
          objSucursal.distrito = pSucursal.distrito;
          objSucursal.telefono = pSucursal.telefono;
          objSucursal.horario = pSucursal.horario;

          servicioSucursales.actualizarSucursalLocal(objSucursal);

        }
      });
      swal("Edición exitosa", "Sucursal Editada correctamente", "success", {
        button: "Aceptar",
      });
      $state.go('listarsucursales')
    }
  }

})();