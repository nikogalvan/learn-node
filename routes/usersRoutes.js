const express = require("express");
const router = express.Router();

router.get('/', (req, res) => {
  res.json({ msg: 'Consulta users' });
});

router.post('/', (req, res) => {
  res.json({ msg: 'Creando users' });
});

router.route("/:id")
  .get((req, res) => {
    res.json({ msg: 'Consulta de un user' });
  })
  .put((req, res) => {
    res.json({ msg: 'Actualizar users' });
  })
  .delete((req, res) => {
    res.json({ msg: 'Borrar users' });
  });

module.exports = router;


