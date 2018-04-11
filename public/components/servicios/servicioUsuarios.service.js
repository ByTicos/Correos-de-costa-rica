(() => {
    'use strict';
    angular
        .module('correos')
        .service('servicioUsuarios', servicioUsuarios)

    servicioUsuarios.$inject = ['$log', '$http', 'dataStorageFactory'];

    function servicioUsuarios($log, $http, dataStorageFactory) {

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
            actualizarRepartidor: _actualizarRepartidor,
            // actualizarLicencias: _actualizarLicencias,
            addTarjeta: _addTarjeta,
            getTarjeta: _getTarjeta,
            getRol: _getRol,
            getRolSucursal: _getRolSucursal,
            getRolNombre: _getRolNombre,
            getAllPaquetes: _getAllPaquetes,
            actualizarTarjeta: _actualizarTarjeta,
            addPaqueteConvenio:_addPaqueteConvenio,
            getPaquetesConvenio:_getPaquetesConvenio,
            getUsuarioActivo:_getUsuarioActivo,
            solicitarEnvioPaqueteConvenio:_solicitarEnvioPaqueteConvenio,
            getAllPaquetesConvenio:_getAllPaquetesConvenio
            }
        return publicAPI

        function _addUsuario(pNuevoUsuario) {
            let listaUsuarios = _getUsuarios(),
                registroExitoso,
                usuarioRepetido = false;

            for (let i = 0; i < listaUsuarios.length; i++) {
                if (listaUsuarios[i].correo == pNuevoUsuario.correo) {
                    usuarioRepetido = true;
                }
            }

            if (usuarioRepetido === false) {
                registroExitoso = dataStorageFactory.setUserData(pNuevoUsuario);
            } else {
                registroExitoso = false;
            }

            return registroExitoso;
        }



        function _getUsuarios() {
            let admin = new Usuario('', '', 'Administrador', '', '', '', 'administrador@correos.cr', '', '', '', '', '', '', 'admin', '5', '', 'Administrador', '');
            let listaUsuarios = [admin];
            let listaUsuariosBD = dataStorageFactory.getUsersData();
            listaUsuariosBD.forEach(objUsuario => {
                    let objUsuarioTemp = new Usuario(objUsuario.cedula, objUsuario.foto, objUsuario.primerNombre, objUsuario.segundoNombre, objUsuario.primerApellido, objUsuario.segundoApellido, objUsuario.correo, objUsuario.telefono, objUsuario.fechaNacimiento, objUsuario.provincia, objUsuario.canton, objUsuario.distrito, objUsuario.direccionExacta, objUsuario.contrasenna,objUsuario.tipo, objUsuario.sucursalAsignada, objUsuario.puesto, objUsuario.vehiculo, []);
                    objUsuarioTemp.cambiarEstado(objUsuario.estado);


                    objUsuario.listaLicencias.forEach(objLicencia => {

                        let objLicenciaTemp = new Licencia(objLicencia.numLicencia, objLicencia.tipoLicencia, objLicencia.vencimiento);
                        objUsuarioTemp.listaLicencias.push(objLicenciaTemp);
                    });



                    objUsuario.listaTarjetas.forEach(objTarjeta => {
                        let objTarjetaTemp = new Tarjeta(objTarjeta.id, objTarjeta.nombre, objTarjeta.numero, objTarjeta.expiracion, objTarjeta.cvv, objTarjeta.estado);

                        objUsuarioTemp.registrarTarjeta(objTarjetaTemp);
                    });

                    objUsuario.listaPaquetesConvenios.forEach(objPaqueteConv => {
                        let objPaqueteConvTemp = new PaqueteConv(objPaqueteConv.cliente, objPaqueteConv.convenio, new Date(objPaqueteConv.fecha));
                        objPaqueteConvTemp.cambiarEstadoTraslado(objPaqueteConv.estadoTraslado);

                        objUsuarioTemp.agregarPaqueteConvenio(objPaqueteConvTemp);
                    });

                    objUsuario.listaPaquetes.forEach(objPaquete => {
                        let objPaqueteTemp = new Paquete(objPaquete.usuario, objPaquete.tracking, objPaquete.distribuidor, objPaquete.precio,objPaquete.peso, objPaquete.Kilometro,objPaquete.tipoArticulo, objPaquete.descripcion, objPaquete.sucursal, objPaquete.repartidor);

                        let listaEstados = objPaquete.listaEstados;

                        // objTarjetaTemp.cambiarEstadoDeActividadTarjeta(objTarjeta.estado);

                        listaEstados.forEach(objEstado => {
                            let fecha = new Date(objEstado.fecha);
                            let hora = fecha;
                            let estadoTemp = new Estado(objEstado.usuario, fecha, hora, objEstado.estado);

                            objPaqueteTemp.addEstado(estadoTemp);
                            
                        });
                        objPaqueteTemp.cambiarEstadoDeActividad(objPaquete.estado);
                        objPaqueteTemp.mostrarEstadoTraslado(objPaquete.estadoTraslado);

                        objUsuarioTemp.agregarPaquete(objPaqueteTemp);
                    });
                    
                    listaUsuarios.push(objUsuarioTemp);
                });

                console.log('Datos de la BD convertidos en clases');
                console.log('Lista de usuarios ', listaUsuarios);
            return listaUsuarios;
        };

        function _addPaqueteConvenio(pNuevoPaquete){
            let listaUsuarios = _getUsuarios();
            let usuario = pNuevoPaquete.cliente;
            let respuesta = true;
            for (let i = 0; i < listaUsuarios.length; i++) {
                if (usuario == listaUsuarios[i].correo) {
                    listaUsuarios[i].agregarPaqueteConvenio(pNuevoPaquete);
                }
            }
            console.log(listaUsuarios);
            actualizarLocal(listaUsuarios);
            return respuesta;
        };
        function _getPaquetesConvenio() {
            let listaUsuarios = _getUsuarios();
            let listaPaquetesConvenios = [];
            let session = JSON.parse(sessionStorage.getItem('sesion'));

            for (let i = 0; i < listaUsuarios.length; i++) {
                if (session.correo == listaUsuarios[i].correo) {
                    if (listaUsuarios[i].listaPaquetesConvenios != null) {
                        listaPaquetesConvenios = listaUsuarios[i].listaPaquetesConvenios;
                    }
                }
            }
            return listaPaquetesConvenios;
        };

        function _getAllPaquetesConvenio() {
            let listaUsuarios = _getUsuarios();
            let listaPaquetesConvenios = [];
            for (let i = 0; i < listaUsuarios.length; i++) {
                if (listaUsuarios[i].listaPaquetesConvenios != null) {
                    for (let j = 0; j < listaUsuarios[i].listaPaquetesConvenios.length; j++) {
                        listaPaquetesConvenios.push(listaUsuarios[i].listaPaquetesConvenios[j]);
                        
                    }
                }
            }
            return listaPaquetesConvenios;
        };

        function _solicitarEnvioPaqueteConvenio(pPaquete) {
            let listaUsuarios = _getUsuarios();
            let sesion = JSON.parse(sessionStorage.getItem('sesion'));
            let usuario = {};
            for (let i = 0; i < listaUsuarios.length; i++) {
                if (listaUsuarios[i].correo = sesion.correo) {
                    for (let j = 0; j < listaUsuarios[i].listaPaquetesConvenios.length; j++) {
                        if (listaUsuarios[i].listaPaquetesConvenios[j].cliente == pPaquete.cliente && listaUsuarios[i].listaPaquetesConvenios[j].convenio == pPaquete.convenio) {
                            listaUsuarios[i].listaPaquetesConvenios[j].cambiarEstadoTraslado('En proceso de envío');
                            usuario = listaUsuarios[i];
                        }
                    }

                }
            }
            _actualizarUsuario(usuario);
        }
        
        
        function _actualizarUsuario(pUsuario) {
            let listaUsuarios = _getUsuarios();

            for (let i = 0; i < listaUsuarios.length; i++) {
                if (pUsuario.correo == listaUsuarios[i].correo) {
                    listaUsuarios[i] = pUsuario;
                }
            }
            actualizarLocal(listaUsuarios);
        };

        //    function encontrarTraking(pNuevoPaquete) {
        //        let listaUsuarios = _getUsuarios ();
        //        let trackingEncontrado;

        //        for (let i = 0; i < listaUsuarios.length; i++) {
        //            let listaPaquetes = listaUsuarios[i].listaPaquetes;
        //            for (let j = 0; j < listaPaquetes.length; j++) {
        //                if (listaPaquetes[j].tracking == pNuevoPaquete.tracking) {
        //                    trackingEncontrado = listaPaquetes[j].tracking;
        //                }
        //            }
        //        }
        //        return trackingEncontrado;
        //    };

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
            let listaUsuarios = _getUsuarios();
            let sesion = JSON.parse(sessionStorage.getItem('sesion'));
            for (let i = 0; i < listaUsuarios.length; i++) {
                if(listaUsuarios[i].correo == sesion.correo){
                    for (let j = 0; j < listaUsuarios[i].listaPaquetes.length; j++) {
                        if (listaUsuarios[i].listaPaquetes[j].tracking == pObjpaquete.tracking) {
                            listaUsuarios[i].listaPaquetes[j] = pObjpaquete;
                        }
                    }
                }
            }
            actualizarLocal(listaUsuarios);

        };


        function _actualizarEstadoPaquete(pObjpaquete) {
            let listaUsuarios = _getUsuarios();
            
            for (let i = 0; i < listaUsuarios.length; i++) {
                if(listaUsuarios[i].primerNombre == pObjpaquete.usuario){
                    for (let j = 0; j < listaUsuarios[i].listaPaquetes.length; j++) {
                        if (listaUsuarios[i].listaPaquetes[j].tracking == pObjpaquete.tracking) {
                            listaUsuarios[i].listaPaquetes[j] = pObjpaquete;
                        }
                    }
                }
            }
            actualizarLocal(listaUsuarios);

        };


        function actualizarLocal(plistaActualizada) {
            localStorage.setItem('usuariosLS', JSON.stringify(plistaActualizada));
        };
        function actualizarPaqueteLocal(plistaPaqueteActualizada){
            localStorage.setItem('paquetesLS', JSON.stringify(plistaPaqueteActualizada));
        };
        function actualizarTarjetaLocal(pListaTarjetaActualizada){
            localStorage.setItem('tarjetasLS', JSON.stringify(pListaTarjetaActualizada));
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
            };

        function _getRol() {
            let session = JSON.parse(sessionStorage.getItem('sesion'));
            let rol = session.tipo;
            return rol;
        }

        function _getRolSucursal() {
            let session = JSON.parse(sessionStorage.getItem ('sesion'));
            let rol = session.sucursalAsignada;
            return rol;
        }
        
        function _getRolNombre() {
            let session = JSON.parse(sessionStorage.getItem ('sesion'));
            let rol = session.nombre;
            return rol;
        }
        

        function _getUsuarioActivo(){
            let listaUsuarios= _getUsuarios();
            let sesion = JSON.parse(sessionStorage.getItem('sesion'));
            let usuarioActivo = '';
            for (let i = 0; i < listaUsuarios.length; i++) {
                if(sesion.correo == listaUsuarios[i].correo){
                    usuarioActivo = listaUsuarios[i].primerNombre +' '+ listaUsuarios[i].segundoNombre +' ' + listaUsuarios[i].primerApellido+' '; 
                }   
                
            }
            return usuarioActivo;
        }

        function _addTarjeta (pNuevaTarjeta) {
            let listaUsuarios = _getUsuarios();
            let sesion = JSON.parse(sessionStorage.getItem('sesion'));
            let respuesta = true;

            for(let i = 0; i < listaUsuarios.length; i++){
                if (sesion.nombre == listaUsuarios[i].primerNombre){
                listaUsuarios[i].registrarTarjeta(pNuevaTarjeta);
                }
        
            }

            actualizarLocal(listaUsuarios);
            return respuesta;
            
        };



        function _getTarjeta(){
            let listaUsuarios = _getUsuarios();
            let listaTarjetas = [];
            let session = JSON.parse (sessionStorage.getItem ('sesion'));

            for (let i = 0; i < listaUsuarios.length; i++) {
                if (session.nombre == listaUsuarios[i].primerNombre ) {
                    if (listaUsuarios[i].listaTarjetas != null) {
                       listaTarjetas =  listaUsuarios[i].listaTarjetas;
                    }
                }
                
            }
            
            return listaTarjetas;
        };

        function _actualizarRepartidor(pObjRepartidor) {
            let listaUsuarios = _getUsuarios();
            let sesion = JSON.parse(sessionStorage.getItem('sesion'));
            for (let i = 0; i < listaUsuarios.length; i++) {
                if(listaUsuarios[i].correo == sesion.correo){
                    for (let j = 0; j < listaUsuarios[i].listaUsuarios.length; j++) {
                        if (listaUsuarios[i].listaUsuarios[j].tipo == '3') {
                            listaUsuarios[i].listaUsuarios[j] = licencias;
                        }
                    }
                }
            }
            actualizarLocal(listaUsuarios);

        }; 

        function _actualizarTarjeta(pObjTarjeta) {
            let listaUsuarios = _getUsuarios();
            let sesion = JSON.parse(sessionStorage.getItem('sesion'));

            for (let i = 0; i < listaUsuarios.length; i++) {
                if(listaUsuarios[i].correo == sesion.correo){
                    for (let j = 0; j < listaUsuarios[i].listaTarjetas.length; j++) {
                        if (listaUsuarios[i].listaTarjetas[j].id == pObjTarjeta.id) {
                        listaUsuarios[i].listaTarjetas[j] = pObjTarjeta;
                            }
                        }   
                    }

                }
                actualizarLocal(listaUsuarios);
            };

        };
        
})();