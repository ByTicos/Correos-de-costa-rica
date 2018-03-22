(() => {
  'use strict';
  angular
    .module('correos')
    .controller('controladorMain', controladorMain);

    controladorMain.$inject = ['$location', 'servicioLogin', 'servicioUsuarios'];

  function controladorMain($location, servicioLogin, servicioUsuarios) {
    const vm = this;
  }
})();