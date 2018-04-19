const LicenciaModel = require('./licencias.model');

module.exports.registrar = (req, res) => {
  var newLicencia = new LicenciaModel({
    numLicencia : req.body.numLicencia,
    tipoLicencia: req.body.tipoLicencia,
    vencimiento : req.body.vencimiento,
  });

  newLicencia.save((err) => {
    if(err){
      res.json({success:false, msj: 'Ha ocurrido un error en el registro de su licencia' + err});
    }else{
      res.json({success:true, msj:'Se registró la licencia correctamente'});
    }
  });
};

module.exports.listarTodos = (req,res) => {
  LicenciaModel.find().then((licencias) => {
    res.send(licencias);
  });
};

module.exports.actualizar = (req,res) => {
  LicenciaModel.findByIdAndUpdate(req.body._id, { $set: req.body}, (err, licencias) => {
    if (err){
      res.json({success:false,msg:'No se ha actualizado.' + handleError(err)});

    } else{
      res.json({success:true,msg:'Se ha actualizado correctamente.' + res});
    }
  });
};

