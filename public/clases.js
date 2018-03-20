class Usuario{
    constructor(pCedula, pFoto, pPrimerNombre, pSegundoNombre, pPrimerApellido, pSegundoApellido, pEmail, pTelefono, pfechaNacimiento, pProvincia, pCanton, pDistrito, pDireccionExacta, pTipo,pSucursalAsignada, pPuesto){
        this.cedula = pCedula;
        this.foto = pFoto;
        this.primerNombre = pPrimerNombre;
        this.segundoNombre = pSegundoNombre;
        this.primerApellido = pPrimerApellido;
        this.segundoApellido = pSegundoApellido;
        this.correo = pEmail;
        this.telefono = pTelefono;
        this.fechaNacimiento = pfechaNacimiento;
        this.provincia = pProvincia;
        this.canton = pCanton;
        this.distrito = pDistrito;
        this.direccionExacta = pDireccionExacta;
        this.tipo = pTipo;
        this.listaPaquetes = [];
        this.sucursalAsignada = pSucursalAsignada;
        this.puesto = pPuesto;
        this.estado = 'activo';
    } 
    cambiarEstado(pEstado){
        this.estado = pEstado;
    }
      
}

class Paquete{
    constructor(pNumeroTracking, pDistribuidor, pPrecio, pPeso, pTipoArticulo, pDescripcion){
        this.tracking = pNumeroTracking;
        this.distribuidor = pDistribuidor;
        this.precio = pPrecio;
        this.peso = pPeso;
        this.tipoArticulo = pTipoArticulo;
        this.descripcion = pDescripcion;
        this.estado = 'activo';
        this.estadoTraslado = '';
        this.listaEstados = [];

    } 

    cambiarEstadoDeActividad(pEstado){
        this.estado = pEstado;
    }
    

      addEstado(pEstado){
        this.listaEstados.push(pEstado); 
    }

    getListaEstados(){
        return this.listaEstados;
    }

    
    mostrarEstadoTraslado(pEstado){
        this.estadoTraslado = pEstado;
    }


}

class Estado{
    constructor(pUsuario, pFecha, pHora, pEstado){
        this.usuario = pUsuario;
        this.fecha = pFecha;
        this.hora = pHora;
        this.estado = pEstado;
    }
 
    
}

// class Encargado extends Usuario{
//     constructor(pCedula, pFoto, pPrimerNombre, pSegundoNombre, pPrimerApellido, pSegundoApellido, pEmail, pTelefono, pfechaNacimiento, pProvincia, pCanton, pDistrito, pDireccionExacta, pTipo,pSucursalAsignada){
//         super(pCedula, pFoto, pPrimerNombre, pSegundoNombre, pPrimerApellido, pSegundoApellido, pEmail, pTelefono, pfechaNacimiento, pProvincia, pCanton, pDistrito, pDireccionExacta, pTipo);
//         this.sucursalAsignada = pSucursalAsignada;
//     }
// }
          


class Entidad{
    constructor(pNombre, pCedulaJuridica){
        this.nombre = pNombre;
        this.cedulaJuridica = pCedulaJuridica;
        this.convenios = [];
    }

    registrarConvenio(pConvenio){
        this.convenios.push(pConvenio);
    }
}

class Convenio{
    constructor(pNombreEntidad, pTipoTramite){
        this.nombreEntidad = pNombreEntidad;
        this.tipoTramite = pTipoTramite;
    }
}
