const express = require("express");
const app = express();
const productosRoutes = require('./routes/productosRotues.js');
const port = 3000;

//routes
app.use('/', productosRoutes);


app.listen(port, () => {
  console.log('Servidor activo');
})
