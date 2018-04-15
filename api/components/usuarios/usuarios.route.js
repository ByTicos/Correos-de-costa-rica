const express = require('express'),
      router = express.Router(),
      users = require('./usuarios.api');

/**
 * 
 */
router.param('id', (req, res, next, id) => {
  req.body.correo = id;
  next();
});

/**
 * Función que se encarga de registrar los usuarios dentro del local storage
 */
router.route('/save_user')
  .post((req, res) => {
    users.registrar(req,res);
});

/**
 * Función que obtiene todos los usuarios
 */
router.route('/get_all_users')
  .get((req, res) => {
    users.listarTodos(req,res);
});

/**
 * Función que actualiza los usuarios
 */
router.route('/update_user')
  .put((req, res) => {
    users.actualizar(req,res);
});

router.route('/buscar_user_id')
  .post(function (req, res) {
    users.buscar_usuario_por_id(req, res);
  });

router.route('/agregar_paquete_convenio')
  .post(function (req, res) {
    users.agregar_paquete_convenio(req, res);
  });
router.route('/agregar_paquete')
  .post(function (req, res) {
    users.agregar_paquete(req, res);
  });
module.exports = router;