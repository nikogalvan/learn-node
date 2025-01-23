const express = require("express");
const router = express.Router();
const usersController = require("../controllers/usersController.js");

router.get('/', usersController.consultar);

router.post('/', usersController.ingresar);

router.route("/:id")
  .get(usersController.consultarDetalle)
  .put(usersController.actualizar)
  .delete(usersController.eliminar);

module.exports = router;


