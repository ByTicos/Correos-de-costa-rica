const express = require('express'),
      router = express.Router(),
      licencias = require('./licencias.api');

/**
 * 
 */
router.param('id', (req, res, next, id) => {
  req.body.id = id;
  next();
});

/**
 * Función que se encarga de registrar los usuarios dentro del local storage
 */
router.route('/save_licencias')
  .post((req, res) => {
    licencias.registrar(req,res);
});

/**
 * Función que obtiene todos los usuarios
 */
router.route('/getLicenciasData')
  .get((req, res) => {
    licencias.listarTodos(req,res);
});

router.route('/update_licencias')
  .put((req, res) => {
    paquetes.actualizar(req,res);
});






/**
 * Función que actualiza los usuarios
 */
router.route('/update_licencia')
  .put((req, res) => {
    licencias.actualizar(req,res);
});

module.exports = router;