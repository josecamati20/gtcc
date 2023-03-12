import pool from "../db/config.js";
export const getAllMunicipios = (req, res) => {
  const query = "SELECT * FROM municipios ORDER BY municipIo ASC";
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