const express = require("express");
const cors = require('cors');
const app = express();
const productosRoutes = require('./routes/productsRoutes.js');
const usersRoutes = require('./routes/usersRoutes.js');
const salesRoutes = require('./routes/salesRoutes.js');
const salesItemsRoutes = require('./routes/salesItemsRoutes.js');
const port = 3000;

app.use(express.json());
app.use(cors());
app.get('/', (_req, res) => {
  res.send('Hola mundo');
});

//routes
app.use('/products', productosRoutes);
app.use('/users', usersRoutes);
app.use('/sales', salesRoutes);
app.use('/sales-items', salesItemsRoutes);


app.listen(port, () => {
  console.log('Servidor activo');
})
