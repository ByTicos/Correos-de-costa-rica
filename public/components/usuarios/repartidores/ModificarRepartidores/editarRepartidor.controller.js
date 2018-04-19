(() => {
  'use strict';
  angular
    .module('correos')
    .controller('controladorEditarRepartidor', controladorEditarRepartidor);

    controladorEditarRepartidor.$inject = ['$http', '$stateParams', '$state', '$location', 'servicioUsuarios'];


  function controladorEditarRepartidor($http, $stateParams, $state, $location, servicioUsuarios) {
    let vm = this;

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


    vm.regresar = () => {
      $state.go('main.repartidor');
    }

    vm.editarRepartidor = {};
    vm.objNuevoRepartidor = {};

    if(servicioUsuarios.getRol() == '3') {
      let sesion = JSON.parse(sessionStorage.getItem('sesion'));
      let listaUsuarios = servicioUsuarios.getUsuarios();
      for (let i = 0; i < listaUsuarios.length; i++) {
        if(listaUsuarios[i].correo == sesion.correo){
          
         vm.objNuevoRepartidor = new Usuario(listaUsuarios[i].cedula, listaUsuarios[i].foto, listaUsuarios[i].primerNombre, listaUsuarios[i].segundoNombre, listaUsuarios[i].primerApellido, listaUsuarios[i].segundoApellido, listaUsuarios[i].correo, listaUsuarios[i].telefono, listaUsuarios[i].fechaNacimiento, listaUsuarios[i].provincia, listaUsuarios[i].canton, listaUsuarios[i].distrito, listaUsuarios[i].direccionExacta,listaUsuarios[i].contrasenna, '3',listaUsuarios[i].sucursalAsignada,listaUsuarios[i].vehiculo, listaUsuarios[i].licencias);
        }
      }
    }else{
      let objRepartidorEditar = JSON.parse($stateParams.objRepartidorTemp);
      vm.objNuevoRepartidor = new Usuario(objRepartidorEditar.cedula, objRepartidorEditar.foto, objRepartidorEditar.primerNombre, objRepartidorEditar.segundoNombre, objRepartidorEditar.primerApellido, objRepartidorEditar.segundoApellido, objRepartidorEditar.correo, objRepartidorEditar.telefono, objRepartidorEditar.fechaNacimiento, objRepartidorEditar.provincia, objRepartidorEditar.canton,objRepartidorEditar.distrito.direccionExacta, objRepartidorEditar.contrasenna, '3',objRepartidorEditar.sucursalAsignada, objRepartidorEditar.vehiculo, objRepartidorEditar.licencias);
    }

    vm.editarRepartidor.cedula = objNuevoRepartidor.cedula;
    vm.editarRepartidor.foto = objNuevoRepartidor.foto;
    vm.editarRepartidor.primerNombre = objNuevoRepartidor.primerNombre;
    vm.editarRepartidor.segundoNombre = objNuevoRepartidor.segundoNombre;
    vm.editarRepartidor.primerApellido = objNuevoRepartidor.primerApellido;
    vm.editarRepartidor.segundoApellido = objNuevoRepartidor.segundoApellido;
    vm.editarRepartidor.correo = objNuevoRepartidor.correo;
    vm.editarRepartidor.telefono = objNuevoRepartidor.telefono;
    vm.editarRepartidor.fechaNacimiento = new Date(objNuevoRepartidor.fechaNacimiento);
    vm.editarRepartidor.provincia = objNuevoRepartidor.provincia;
    vm.editarRepartidor.canton = objNuevoRepartidor.canton;
    vm.editarRepartidor.distrito = objNuevoRepartidor.distrito;
    vm.editarRepartidor.direccionExacta = objNuevoRepartidor.direccionExacta;
    vm.editarRepartidor.contrasenna = objNuevoRepartidor.contrasenna;
    vm.editarRepartidor.tipo = '';
    vm.editarRepartidor.sucursalAsignada = objNuevoRepartidor.sucursalAsignada;
    vm.editarRepartidor.vehiculo = objNuevoRepartidor.vehiculo;
    vm.editarRepartidor.licencias = objNuevoRepartidor.licencias;

    // vm.eliminarUsuario = (pEstado) =>{
    //   let listaUsuarios = servicioUsuarios.getUsuarios();
    //   listaUsuarios.forEach(objUsuario => {
    //     if(objUsuario.correo == objNuevoUsuario.correo){
    //       objUsuario.cambiarEstado(pEstado);
    //     }
    //     servicioUsuarios.actualizarUsuario(objUsuario);
    //   });
    //   $state.go('main.listarRepartidores');
    // }

    vm.editRepartidor = (pUsuario) => {
      let listaUsuarios = servicioUsuarios.getUsuarios();

      listaUsuarios.forEach(objUsuario => {
        if (objUsuario.cedula == pUsuario.cedula) {
          objUsuario.foto = pUsuario.foto;
          objUsuario.primerNombre = pUsuario.primerNombre;
          objUsuario.segundoNombre = pUsuario.segundoNombre;
          objUsuario.primerApellido = pUsuario.primerApellido;
          objUsuario.segundoApellido = pUsuario.segundoApellido;
          objUsuario.correo = pUsuario.correo;
          objUsuario.telefono = pUsuario.telefono;
          objUsuario.fechaNacimiento = pUsuario.fechaNacimiento;
          objUsuario.provincia = pUsuario.provincia;
          objUsuario.canton = pUsuario.canton;
          objUsuario.distrito = pUsuario.distrito;
          objUsuario.direccionExacta = pUsuario.direccionExacta;
          objUsuario.contrasenna = pUsuario.contrasenna;
          objUsuario.sucursalAsignada = pUsuario.sucursalAsignada;
          objUsuario.vehiculo = pUsuario.vehiculo;
          objUsuario.licencias = pUsuario.licencias;

    

          servicioUsuarios.actualizarUsuario(objUsuario);
        }
      });
      swal("Edición exitosa", "Repartidor editado correctamente", "success", {
        button: "Aceptar",
      });
      $state.go('main.repartidor')
    }
  }

})();