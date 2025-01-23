class ProductsController {
  constructor() {
  }
  consultar(_req, res) {
    res.json({ msg: 'Consulta productos desde clase' });
  }
  consultarDetalle(_req, res) {
    res.json({ msg: 'Consulta detalle productos desde clase' });
  }
  ingresar(_req, res) {
    res.json({ msg: 'Ingresado productos desde clase' });
  }
  eliminar(_req, res) {
    res.json({ msg: 'Eliminar producto desde clase' });
  }
  actualizar(_req, res) {
    res.json({ msg: 'Actualizar producto desde clase' });
  }
}

module.exports = new ProductsController();
