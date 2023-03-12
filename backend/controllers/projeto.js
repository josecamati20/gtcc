import pool from "../db/config.js";

export const addProjeto = async (req, res) => {
  const body = req.body;
  const query =
    "INSERT INTo projetos(projeto,descricao,id_curso,id_tutor,id_estado_projeto,data_defesa,classificacao,grupo) VALUES (?,?,?,?,?,?,?,?) ";

  pool.query(
    query,
    [
      body.projeto,
      body.descricao,
      body.id_curso,
      body.id_tutor,
      body.id_estado_projeto,
      body.data_defesa,
      body.classificacao,
      body.grupo,
      
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
export const getAllProjetos = (req, res) => {
  const query =
    "SELECT * FROM projetos join cursos on projetos.id_curso = cursos.id_curso join tutor on projetos.id_tutor = tutor.id_tutor join estado_projeto on projetos.id_estado_projeto = estado_projeto.id_estado_projeto ";
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

export const getProjetosById = async (req, res) => {
  const params = req.params;
  const query =
    "select * from projetos INNER join cursos on projetos.id_curso = cursos.id_curso INNER join estado_projeto on estado_projeto.id_estado_projeto = projetos.id_estado_projeto join tutor on projetos.id_tutor = tutor.id_tutor where projetos.id_projeto=?";

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
export const getProjetosByTutorId = async (req, res) => {
  const params = req.params;
  const query =
    "select * from projetos INNER join cursos on projetos.id_curso = cursos.id_curso INNER join estado_projeto on estado_projeto.id_estado_projeto = projetos.id_estado_projeto where projetos.id_tutor=?";

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

export const updateProjetoById = async (req, res) => {
  const params = req.params;
  const body = req.body;
  const query =
    "UPDATE projetos SET projeto=?, descricao=?, id_curso=?,id_tutor=?,id_estado_projeto=?,data_defesa=?,classificacao=?,grupo=? WHERE projetos.id_projeto=?";

  pool.query(
    query,
    [
      body.projeto,
      body.descricao,
      body.id_curso,
      body.id_tutor,
      body.id_estado_projeto,
      body.data_defesa,
      body.classificacao,
      body.grupo,
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

export const deleteProjeto = (req, res) => {
  const params = req.params;
  const query = "DELETE FROM projetos WHERE id_projeto = ?";

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
