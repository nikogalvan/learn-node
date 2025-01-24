const db = require('../database/conexion.js');

const convertToMySQLDateTime = (isoDate) => {
  const date = new Date(isoDate);
  return date.toISOString().slice(0, 19).replace('T', ' ');

}

class SalesController {
  constructor() {

  }
  consultar(_req, res) {
    try {
      db.query(`SELECT * FROM sales`,
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
      db.query(`SELECT * FROM sales WHERE sale_id = ? `, [id],
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
      const { total_amount } = req.body;
      db.query(`INSERT INTO  sales
      (sale_id, total_amount )
      VALUES(NULL, ?);`,
        [total_amount], (err, rows) => {
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
      db.query(`DELETE FROM sales WHERE sale_id = ? `, [id],
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
      const { sale_date, total_amount } = req.body;

      const formattedSaleDate = convertToMySQLDateTime(sale_date);
      db.query(`UPDATE sales
      SET sale_date = ?, total_amount = ?
      WHERE sale_id = ?;`, [formattedSaleDate, total_amount, id],
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


module.exports = new SalesController();
