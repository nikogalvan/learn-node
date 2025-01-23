const express = require("express");
const router = express.Router();

router.get('/', (req, res) => {
  res.json({ msg: 'Consulta productos' });
});

router.post('/', (req, res) => {
  res.json({ msg: 'Creando productos' });
});

router.route("/:id")
  .get((req, res) => {
    res.json({ msg: 'Consulta de un producto' });
  })
  .put((req, res) => {
    res.json({ msg: 'Actualizar productos' });
  })
  .delete((req, res) => {
    res.json({ msg: 'Borrar productos' });
  });

module.exports = router;

