import pool from "../db/config.js";
export const getAllEspecializaoes = (req, res) => {
  const query = "select * from especialidade";
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