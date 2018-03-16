(() => {
  'use strict';
  angular
    .module('appRoutes', ['ui.router', 'oc.lazyLoad', 'uiRouterTitle'])
    .config(routing);
  routing.$inject = ['$stateProvider', '$urlRouterProvider'];

  function routing($stateProvider, $urlRouterProvider, $oclazyLoad) {

    $stateProvider
      .state('landingPage', {
        url: '/',
        templateUrl: './components/landingPage/landingPage.view.html',
        data:{
          pageTitle: 'Correos de Costa Rica'
        }
      })
      .state('cliente', {
        url: '/cliente',
        templateUrl: './components/clientes/registroCliente.view.html',
        data:{
          pageTitle: 'Registro cliente'
        },
        params: {
          objClienteTemp: ''
        },
        resolve: {
          load: ['$ocLazyLoad', ($ocLazyLoad) => {
            return $ocLazyLoad.load('./components/clientes/registroCliente.controller.js')
          }]
        },
        controller: 'controladorClientes',
        controllerAs: 'vm'
      })

      .state('editarCliente', {
        url: '/editarCliente',
        templateUrl: './components/clientes/editarClientes.view.html',
        data:{
          pageTitle: 'Editar cliente'
        },
        params: {
          objClienteTemp: ''
        },
        resolve: {
          load: ['$ocLazyLoad', ($ocLazyLoad) => {
            return $ocLazyLoad.load('./components/clientes/editarClientes.controller.js')
          }]
        },
        controller: 'controladorEditarClientes',
        controllerAs: 'vm'
      })
<<<<<<< HEAD

      .state('paquete',{
        url: '/paquete',
        templateUrl: './components/paquetes/registroPaquete.view.html',
        data: {
          pageTitle: 'Registro pre alerta'
        },
         params: {
          objPaqueteTemp: ''
        },
        resolve: {
          load: ['$ocLazyLoad', ($ocLazyLoad) => {
            return $ocLazyLoad.load('./components/paquetes/registroPaquete.controller.js')
          }]
        },
        controller: 'controladorPaquetes',
=======
<<<<<<< HEAD

      .state('encargadoSucursal', {
        url: '/encargadoSucursal',
        templateUrl: './components/encargadoSucursal/registroEncargadoSucursal.view.html',
        data:{
          pageTitle: 'Registro Encargado de Sucursal'
        },
        params: {
          objClienteTemp: ''
        },
        resolve: {
          load: ['$ocLazyLoad', ($ocLazyLoad) => {
            return $ocLazyLoad.load('./components/encargadoSucursal/registroEncargadoSucursal.controller.js')
          }]
        },
        controller: 'controladorEncargadoSucursal',
        controllerAs: 'vm'
      })

      .state('editarEncargadoSucursal', {
        url: '/editarEncargadoSucursal',
        templateUrl: './components/encargadoSucursal/editarEncargadoSucursal.view.html',
        data:{
          pageTitle: 'Editar Encargado de Sucursal'
        },
        params: {
          objClienteTemp: ''
        },
        resolve: {
          load: ['$ocLazyLoad', ($ocLazyLoad) => {
            return $ocLazyLoad.load('./components/encargadoSucursal/editarEncargadoSucursal.controller.js')
          }]
        },
        controller: 'controladorEditarEncargadoSucursal',
=======
      
      .state('entidades', {
        url: '/entidades',
        templateUrl: './components/entidades/entidades.view.html',
        data:{
          pageTitle: 'Registrar entidad'
        },
        params: {
          objEntidadTemp: ''
        },
        resolve: {
          load: ['$ocLazyLoad', ($ocLazyLoad) => {
            return $ocLazyLoad.load('./components/entidades/entidades.controller.js')
          }]
        },
        controller: 'controladorEntidades',
        controllerAs: 'vm'
      })

      .state('convenio', {
        url: '/convenio',
        templateUrl: './components/convenios/convenios.view.html',
        data:{
          pageTitle: 'Registrar convenio'
        },
        params: {
          objEntidadTemp: ''
        },
        resolve: {
          load: ['$ocLazyLoad', ($ocLazyLoad) => {
            return $ocLazyLoad.load('./components/convenios/convenios.controller.js')
          }]
        },
        controller: 'controladorConvenios',
>>>>>>> origin/Luisk
>>>>>>> Dev
        controllerAs: 'vm'
      })
/*
      .state('admin', {
        url: '/admin',
        templateUrl: './components/admin/admin.view.html',
        data:{
          pageTitle: 'Registro admin'
        },
        params: {
          objUsuarioTemp:''
        },
        resolve: {
          load: ['$ocLazyLoad', ($ocLazyLoad) => {
            return $ocLazyLoad.load('./components/admin/admin.controller.js')
          }]
        },
        controller: 'controladorAdministrador',
        controllerAs: 'vm'
      })
*/
     

  
      .state('logIn', {
        url: '/logIn',
        templateUrl: './components/inicioSesion/inicioSesion.view.html',
        data:{
          pageTitle: 'Iniciar sesión'
        },
        resolve: {
          load: ['$ocLazyLoad', ($ocLazyLoad) => {
            return $ocLazyLoad.load('./components/inicioSesion/inicioSesion.controller.js')
          }]
        },
        controller: 'controladorLogin',
        controllerAs: 'vm'
      })



     
      

    

      

    $urlRouterProvider.otherwise('/');
  };

})();
