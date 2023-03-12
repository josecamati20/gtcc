import pool from "../db/config.js";

export const deleteTutor = (req, res) => {
  const params = req.params;
  const query = "DELETE FROM tutor WHERE id_tutor = ?";

  pool.query(query, [params.id], (error, data) => {
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

export const getAllTutores = (req, res) => {
  const query =
    "select  * from tutor as t join grau on t.id_grau = grau.id_grau join especialidade on t.id_especialidade = especialidade.id_especialidade join estado on t.id_estado = estado.id_estado join provincias on t.id_provincia = provincias.id_provincia join municipios on t.id_municipio = municipios.id_municipio";
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

export const getTutorById = (req, res) => {
  const params = req.params;
  const query =
    "select  * from tutor as t join grau on t.id_grau = grau.id_grau join especialidade on t.id_especialidade = especialidade.id_especialidade join estado on t.id_estado = estado.id_estado join provincias on t.id_provincia = provincias.id_provincia join municipios on t.id_municipio = municipios.id_municipio where t.id_tutor = ?";

  pool.query(query, [params.id], (error, data) => {
    if (error) {
      res.send({
        success: false,
        payload: null,
      });
      return;
    }

    res.send({
      success: true,
      payload: data[0],
    });
  });
};

export const updateTutorById = (req, res) => {
  const params = req.params;
  const body = req.body;
  console.log("body do update: ", body);
  const query =
    "UPDATE tutor set nome =?, apelido =?,id_estado =?,genero =?, id_especialidade =?,id_grau =?,id_provincia=?,id_municipio=?,bairro=?,email =?,contacto =?,contacto_alternativo =? where id_tutor=?";

  pool.query(
    query,
    [
      body.nome,
      body.apelido,
      body.id_estado,
      body.genero,
      body.id_especialidade,
      body.id_grau,
      body.id_provincia,
      body.id_municipio,
      body.bairro,
      body.email,
      body.contacto,
      body.contacto_alternativo,
      params.id,
    ],
    (error, data) => {
      if (error) {
        res.send({
          success: false,
          payload: null,
        });
        return;
      }

      res.send({
        success: true,
        payload: null
      });
    }
  );
};

export const addTutor = async (req, res) => {
 
  const body = req.body;
  
  const query = "INSERT INTO tutor ( nome, apelido, bairro, id_grau, email, contacto, contacto_alternativo, genero, id_especialidade, id_estado, id_provincia, id_municipio) VALUES ( ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)";

  pool.query(
    query,
    [
      body.nome,
      body.apelido,
      body.bairro,
      body.id_grau,
      body.email,
      body.contacto,
      body.contacto_alternativo,
      body.genero,
      body.id_especialidade,
      body.id_estado,
      body.id_provincia,
      body.id_municipio,
    ],
    (error, data) => {
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
    }
  );
};
