(() => {
  'use strict'
  angular
    .module('correos')
    .controller('controladorListarPaquetesConvenio', controladorListarPaquetesConvenio);

  controladorListarPaquetesConvenio.$inject = ['servicioUsuarios'];

  function controladorListarPaquetesConvenio(servicioUsuarios) {
    let vm = this;

    vm.listaPaquetesConvenio = servicioUsuarios.getPaquetesConvenio();
    console.log(vm.listaPaquetesConvenio);
  }
})();