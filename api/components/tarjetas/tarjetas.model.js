//Requerimos mongoose
const mongoose = require('mongoose');

//Esquema de usuarios
var TarjetaSchema = new mongoose.Schema({
  id : {type : String, required : true},
  nombre : {type : String, required : true},
  numero : {type : Array, required : true},
  expiracion : {type : Array, required : true},
  cvv : {type : Array, required : true},
  estado : {type : Array, required : true}
});

//nombre del modelo dentro del back end y el userSchema es el nombre dentro de mongoose
module.exports = mongoose.model('Tarjetas', TarjetaSchema); 
//User va en mayúscula y singular aunque en la bd todo se pone en minúscula y plural