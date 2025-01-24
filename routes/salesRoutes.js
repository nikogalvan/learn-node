const express = require("express");
const router = express.Router();

const salesController = require("../controllers/salesController.js");

router.get('/', salesController.consultar);

router.post('/', salesController.ingresar);

router.route("/:id")
  .get(salesController.consultarDetalle)
  .put(salesController.actualizar)
  .delete(salesController.eliminar);


module.exports = router;
