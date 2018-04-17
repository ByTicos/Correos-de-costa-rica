const express = require('express'),
      router = express.Router(),
      articulos = require('./articulos.api');

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
router.route('/save_articulo')
  .post((req, res) => {
    articulos.registrar(req,res);
});

/**
 * Función que obtiene todos los usuarios
 */
router.route('/get_all_articulos')
  .get((req, res) => {
    articulos.listarTodos(req,res);
});

/**
 * Función que actualiza los usuarios
 */
router.route('/buscar_articulo_id')
  .post(function (req, res) {
    articulos.buscar_articulo_por_id(req, res);
  });


router.route('/update_articulos')
  .put((req, res) => {
    articulos.actualizar(req,res);
});

module.exports = router;