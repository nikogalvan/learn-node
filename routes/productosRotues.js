const express = require("express");
const router = express.Router();

router.get('/productos', (req, res) => {
  res.json({ msg: 'Consulta productos' });
});

router.post('/productos', (req, res) => {
  res.json({ msg: 'Creando productos' });
});

router.put('/productos', (req, res) => {
  res.json({ msg: 'Actualizar productos' });
});

router.delete('/productos', (req, res) => {
  res.json({ msg: 'Borrar productos' });
});

module.exports = router;

