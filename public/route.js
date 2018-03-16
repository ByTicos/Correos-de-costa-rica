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
        controllerAs: 'vm'
      })

      .state('editarPaquete', {
        url: '/editarPaquete',
        templateUrl: './components/paquetes/editPaquete.view.html',
        data:{
          pageTitle: 'Editar Paquete'
        },
        params: {
          objPaqueteTemp: ''
        },
        resolve: {
          load: ['$ocLazyLoad', ($ocLazyLoad) => {
            return $ocLazyLoad.load('./components/paquetes/editPaquete.controller.js')
          }]
        },
        controller: 'controladorEditarPaquetes',
        controllerAs: 'vm'
      })

      .state('registrarUsuarios', {
        url: '/registrarUsuarios',
        templateUrl: './components/admin/registrarUsuarios.view.html',
        data:{
          pageTitle: 'Registro Usuarios'
        },
        params: {
          objClienteTemp: ''
        },
        resolve: {
          load: ['$ocLazyLoad', ($ocLazyLoad) => {
            return $ocLazyLoad.load('./components/admin/registrarUsuarios.controller.js')
          }]
        },
        controller: 'controladorRegistrarUsuarios',
        controllerAs: 'vm'
      })

      .state('editarUsuarios', {
        url: '/editarUsuarios',
        templateUrl: './components/admin/editarUsuarios.view.html',
        data:{
          pageTitle: 'Editar Usuarios'
        },
        params: {
          objClienteTemp: ''
        },
        resolve: {
          load: ['$ocLazyLoad', ($ocLazyLoad) => {
            return $ocLazyLoad.load('./components/admin/editarUsuarios.controller.js')
          }]
        },
        controller: 'controladorEditarEncargadoSucursal',
           
        controller: 'controladorEditarUsuarios',
        controllerAs: 'vm',
      })


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



      .state('repartidor', {
        url: '/repartidor',
        templateUrl: './components/repartidores/registroRepartidor.view.html',
        data:{
          pageTitle: 'Registro repartidor'
        },
        params: {
          objClienteTemp: ''
        },
        resolve: {
          load: ['$ocLazyLoad', ($ocLazyLoad) => {
            return $ocLazyLoad.load('./components/repartidores/registroRepartidor.controller.js')
          }]
        },
        controller: 'controladorRepartidores',
        controllerAs: 'vm'
      })
      

    

      

    $urlRouterProvider.otherwise('/');
  };

})();
