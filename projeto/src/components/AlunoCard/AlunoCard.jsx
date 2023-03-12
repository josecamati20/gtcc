import React, { useState } from "react";
import { RemoveRedEyeOutlined } from "@material-ui/icons";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import "./AlunoCard.css";
import ModalEditAluno from "../ModalEditAluno";
import { useDispatch } from "react-redux";
import DeleteDialog from "../DeleteDialog/Index";
import { getAllAlunos } from "../../store/feactures/alunosSlice";
export default function alunoCard({ alunoData }) {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const handleDeleteAluno = async (id) => {
    try {
      const res = await axios.delete(
        `http://localhost:3000/tcc/v1/alunos/apagar/${id}`
      );
    } catch (error) {
      
    } finally {
      dispatch(getAllAlunos());
    }
  };
  return (
    <div className="aluno_card">
      <p className="aluno_nome">
        {alunoData?.nome}
        {" "}
        {alunoData?.apelido}
      </p>
      <p className="aluno_curso">{alunoData?.curso}</p>
      <p className="aluno_morada">
        {alunoData?.municipio}, {alunoData?.bairro}
      </p>
      <p className="aluno_contacto">{alunoData?.contacto}</p>

      <p className="aluno_opcoes">
        <RemoveRedEyeOutlined
          onClick={() => navigate(`/alunos/${alunoData.id_aluno}`)}
        />{" "}
        <ModalEditAluno alunoData={alunoData} />{" "}
        <DeleteDialog
          title={"Voce tem a certeza que pretende apagar este aluno?"}
          description={
            " Esta acção não pode ser desfeita. Isto vai apagar permanentemente todos os dados deste aluno na base de dados."
          }
          handleDelete={() => handleDeleteAluno(alunoData.id_aluno)}
        />
      </p>
    </div>
  );
}
