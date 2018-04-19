const mongoose = require ('mongoose');

var LicenciaSchema = new mongoose.Schema ({
  numLicencia : {type : String},
  tipoLicencia : {type : String},
  vencimiento  : {type : Date}
});

module.exports = mongoose.model('Licencia', LicenciaSchema);