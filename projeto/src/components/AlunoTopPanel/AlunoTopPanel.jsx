import React from "react";
import "./AlunoTopPanel.css";
import img from "./img.png";
import DeleteDialog from "../DeleteDialog/Index";
import { Refresh, SendOutlined } from "@material-ui/icons";
import useFetch from "../../hooks/useFetch";
import { useNavigate, useParams } from "react-router-dom";
import ModalEditAluno from "../ModalEditAluno";
import axios from "axios";

export default function AlunoTopPanel() {
  const navigate = useNavigate();
  const params = useParams();
  const [alunoData] = useFetch(
    `http://localhost:3000/tcc/v1/alunos/${params.id}`
  );
  console.log("meu aluno Data: ", alunoData);
  const handleDelete = async () => {
    try {
      const res = await axios.delete(
        `http://localhost:3000/tcc/v1/alunos/apagar/${params.id}`
      );
      navigate("/alunos");
      console.log("resultado do delete ", res.data);
    } catch (error) {
      console.log("error", error);
      console.log("aconteceu um erro");
    }
  };
  return (
    <div className="topCard">
      <div className="navBar">
        <p className="edit">
          <ModalEditAluno alunoData={alunoData} />
        </p>

        <p className="delete">
          <DeleteDialog
            title={"Voce tem a certeza que pretende apagar este aluno?"}
            description={
              " Esta acção não pode ser desfeita. Isto vai apagar permanentemente todos os dados deste aluno nos nossos servidores."
            }
            handleDelete={handleDelete}
          />
        </p>

        <p className="send">
          <SendOutlined />
        </p>
        <p className="send">
          <Refresh />
        </p>
      </div>

      <div className="top_content">
        <img src={img} alt="aluno_image" />
        <h3>
          {alunoData?.nome} {alunoData?.apelido}
        </h3>
        <p className="profission">Tec. {alunoData?.curso}</p>
      </div>
    </div>
  );
}
