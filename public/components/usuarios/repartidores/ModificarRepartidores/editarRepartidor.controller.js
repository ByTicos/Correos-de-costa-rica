(() => {
  'use strict';
  angular
    .module('correos')
    .controller('controladorEditarRepartidor', controladorEditarRepartidor);

    controladorEditarRepartidor.$inject = ['$stateParams', '$state', '$location', 'servicioUsuarios'];

  function controladorEditarRepartidor($stateParams, $state, $location, servicioUsuarios) {
    let vm = this;

    vm.regresar = () => {
      $state.go('main.repartidor');
    }

    vm.editarRepartidor = {};

    if(servicioUsuarios.getRol() == '3') {
      let sesion = JSON.parse(sessionStorage.getItem('sesion'));
      let listaUsuarios = servicioUsuarios.getUsuarios();
      for (let i = 0; i < listaUsuarios.length; i++) {
        if(listaUsuarios[i].correo == sesion.correo){
          
         vm.objNuevoRepartidor = new Usuario(listaUsuarios[i].cedula, listaUsuarios[i].foto, listaUsuarios[i].primerNombre, listaUsuarios[i].segundoNombre, listaUsuarios[i].primerApellido, listaUsuarios[i].segundoApellido, listaUsuarios[i].correo, listaUsuarios[i].telefono, listaUsuarios[i].fechaNacimiento, listaUsuarios[i].provincia, listaUsuarios[i].canton, listaUsuarios[i].distrito, listaUsuarios[i].direccionExacta,listaUsuarios[i].contrasenna, '3',listaUsuarios[i].sucursalAsignada,listaUsuarios[i].vehiculo);
        }
      }
    }else{
      let objRepartidorEditar = JSON.parse($stateParams.objRepartidorTemp);
      vm.objNuevoRepartidor = new Usuario(objRepartidorEditar.cedula, objRepartidorEditar.foto, objRepartidorEditar.primerNombre, objRepartidorEditar.segundoNombre, objRepartidorEditar.primerApellido, objRepartidorEditar.segundoApellido, objRepartidorEditar.correo, objRepartidorEditar.telefono, objRepartidorEditar.fechaNacimiento, objRepartidorEditar.provincia, objRepartidorEditar.canton,objRepartidorEditar.distrito.direccionExacta, objRepartidorEditar.contrasenna, '3',objRepartidorEditar.sucursalAsignada, objRepartidorEditar.vehiculo,);
    }

    vm.editarRepartidor.cedula = objRepartidor.cedula;
    vm.editarRepartidor.foto = objRepartidor.foto;
    vm.editarRepartidor.primerNombre = objRepartidor.primerNombre;
    vm.editarRepartidor.segundoNombre = objRepartidor.segundoNombre;
    vm.editarRepartidor.primerApellido = objRepartidor.primerApellido;
    vm.editarRepartidor.segundoApellido = objRepartidor.segundoApellido;
    vm.editarRepartidor.correo = objRepartidor.correo;
    vm.editarRepartidor.telefono = objRepartidor.telefono;
    vm.editarRepartidor.fechaNacimiento = new Date(objRepartidor.fechaNacimiento);
    vm.editarRepartidor.provincia = objRepartidor.provincia;
    vm.editarRepartidor.canton = objRepartidor.canton;
    vm.editarRepartidor.distrito = objRepartidor.distrito;
    vm.editarRepartidor.direccionExacta = objRepartidor.direccionExacta;
    vm.editarRepartidor.contrasenna = objRepartidor.contrasenna;
    vm.editarRepartidor.tipo = '';
    vm.editarRepartidor.sucursalAsignada = objNuevoRepartidor.sucursalAsignada;
    vm.editarRepartidor.vehiculo = objNuevoRepartidor.vehiculo;
    // vm.editarRepartidor.licencias = objNuevoRepartidor.licencias;

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