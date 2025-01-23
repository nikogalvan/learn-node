const express = require("express");
const app = express();
const productosRoutes = require('./routes/productsRoutes.js');
const usersRoutes = require('./routes/usersRoutes.js');
const port = 3000;

app.get('/', (req, res) => {
  res.send('Hola mundo');
});

//routes
app.use('/products', productosRoutes);
app.use('/users', usersRoutes);


app.listen(port, () => {
  console.log('Servidor activo');
})
