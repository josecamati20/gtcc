import pool from "../db/config.js";
export const getAllGraus = (req, res) => {
  const query = "select * from grau";
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
