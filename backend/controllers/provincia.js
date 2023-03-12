import pool from "../db/config.js";
export const getAllProvincias = (req, res) => {
  const query = "select * from provincias";
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