const express = require('express'),
      router = express.Router(),
      entidades = require('./entidades.api');

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
router.route('/save_entidad')
  .post((req, res) => {
    entidades.registrar(req,res);
});

/**
 * Función que obtiene todos los usuarios
 */
router.route('/get_all_entidades')
  .get((req, res) => {
    entidades.listarTodos(req,res);
});

/**
 * Función que actualiza los usuarios
 */
router.route('/update_entidades')
  .put((req, res) => {
    entidades.actualizar(req,res);
});

module.exports = router;