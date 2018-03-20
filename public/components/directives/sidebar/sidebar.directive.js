(() => {
  'use strict';
  angular
  .module('correos')
  .directive('menuLateral', menuLateral);
  
  function menuLateral(){
    let sidebar = {
      templateUrl: '/components/directives/sidebar/sidebar.view.html',
      restrict: 'EA'
    };

    return sidebar;
  }
})();