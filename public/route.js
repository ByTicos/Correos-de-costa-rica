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

      .state('main', {
        url: '/main',
        templateUrl: './components/main/main.view.html',
        data:{
          pageTitle: 'Iniciar sesión'
        },
        resolve: {
          load: ['$ocLazyLoad', ($ocLazyLoad) => {
            return $ocLazyLoad.load('./components/main/main.controller.js')
          }]
        },
        controller: 'controladorMain',
        controllerAs: 'vm'
      })

      $stateProvider
      .state('main.dashboard', {
        url: 'dashboard',
        templateUrl: './components/main/dashboard/mainDashboard.view.html',
        data:{
          pageTitle: 'Dashboard'
        }
      })

      .state('main.registrarCliente', {
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
      
      .state('main.listarCliente', {
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
      .state('main.modificarCliente', {
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

      .state('registrarPreAlerta',{
        url: '/registrarPreAlerta',
        templateUrl: './components/paquetes/registrarPreAlerta/registroPreAlerta.view.html',
        data: {
          pageTitle: 'Registro pre-alerta'
        },
         params: {
          objPaqueteTemp: ''
        },
        resolve: {
          load: ['$ocLazyLoad', ($ocLazyLoad) => {
            return $ocLazyLoad.load('./components/paquetes/registrarPreAlerta/registroPreAlerta.controller.js')
          }]
        },
        controller: 'controladorPreAlerta',
        controllerAs: 'vm'
      })

      .state('editarPreAlerta', {
        url: '/editarPreAlerta',
        templateUrl: './components/paquetes/editarPreAlerta/editarPreAlerta.view.html',
        data:{
          pageTitle: 'Editar Paquete'
        },
        params: {
          objPaqueteTemp: ''
        },
        resolve: {
          load: ['$ocLazyLoad', ($ocLazyLoad) => {
            return $ocLazyLoad.load('./components/paquetes/editarPreAlerta/editarPreAlerta.controller.js')
          }]
        },
        controller: 'controladorEditarPreAlerta',
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

      
       .state('listaPreAlerta', {
        url: '/listaPreAlerta',
        templateUrl: './components/paquetes/listarPreAlerta/listaPreAlerta.view.html',
        data:{
          pageTitle: 'lista de pedidos'
        },
        params: {
          objPedidoTemp: ''
        },
        resolve: {
          load: ['$ocLazyLoad', ($ocLazyLoad) => {
            return $ocLazyLoad.load('./components/paquetes/listarPreAlerta/listaPreAlerta.controller.js')
          }]
        },
        controller: 'controladorListaPreAlerta',
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

      .state('PaquetesAdmin', {
        url: '/PaquetesAdmin',
        templateUrl: './components/admin/listaPaquetes.view.html',
        data:{
          pageTitle: 'Filtrar Paquetes'
        },
        params: {
          objEstadoTemp: ''
        },
        resolve: {
          load: ['$ocLazyLoad', ($ocLazyLoad) => {
            return $ocLazyLoad.load('./components/admin/listaPaquetes.controller.js')
          }]
        },
        controller: 'controladorListaPaquetesAdmin',
        controllerAs: 'vm'
      })

       .state('listaEstados', {
        url: '/listaEstados',
        templateUrl: './components/admin/listaEstadosPaquetes.view.html',
        data:{
          pageTitle: 'Filtrar Estados'
        },
        params: {
          objEstadoTemp: ''
        },
        resolve: {
          load: ['$ocLazyLoad', ($ocLazyLoad) => {
            return $ocLazyLoad.load('./components/admin/listaEstadosPaquetes.controller.js')
          }]
        },
        controller: 'controladorListaEstados',
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
      

      .state('main.registrarEncargadoSucursal', {
        url: 'registrarEncargadoSucursal',
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

      .state('main.listarEncargadoSucursal', {
        url: 'listarEncargadoSucursal',
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

      .state('main.modificarEncargadoSucursal', {
        url: 'registrarEncargadoSucursal',
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

      .state('main.paquetesEncargadoSucursal', {
        url: '/paquetesEncargadoSucursal',
        templateUrl: './components/usuarios/encargadoSucursal/paquetesEncargadoSucursal/paquetesEncargadoSucursal.view.html',
        data:{
          pageTitle: 'Paquetes Encargado de Sucursal'
        },
        params: {
          objUsuarioTemp: ''
        },
        resolve: {
          load: ['$ocLazyLoad', ($ocLazyLoad) => {
            return $ocLazyLoad.load('./components/usuarios/encargadoSucursal/paquetesEncargadoSucursal/paquetesEncargadoSucursal.controller.js')
          }]
        }, 
        controller: 'controladorPaquetesEncargadoSucursal',
        controllerAs: 'vm',
      })

      

    $urlRouterProvider.otherwise('/');
  };

})();
