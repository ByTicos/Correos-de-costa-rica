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
          objUsuarioTemp: ''
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
          objUsuarioTemp: ''
        },
        resolve: {
          load: ['$ocLazyLoad', ($ocLazyLoad) => {
            return $ocLazyLoad.load('./components/admin/editarUsuarios.controller.js')
          }]
        }, 
        controller: 'controladorEditarUsuarios',
        controllerAs: 'vm',
      })
       .state('calculadora', {
        url: '/calculadora',
        templateUrl: './components/paquetes/calculadora.view.html',
        data:{
          pageTitle: 'calculadora'
        },
        params: {
          objcalculoTemp: ''
        },
        resolve: {
          load: ['$ocLazyLoad', ($ocLazyLoad) => {
            return $ocLazyLoad.load('./components/paquetes/calculadora.controller.js')
          }]
        },
        controller: 'controladorCalculadora',
        controllerAs: 'vm'
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
        controller: 'controladorAdmin',
        controllerAs: 'vm'
      })

     

  
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

      .state('tarjetas', {
        url: '/tarjetas',
        templateUrl: './components/tarjetas/registrarTarjeta/tarjetas.view.html',
        data:{
          pageTitle: 'Registrar Tarjetas'
        },
        resolve: {
          load: ['$ocLazyLoad', ($ocLazyLoad) => {
            return $ocLazyLoad.load('./components/tarjetas/registrarTarjeta/tarjetas.controller.js')
          }]
        },
        controller: 'controladorTarjetas',
        controllerAs: 'vm'
      })
      
       .state('filtrarPaquete', {
        url: '/filtrarPaquete',
        templateUrl: './components/admin/listaPaquetes.view.html',
        data:{
          pageTitle: 'Filtrar paquetes'
        },
        params: {
          objEstadoTemp: ''
        },
        resolve: {
          load: ['$ocLazyLoad', ($ocLazyLoad) => {
            return $ocLazyLoad.load('./components/admin/listaPaquetes.controller.js')
          }]
        },
        controller: 'controladorListaPaquetes',
        controllerAs: 'vm'
      })
    

      .state('registrarSucursales', {
        url: '/registrarSucursales',
        templateUrl: './components/sucursal/registrarSucursal/sucursalRegistrar.view.html',
        data:{
          pageTitle: 'Registrar Sucursal'
        },
        params: {
          objSucursalTemp: ''
        },
        resolve: {
          load: ['$ocLazyLoad', ($ocLazyLoad) => {
            return $ocLazyLoad.load('./components/sucursal/registrarSucursal/sucursalRegistrar.controller.js')
          }]
        },
        controller: 'controladorSucursal',
        controllerAs: 'vm'
      })



      .state('repartidor', {
        url: '/repartidor',
        templateUrl: './components/repartidores/registroRepartidor.view.html',
        data:{
          pageTitle: 'Registro repartidor'
        },
        params: {
          objSucursalTemp: ''
        },
        resolve: {
          load: ['$ocLazyLoad', ($ocLazyLoad) => {
            return $ocLazyLoad.load('./components/repartidores/registroRepartidor.controller.js')
          }]
        },
        controller: 'controladorRepartidores',
        controllerAs: 'vm'
      })
      
      .state('listarsucursales', {
        url: '/listarsucursales',
        templateUrl: './components/sucursal/listarSucursal/sucursalListar.view.html',
        data:{
          pageTitle: 'Listar Sucursal'
        },
        params: {
          objSucursalTemp: ''
        },
        resolve: {
          load: ['$ocLazyLoad', ($ocLazyLoad) => {
            return $ocLazyLoad.load('./components/sucursal/listarSucursal/sucursalListar.controller.js')
          }]
        },
        controller: 'controladorSucursalListar',
        controllerAs: 'vm'
      })

      .state('editarsucursales', {
        url: '/editarsucursales',
        templateUrl: './components/sucursal/editarSucursal/sucursalEditar.view.html',
        data:{
          pageTitle: 'Editar Sucursal'
        },
        params: {
          objSucursalTemp: ''
        },
        resolve: {
          load: ['$ocLazyLoad', ($ocLazyLoad) => {
            return $ocLazyLoad.load('./components/sucursal/editarSucursal/sucursalEditar.controller.js')
          }]
        },
        controller: 'controladorSucursalEditar',
        controllerAs: 'vm'
      })

      .state('editarTarjetas', {
        url: '/editarTarjetas',
        templateUrl: './components/tarjetas/registrarTarjeta/editarTarjeta.view.html',
        data:{
          pageTitle: 'Editar Tarjetas'
        },
        params: {
          objUsuarioTemp: ''
        },
        resolve: {
          load: ['$ocLazyLoad', ($ocLazyLoad) => {
            return $ocLazyLoad.load('./components/tarjetas/registrarTarjeta/editarTarjeta.controller.js')
          }]
        },
        controller: 'controladorEditarTarjetas',
        controllerAs: 'vm'
      })

      .state('listartarjetas', {
        url: '/listartarjetas',
        templateUrl: './components/tarjetas/listarTarjeta/listarTarjeta.view.html',
        data:{
          pageTitle: 'Listar Tarjetas'
        },
        params: {
          objUsuarioTemp: ''
        },
        resolve: {
          load: ['$ocLazyLoad', ($ocLazyLoad) => {
            return $ocLazyLoad.load('./components/tarjetas/listarTarjeta/listarTarjeta.controller.js')
          }]
        },
        controller: 'controladorListarTarjetas',
        controllerAs: 'vm'
      });
  
  
      

    $urlRouterProvider.otherwise('/');
  };

})();
