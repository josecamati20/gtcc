import pool from "../db/config.js";
export const getAllEstadosProjetos = (req, res) => {
  const query = "select * from estado_projeto";
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