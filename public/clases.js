class Usuario{
    constructor(pCedula, pFoto, pPrimerNombre, pSegundoNombre, pPrimerApellido, pSegundoApellido, pEmail, pTelefono, pfechaNacimiento, pProvincia, pCanton, pDistrito, pDireccionExacta, pTipo,pSucursalAsignada){
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
        


    } 
      
}

class Paquete{
    constructor(pNumeroTraking, pDistribuidor, pPrecio, pPeso, pTipoArticulo, pDescripcion){
        this.traking = pNumeroTraking;
        this.distribuidor = pDistribuidor;
        this.precio = pPrecio;
        this.peso = pPeso;
        this.tipoArticulo = pTipoArticulo;
        this.descripcion = pDescripcion;

    } 
      
          
}

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