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
        url: '/dashboard',
        templateUrl: './components/main/dashboard/mainDashboard.view.html',
        data:{
          pageTitle: 'Dashboard'
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

      .state('main.registrarClienteAdmin', {
        url: '/registrarClienteAdmin',
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
          pageTitle: 'Lista de clientes'
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
          pageTitle: 'Modificar cliente'
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

      .state('main.registrarPreAlerta',{
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

      .state('main.editarPreAlerta', {
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

      
       .state('main.listaPreAlerta', {
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

      .state('main.PaquetesAdmin', {
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

       .state('main.listaEstados', {
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

      .state('main.sucursales', {
        url: '/sucursales',
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
        templateUrl: './components/usuarios/repartidores/registrarRepartidor/registroRepartidor.view.html',
        data:{
          pageTitle: 'Registro repartidor'
        },
        params: {
          objSucursalTemp: ''
        },
        resolve: {
          load: ['$ocLazyLoad', ($ocLazyLoad) => {
            return $ocLazyLoad.load('./components/usuarios/repartidores/registrarRepartidor/registroRepartidor.controller.js')
          }]
        },
        controller: 'controladorRepartidores',
        controllerAs: 'vm'
      })
      
      .state('main.listarsucursales', {
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

      .state('perfilRepartidor', {
        url:'/perfilRepartidor',
        templateUrl: './components/usuarios/repartidores/perfilRepartidores/perfilRepartidores.view.html',
        data:{
          pageTitle: 'Perfil de Repartidor'
        },
        params: {
          objRepartidorTemp:''
        },
        resolve: {
          load: [ '$ocLazyLoad', ($ocLazyLoad) => {
            return $ocLazyLoad.load('./components/usuarios/repartidores/perfilRepartidores/perfilRepartidores.view.html')
          }]
        },
        controller: 'controladorPerfilRepartidor',
        controllerAs: 'vm'
      })
      
       .state('editarRepartidor', {
        url:'/editarRepartidor',
        templateUrl: './components/usuarios/repartidores/editarRepartidores/editarRepartidor.view.html',
        data:{
          pageTitle: 'Editar Repartidor'
        },
        params: {
          objRepartidorTemp:''
        },
        resolve: {
          load: [ '$ocLazyLoad', ($ocLazyLoad) => {
            return $ocLazyLoad.load('./components/usuarios/repartidores/editarRepartidores/editarRepartidor.controller.js')
          }]
        },
        controller: 'controladorEditarRepartidor',
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
      })
  


      .state('main.registrarEncargadoAduana', {
        url: '/registrarEncargadoAduana',
        templateUrl: './components/usuarios/encargadoAduana/registrarEncargadoAduana/registrarEncargadoAduana.view.html',
        data:{
          pageTitle: 'Registro Encargado Aduana'
        },
        params: {
          objUsuarioTemp: ''
        },
        resolve: {
          load: ['$ocLazyLoad', ($ocLazyLoad) => {
            return $ocLazyLoad.load('./components/usuarios/encargadoAduana/registrarEncargadoAduana/registrarEncargadoAduana.controller.js')
          }]
        },
        controller: 'controladorRegistrarEncargadoAduana',
        controllerAs: 'vm'
      })

      .state('main.listarEncargadoAduana', {
        url: '/listarEncargadoAduana',
        templateUrl: './components/usuarios/encargadoAduana/listarEncargadoAduana/listarEncargadoAduana.view.html',
        data:{
          pageTitle: 'Listar Encargado de Aduana'
        },
        params: {
          objUsuarioTemp: ''
        },
        resolve: {
          load: ['$ocLazyLoad', ($ocLazyLoad) => {
            return $ocLazyLoad.load('./components/usuarios/encargadoAduana/listarEncargadoAduana/listarEncargadoAduana.controller.js')
          }]
        }, 
        controller: 'controladorListarEncargadoAduana',
        controllerAs: 'vm',
      })

      .state('main.modificarEncargadoAduana', {
        url: '/modificarEncargadoAduana',
        templateUrl: './components/usuarios/encargadoAduana/modificarEncargadoAduana/modificarEncargadoAduana.view.html',
        data:{
          pageTitle: 'Editar Encargado de Aduana'
        },
        params: {
          objUsuarioTemp: ''
        },
        resolve: {
          load: ['$ocLazyLoad', ($ocLazyLoad) => {
            return $ocLazyLoad.load('./components/usuarios/encargadoAduana/modificarEncargadoAduana/modificarEncargadoAduana.controller.js')
          }]
        }, 
        controller: 'controladorModificarEncargadoAduana',
        controllerAs: 'vm',
      })

      .state('main.paquetesEncargadoAduana', {
        url: '/paquetesEncargadoAduana',
        templateUrl: './components/usuarios/encargadoAduana/paquetesEncargadoAduana/paquetesEncargadoAduanas.view.html',
        data:{
          pageTitle: 'Paquetes Encargado de Aduana'
        },
        params: {
          objUsuarioTemp: ''
        },
        resolve: {
          load: ['$ocLazyLoad', ($ocLazyLoad) => {
            return $ocLazyLoad.load('./components/usuarios/encargadoAduana/paquetesEncargadoAduana/paquetesEncargadoAduanas.controller.js')
          }]
        }, 
        controller: 'controladorpaquetesEncargadoAduana',
        controllerAs: 'vm',
      })

      


    $urlRouterProvider.otherwise('/');
  };

})();
