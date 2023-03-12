import pool from "../db/config.js";

export const getAllAlunos = async (req, res) => {
  const query =
    "select * from alunos INNER join cursos on alunos.id_curso =  cursos.id_curso INNER join projetos on alunos.id_projeto = projetos.id_projeto join municipios on alunos.id_municipio= municipios.id_municipio join provincias on alunos.id_provincia = provincias.id_provincia";

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

export const getAlunoById = (req, res) => {
  const params = req.params;
  const query =
    "select * from alunos INNER join cursos on alunos.id_curso =  cursos.id_curso INNER join projetos on alunos.id_projeto = projetos.id_projeto join municipios on alunos.id_municipio= municipios.id_municipio join provincias on alunos.id_provincia = provincias.id_provincia WHERE alunos.id_aluno =? ";

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

export const getAlunoByProjectoId = async (req, res) => {
  const params = req.params;
  const query =
    "select * from alunos INNER join cursos on alunos.id_curso =  cursos.id_curso INNER join projetos on alunos.id_projeto = projetos.id_projeto join municipios on alunos.id_municipio= municipios.id_municipio join provincias on alunos.id_provincia = provincias.id_provincia WHERE projetos.id_projeto =? ";

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

export const deleteAluno = (req, res) => {
  const params = req.params;
  const query = "DELETE FROM alunos WHERE id_aluno = ?";

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
      payload: null,
    });
  });
};

export const updateAlunoById = async (req, res) => {
  const params = req.params;
  const body = req.body;
  const query =
    "UPDATE alunos set nome =?, apelido =?,genero =?, id_curso =?,id_projeto= ?,id_provincia=?,id_municipio=?,bairro=?,email =?,contacto =?,contacto_alternativo =? where id_aluno=?";
  pool.query(
    query,
    [
      body.nome,
      body.apelido,
      body.genero,
      body.id_curso,
      body.id_projeto,
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
        payload: null,
      });
    }
  );
};

export const addAluno = async (req, res) => {
  const body = req.body;
  const query =
    "INSERT INTO alunos(nome,apelido,genero,id_curso,id_projeto,id_provincia,id_municipio,bairro,email,contacto,contacto_alternativo) VALUES (?,?,?,?,?,?,?,?,?,?,?) ";
  pool.query(
    query,
    [
      body.nome,
      body.apelido,
      body.genero,
      body.id_curso,
      body.id_projeto,
      body.id_provincia,
      body.id_municipio,
      body.bairro,
      body.email,
      body.contacto,
      body.contacto_alternativo,
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
        payload: null,
      });
    }
  );
};
