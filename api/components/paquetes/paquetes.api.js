const PaqueteModel = require('./paquetes.model');

module.exports.registrar = (req, res) => {
  var newPaquete = new PaqueteModel({
    usuario     : req.body.usuario,
    tracking    :  req.body.tracking,
    distribuidor    :  req.body.distribuidor,
    precio    :  req.body.precio,
    peso    :  req.body.peso,
    kilometro    :  req.body.kilometro,
    tipoArticulo    :  req.body.tipoArticulo,
    descripcion    :  req.body.descripcion,
    sucursal    :  req.body.sucursal,
    repartidor    :  req.body.repartidor,
    estado    :  req.body.estado,
    estadoTraslado    :  req.body.estadoTraslado,
    listaEstados    :  req.body.listaEstados,
  });

  newPaquete.save((err) => {
    if(err){
      res.json({success:false, msj: 'Ha ocurrido un error en el registro de paquete' + err});
    }else{
      res.json({success:true, msj:'Se registró el paquete correctamente'});
    }
  });
};

module.exports.listarTodos = (req,res) => {
  PaqueteModel.find().then((paquetes) => {
    res.send(paquetes);
  });
};

module.exports.actualizar = (req,res) => {
  PaqueteModel.findByIdAndUpdate(req.body._id, { $set: req.body}, (err, paquete) => {
    if (err){
      res.json({success:false,msg:'No se ha actualizado.' + handleError(err)});

    } else{
      res.json({success:true,msg:'Se ha actualizado correctamente.' + res});
    }
  });
};