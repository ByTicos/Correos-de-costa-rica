const UserModel = require('./usuarios.model');

module.exports.registrar = (req, res) => {
  var newUser = new UserModel({
    cedula              :  req.body.cedula,
    foto                :  req.body.foto,
    primerNombre        :  req.body.primerNombre,
    segundoNombre       :  req.body.segundoNombre,
    primerApellido      :  req.body.primerApellido,
    segundoApellido     :  req.body.segundoApellido,
    correo              :  req.body.correo,
    telefono            :  req.body.telefono,
    fechaNacimiento     :  req.body.fechaNacimiento,
    provincia           :  req.body.provincia,
    canton              :  req.body.canton,
    distrito            :  req.body.distrito,
    direccionExacta     :  req.body.direccionExacta,
    tipo                :  req.body.tipo,
    listaPaquetes       :  req.body.listaPaquetes,
    sucursalAsignada    :  req.body.sucursalAsignada,
    puesto              :  req.body.puesto,
    vehiculo            :  req.body.vehiculo,
    listaLicencias      :  req.body.listaLicencias,
    estado              :  req.body.estado,
    listaTarjetas       :  req.body.listaTarjetas,
    listaPaquetesConvenios    :  req.body.listaPaquetesConvenios,
    contrasenna         :  req.body.contrasenna,
  });

  newUser.save((err) => {
    if(err){
      res.json({success:false, msj: 'Ha ocurrido un error en el registro de usuarios' + err});
    }else{
      res.json({success:true, msj:'Se registró el usuario correctamente'});
    }
  });
};

module.exports.listarTodos = (req,res) => {
  UserModel.find().then((usuarios) => {
    res.send(usuarios);
  });
};

module.exports.actualizar = (req,res) => {
  UserModel.findByIdAndUpdate(req.body.correo, {$set: req.body}, (err, user) => {
    if (err){
      res.json({success:false,msj:'No se ha actualizado.' + handleError(err)});

    } else{
      res.json({success:true,msj:'Se ha actualizado correctamente.' + res});
    }
  });
};