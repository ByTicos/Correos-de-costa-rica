const TarjetasModel = require('./tarjetas.model');

module.exports.registrar = (req, res) => {
  var newEntidad = new TarjetasModel({
    id              :  req.body.id,
    nombre      :  req.body.nombre,
    numero           :  req.body.numero,
    expiracion           :  req.body.expiracion,
    cvv           :  req.body.cvv,
    estado           :  req.body.estado,
  });

  newEntidad.save((err) => {
    if(err){
      res.json({success:false, msj: 'Ha ocurrido un error en el registro de tarjetas' + err});
    }else{
      res.json({success:true, msj:'Se registró la entidad correctamente'});
    }
  });
};

module.exports.listarTodos = (req,res) => {
  TarjetasModel.find().then((tarjetas) => {
    res.send(tarjetas);
  });
};

module.exports.actualizar = (req,res) => {
  TarjetasModel.findByIdAndUpdate(req.body._id, { $set: req.body}, (err, entidad) => {
    if (err){
      res.json({success:false,msg:'No se ha actualizado.' + handleError(err)});

    } else{
      res.json({success:true,msg:'Se ha actualizado correctamente.' + res});
    }
  });
};