import pool from "../db/config.js";
export const getAllAtividades = (req, res) => {
  const query =
    "select * from atividades join administradores on atividades.id_administrador = administradores.id_administrador";
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
