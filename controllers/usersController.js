class UsersController {
  constructor() {
  }
  consultar(_req, res) {
    res.json({ msg: 'Consulta users desde clase' });
  }
  consultarDetalle(req, res) {
    const { id } = req.params;
    res.json({ msg: `Consulta detalle del user id: ${id} desde clase` });
  }
  ingresar(_req, res) {
    res.json({ msg: 'Ingresado users desde clase' });
  }
  eliminar(req, res) {
    const { id } = req.params;
    res.json({ msg: `Eliminar user con id ${id} desde clase` });
  }
  actualizar(req, res) {
    const { id } = req.params;
    res.json({ msg: `Actualizar user con id ${id} desde clase` });
  }
}

module.exports = new UsersController();
