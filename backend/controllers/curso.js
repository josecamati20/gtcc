import pool from "../db/config.js";
export const getAllCursos = (req, res) => {
  const query = "SELECT * FROM cursos";
  
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

export const createCursos = (req, res) => {
  const payload = req.body;
  const query = "INSERT INTO cursos VALUES(default,?,?)";
 
  pool.query(query, [payload.curso, payload.sigla], (error, data) => {
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
