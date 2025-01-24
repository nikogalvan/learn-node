const express = require("express");
const router = express.Router();
const salesItemsController = require("../controllers/salesItemsController.js");

router.get('/', salesItemsController.consultar);

router.post('/', salesItemsController.ingresar);

router.route("/:id")
  .get(salesItemsController.consultarDetalle)
  .put(salesItemsController.actualizar)
  .delete(salesItemsController.eliminar);

module.exports = router;


