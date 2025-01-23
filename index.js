const express = require("express");
const cors = require('cors');
const app = express();
const productosRoutes = require('./routes/productsRoutes.js');
const usersRoutes = require('./routes/usersRoutes.js');
const port = 3000;

app.use(express.json());
app.use(cors());
app.get('/', (_req, res) => {
  res.send('Hola mundo');
});

//routes
app.use('/products', productosRoutes);
app.use('/users', usersRoutes);


app.listen(port, () => {
  console.log('Servidor activo');
})
