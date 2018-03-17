(() => {
  'use strict';
  angular
  .module('correos')
  .directive('footer', footer);
  
  function footer(){
    const navegacion = {
      templateUrl: '/components/directives/footer/footer.view.html',
      restrict: 'EA' //E = Etiqueta, A = Atributo, C = Comentario, M.
    };

    return footer;
  }
})();