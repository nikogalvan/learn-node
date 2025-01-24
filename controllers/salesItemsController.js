const db = require('../database/conexion.js');


class SalesItemsController {
  constructor() {

  }
  consultar(_req, res) {
    try {
      db.query(`SELECT * FROM sales_items`,
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
      db.query(`SELECT * FROM sales_items WHERE sale_item_id = ? `, [id],
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
      const { sale_id, product_id, quantity, price } = req.body;
      db.query(`INSERT INTO  sales_items
      (sale_item_id, sale_id, product_id, quantity, price )
      VALUES(NULL, ?, ?, ?, ?);`,
        [sale_id, product_id, quantity, price], (err, rows) => {
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
      db.query(`DELETE FROM sales_items WHERE sale_item_id = ? `, [id],
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
      const { id } = req.params
      const { sale_id, product_id, quantity, price } = req.body;

      db.query(`UPDATE sales_items
      SET sale_id = ?, product_id = ?, quantity = ?, price = ?
      WHERE sale_item_id = ?;`, [sale_id, product_id, quantity, price, id],
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


module.exports = new SalesItemsController();

