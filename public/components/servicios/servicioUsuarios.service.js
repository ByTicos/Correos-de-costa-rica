(() => {
    'use strict';
    angular
        .module('correos')
        .service('servicioUsuarios', servicioUsuarios)

    servicioUsuarios.$inject = ['$log', '$http'];

    function servicioUsuarios($log, $http) {

        const asyncLocalStorage = {
            setItem: function (key, value) {
                return Promise.resolve().then(() => {
                    let response = true;
                    localStorage.setItem(key, JSON.stringify(value));
                    return response
                });
            }
        };

        let publicAPI = {
            addUsuario: _addUsuario,
            getUsuarios: _getUsuarios,
            actualizarUsuario: _actualizarUsuario,
            addPaquete: _addPaquete,
            getPaquete: _getPaquete,
            actualizarPaquete: _actualizarPaquete,
            actualizarEstadoPaquete: _actualizarEstadoPaquete,
            addLicencias: _addLicencias,
            getLicencias: _getLicencias,
            actualizarLocal: _actualizarLicencia,
            addTarjeta: _addTarjeta,
            getTarjeta: _getTarjeta,
            getRol: _getRol,
            getAllPaquetes: _getAllPaquetes
                }
        return publicAPI

        function _addUsuario(pNuevoUsuario) {
            let listaUsuarios = _getUsuarios();
            let respuesta = true;
            listaUsuarios.push(pNuevoUsuario);

            asyncLocalStorage.setItem('usuariosLS', listaUsuarios).then((response) => {
                respuesta = response;
            });

            return respuesta;
        };

        function _getUsuarios() {
            let listaUsuarios = [];
            let listaUsuariosLocal = JSON.parse(localStorage.getItem("usuariosLS"));
            if (listaUsuariosLocal == null) {
                listaUsuarios = [];
            }
            else {
                listaUsuariosLocal.forEach(objUsuario => {
                    let objUsuarioTemp = new Usuario(objUsuario.cedula, objUsuario.foto, objUsuario.primerNombre, objUsuario.segundoNombre, objUsuario.primerApellido, objUsuario.segundoApellido, objUsuario.correo, objUsuario.telefono, objUsuario.fechaNacimiento, objUsuario.provincia, objUsuario.canton, objUsuario.distrito, objUsuario.direccionExacta, objUsuario.tipo,objUsuario.sucursalAsignada, objUsuario.puesto,objUsuario.vehiculo);
                    objUsuarioTemp.cambiarEstado(objUsuario.estado);

                    objUsuario.listaLicencias.forEach(objLicencia => {
                        let objLicenciaTemp = new Licencia(objLicencia.numLicencia, objLicencia.tipoLicencia, objLicencia.vencimiento)
                    })

                     objUsuario.listaPaquetes.forEach(objPaquete => {
                    let objPaqueteTemp = new Paquete(objPaquete.usuario,objPaquete.tracking, objPaquete.distribuidor, objPaquete.precio, objPaquete.peso, objPaquete.tipoArticulo, objPaquete.descripcion );

                    let listaEstados =  objPaquete.listaEstados;

                    listaEstados.forEach(objEstado => {
                        let fecha = new Date (objEstado.fecha);
                        let hora = fecha;
                        let estadoTemp = new Estado(objEstado.usuario, fecha,hora, objEstado.estado);

                      objPaqueteTemp.addEstado(estadoTemp);
                    });

                   
                    objPaqueteTemp.cambiarEstadoDeActividad(objPaquete.estado);
                    objPaqueteTemp.mostrarEstadoTraslado (objPaquete.estadoTraslado);
                    
                   objUsuarioTemp.agregarPaquete(objPaqueteTemp);
                });

                    listaUsuarios.push(objUsuarioTemp);
                });
            }
            return listaUsuarios;
        };
        
        function _actualizarUsuario(pUsuario) {
            let listaUsuarios = _getUsuarios();

            for (let i = 0; i < listaUsuarios.length; i++) {
                if (pUsuario.cedula == listaUsuarios[i].cedula) {
                    listaUsuarios[i] = pUsuario;
                }
            }
            actualizarLocal(listaUsuarios);
        };

           function _addPaquete (pNuevoPaquete) {
                let listaUsuarios = _getUsuarios();
                let sesion = JSON.parse(sessionStorage.getItem('sesion'));
                let respuesta = true;

                for(let i = 0; i < listaUsuarios.length; i++){
                    if (sesion.nombre == listaUsuarios[i].primerNombre){
                    listaUsuarios[i].agregarPaquete(pNuevoPaquete);
                    }
                }

                actualizarLocal(listaUsuarios);
                return respuesta;
                
            };


        function _getPaquete() {
            let ListaUsuarios = _getUsuarios();
            let listaPaquetes = [];
            let session = JSON.parse (sessionStorage.getItem ('sesion'));

            for (let i = 0; i < ListaUsuarios.length; i++) {
                if (session.nombre == ListaUsuarios[i].primerNombre ) {
                    if (ListaUsuarios[i].listaPaquetes != null) {
                       listaPaquetes =  ListaUsuarios[i].listaPaquetes;
                    }
                }
                
            }
            
            return listaPaquetes;
        };

        function _getAllPaquetes(){
        let listaUsuarios = _getUsuarios();
        let listaPaquetes = [];
        for (let i = 0; i < listaUsuarios.length; i++){
            let listaPaquetesTemp = listaUsuarios[i].listaPaquetes;
            if(listaPaquetesTemp != []){
            let paqueteTemp = {};
            for(let j = 0; j < listaPaquetesTemp.length; j++){
                paqueteTemp = listaPaquetesTemp[j];
                listaPaquetes.push(paqueteTemp);
            }
            }
        }
        return listaPaquetes;
        }


        function _actualizarPaquete(pObjpaquete) {
            let listaPaquetes = _getPaquete();

            for (let i = 0; i < listaPaquetes.length; i++) {
                if (listaPaquetes[i].tracking == pObjpaquete.tracking ) {
                   
                    listaPaquetes[i] = pObjpaquete;
                }
            }
            actualizarPaqueteLocal (listaPaquetes);
        };

        function _actualizarEstadoPaquete(pObjpaquete) {
            let listaPaquetes = _getAllPaquetes();

            for (let i = 0; i < listaPaquetes.length; i++) {
                if (listaPaquetes[i].tracking == pObjpaquete.tracking ) {
                   
                    listaPaquetes[i] = pObjpaquete;
                }
            }
            actualizarPaqueteLocal (listaPaquetes);
        };


        function actualizarLocal(plistaActualizada) {
            localStorage.setItem('usuariosLS', JSON.stringify(plistaActualizada));
        }
        function actualizarPaqueteLocal(plistaPaqueteActualizada){
            localStorage.setItem('paquetesLS', JSON.stringify(plistaPaqueteActualizada));
        }

        function _addLicencia(pNuevaLicencia) {
            let listaLicencia = _getLicencia;
                let respuesta = true;
                
                listaLicencia.push(pNuevaLicencia);
    
                asyncLocalStorage.setItem('licenciasLS', listaLicencia).then((response) => {
                    respuesta = response;
                });
    
               return respuesta;
            };

            function _getLicencia() {
                let listaLicencia = [];
                let listaLicenciaLocal = JSON.parse(localStorage.getItem('licenciasLS'));
    
                if(listaLicenciaLocal == null){
                   listaLicencia = [];
     
                }else{
                    listaLicenciaLocal.forEach(objLicencia => {
                        let objLicenciaTemp = new Licencia(objLicencia.numLicencia, objLicencia.tipoLicencia, objLicencia.pVencimientoLicencia );
    
                        listaLicencia.push(objLicenciaTemp);
                    });
                }
                return listaLicencia;
            };
    
            function _actualizarLicencia(pObjlicencia) {
                let listaLicencia = _getLicencia();
    
                for (let i = 0; i < listaLicencia.length; i++) {
                    if (listaLicencia[i].traking == pObjlicencia.traking ) {
                       
                        listaLicencia[i] = pObjlicencia;
                    }
                }
                actualizarLicenciaLocal (listaLicencia);
            }

            function _getRol() {
                let session = JSON.parse(sessionStorage.getItem ('sesion'));
                let rol = session.tipo;
                return rol;
            };


        function _addTarjeta(pnuevaTarjeta){
            let listaTarjeta = _getTarjeta();
            let respuesta = true;
            listaTarjeta.push(pnuevaTarjeta);

            asyncLocalStorage.setItem('tarjetaLS', listaTarjeta).then((response) =>{
                respuesta = response;
            });

            return respuesta;
        }

        function _getTarjeta(){
            let listaTarjeta = [];
            let listaTarjetaLocal = JSON.parse(localStorage.getItem("tarjetaLS"));

            if(listaTarjetaLocal == null){
                listaTarjeta = [];
            }else{
                listaTarjetaLocal.forEach(obj => {
                    let objTarjeta = new Tarjeta (obj.nombre, obj.numero, obj.expiracion,obj.cvc);

                    listaTarjeta.push(objTarjeta);
                });
    
                
            }
    
            return listaTarjeta;
        }

    }
})();