//Requerimos mongoose
const mongoose = require('mongoose');

//Esquema de usuarios
var SucursalSchema = new mongoose.Schema({
  id : {type : String, required : true, unique: true},
  nombre : {type : String, required : true},
  provincia : {type : String, required : true},
  canton : {type : String, required : true},
  distrito : {type : String, required : true},
  telefono : {type : String, required : true},
  estado : {type : String,}
  
});

//nombre del modelo dentro del back end y el userSchema es el nombre dentro de mongoose
module.exports = mongoose.model('Sucursales', SucursalSchema); 
//User va en mayúscula y singular aunque en la bd todo se pone en minúscula y plural