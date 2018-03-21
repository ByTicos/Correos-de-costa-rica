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

      .state('registrarCliente', {
        url: '/registrarCliente',
        templateUrl: './components/usuarios/cliente/registrarCliente/registrarCliente.view.html',
        data:{
          pageTitle: 'Registro cliente'
        },
        params: {
          objClienteTemp: ''
        },
        resolve: {
          load: ['$ocLazyLoad', ($ocLazyLoad) => {
            return $ocLazyLoad.load('./components/usuarios/cliente/registrarCliente/registrarCliente.controller.js')
          }]
        },
        controller: 'controladorRegistrarClientes',
        controllerAs: 'vm'
      })
      
      .state('listarCliente', {
        url: '/listarCliente',
        templateUrl: './components/usuarios/cliente/listarCliente/listarCliente.view.html',
        data:{
          pageTitle: 'Registro cliente'
        },
        params: {
          objClienteTemp: ''
        },
        resolve: {
          load: ['$ocLazyLoad', ($ocLazyLoad) => {
            return $ocLazyLoad.load('./components/usuarios/cliente/listarCliente/listarCliente.controller.js')
          }]
        },
        controller: 'controladorListarCliente',
        controllerAs: 'vm'
      })
      .state('modificarCliente', {
        url: '/modificarCliente',
        templateUrl: './components/usuarios/cliente/modificarCliente/modificarCliente.view.html',
        data:{
          pageTitle: 'Registro cliente'
        },
        params: {
          objClienteTemp: ''
        },
        resolve: {
          load: ['$ocLazyLoad', ($ocLazyLoad) => {
            return $ocLazyLoad.load('./components/usuarios/cliente/modificarCliente/modificarCliente.controller.js')
          }]
        },
        controller: 'controladorModificarCliente',
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

      .state('encargadoSucursal', {
        url: '/encargadoSucursal',
        templateUrl: './components/encargadoSucursal/encargadoSucursal.view.html',
        data:{
          pageTitle: 'Dashboard de Encargado de Sucursal'
        },
        params: {
          objUsuarioTemp:''
        },
        resolve: {
          load: ['$ocLazyLoad', ($ocLazyLoad) => {
            return $ocLazyLoad.load('./components/encargadoSucursal/encargadoSucursal.controller.js')
          }]
        },
        controller: 'controladorencargadoSucursal',
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
        templateUrl: './components/tarjetas/tarjetas.view.html',
        data:{
          pageTitle: 'Registrar Tarjetas'
        },
        resolve: {
          load: ['$ocLazyLoad', ($ocLazyLoad) => {
            return $ocLazyLoad.load('./components/tarjetas/tarjetas.controller.js')
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
    

      .state('encargadoAduanas', {
        url: '/encargadoAduanas',
        templateUrl: './components/encargadoAduanas/encargadoAduanas.view.html',
        data:{
          pageTitle: 'Dashboard Encargado de Aduanas'
        },
        params: {
          objUsuarioTemp: ''
        },
        resolve: {
          load: ['$ocLazyLoad', ($ocLazyLoad) => {
            return $ocLazyLoad.load('./components/encargadoAduanas/encargadoAduanas.controller.js')
          }]
        },
        controller: 'controladorEncargadoAduanas',
        controllerAs: 'vm'
      })     

      .state('sucursales', {
        url: '/sucursales',
        templateUrl: './components/sucursal/sucursal.view.html',
        data:{
          pageTitle: 'Registrar Sucursal'
        },
        resolve: {
          load: ['$ocLazyLoad', ($ocLazyLoad) => {
            return $ocLazyLoad.load('./components/sucursal/sucursal.controller.js')
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
      

      .state('registrarEncargadoSucursal', {
        url: '/registrarEncargadoSucursal',
        templateUrl: './components/usuarios/encargadoSucursal/registrarEncargadoSucursal/registrarEncargadoSucursal.view.html',
        data:{
          pageTitle: 'Registro Encargado Sucursal'
        },
        params: {
          objUsuarioTemp: ''
        },
        resolve: {
          load: ['$ocLazyLoad', ($ocLazyLoad) => {
            return $ocLazyLoad.load('./components/usuarios/encargadoSucursal/registrarEncargadoSucursal/registrarEncargadoSucursal.controller.js')
          }]
        },
        controller: 'controladorRegistrarEncargadoSucursal',
        controllerAs: 'vm'
      })

      .state('listarEncargadoSucursal', {
        url: '/listarEncargadoSucursal',
        templateUrl: './components/usuarios/encargadoSucursal/listarEncargadoSucursal/listarEncargadoSucursal.view.html',
        data:{
          pageTitle: 'Listar Encargado de Sucursal'
        },
        params: {
          objUsuarioTemp: ''
        },
        resolve: {
          load: ['$ocLazyLoad', ($ocLazyLoad) => {
            return $ocLazyLoad.load('./components/usuarios/encargadoSucursal/listarEncargadoSucursal/listarEncargadoSucursal.controller.js')
          }]
        }, 
        controller: 'controladorListarEncargadoSucursal',
        controllerAs: 'vm',
      })

      .state('modificarEncargadoSucursal', {
        url: '/modificarEncargadoSucursal',
        templateUrl: './components/usuarios/encargadoSucursal/modificarEncargadoSucursal/modificarEncargadoSucursal.view.html',
        data:{
          pageTitle: 'Editar Encargado de Sucursal'
        },
        params: {
          objUsuarioTemp: ''
        },
        resolve: {
          load: ['$ocLazyLoad', ($ocLazyLoad) => {
            return $ocLazyLoad.load('./components/usuarios/encargadoSucursal/modificarEncargadoSucursal/modificarEncargadoSucursal.controller.js')
          }]
        }, 
        controller: 'controladorModificarEncargadoSucursal',
        controllerAs: 'vm',
      })

      

    $urlRouterProvider.otherwise('/');
  };

})();
