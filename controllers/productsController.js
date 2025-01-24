const db = require('../database/conexion.js');

class ProductsController {
  constructor() {
  }
  consultar(_req, res) {
    try {
      db.query(`SELECT * FROM products`,
        (err, rows) => {
          if (err) {
            res.status(400).send(err);
          }
          res.status(201).json(rows);
        });
    } catch (err) {
      res.status(500).send(err.message);
    }
  }
  consultarDetalle(req, res) {
    const { id } = req.params;
    try {
      db.query(`SELECT * FROM products WHERE product_id = ? `, [id],
        (err, rows) => {
          if (err) {
            res.status(400).send(err);
          }
          res.status(200).json(rows[0]);
        });
    } catch (err) {
      res.status(500).send(err.message);
    }
  }
  ingresar(req, res) {
    try {
      const { product_name, description, price, stock_quantity } = req.body;
      db.query(`INSERT INTO products
      (product_id, product_name, description, price, stock_quantity)
      VALUES(NULL, ?,? ,?, ?);`,
        [product_name, description, price, stock_quantity], (err, rows) => {
          if (err) {
            res.status(400).send(err);
          }
          res.status(201).json({ id: rows.insertId });
        });
    } catch (err) {
      res.status(500).send(err.message);
    }
  }
  eliminar(req, res) {
    const { id } = req.params;
    try {
      db.query(`DELETE FROM products WHERE product_id = ? `, [id],
        (err, rows) => {
          if (err) {
            res.status(400).send(err);
          }
          if (rows.affectedRows === 1) {
            res.status(200).json({ response: 'Deleted successfull' });
          }
        });
    } catch (err) {
      res.status(500).send(err.message);
    }
  }

  actualizar(req, res) {
    try {
      const { product_id, product_name, description, price, stock_quantity } = req.body;
      db.query(`UPDATE products
      SET product_name = ?, description = ?, price = ?, stock_quantity = ?
      WHERE product_id = ?;`, [product_name, description, price, stock_quantity, product_id],
        (err, rows) => {
          if (err) {
            res.status(400).send(err);
          }
          if (rows.affectedRows === 1) {
            res.status(200).json({ response: 'Updated successfull' });
          }
        });
    } catch (err) {
      res.status(500).send(err.message);
    }
  }
}

module.exports = new ProductsController();
