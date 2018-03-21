(() => {
  'use strict'
  angular
    .module('correos')
    .controller('controladorEncargadoAduanas', controladorEncargadoAduanas);
    
    controladorEncargadoAduanas.$inject = ['$state', '$stateParams', '$location', 'servicioUsuarios'];

  function controladorEncargadoAduanas($state, $stateParams, $location, servicioUsuarios) {
    let vm = this;

    vm.listaUsuarios = listarUsuarios();


    function listarUsuarios(){
      let listaUsuarios = servicioUsuarios.getUsuarios();
      return listaUsuarios;
    }
  }
})();

