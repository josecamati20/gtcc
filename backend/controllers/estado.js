import pool from "../db/config.js";
export const getAllEstados = (req, res) => {
  const query = "select * from estado";
  pool.query(query, (error, data) => {
    if (error) {
      res.send({
        success: false,
        payload: null,
      });
      return;
    }

    res.send({
      success: true,
      payload: data,
    });
  });
};