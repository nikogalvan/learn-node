const express = require("express");
const router = express.Router();
const productsController = require("../controllers/productsController.js");

router.get('/', productsController.consultar);

router.post('/', productsController.ingresar);

router.route("/:id")
  .get(productsController.consultarDetalle)
  .put(productsController.actualizar)
  .delete(productsController.eliminar);

module.exports = router;

