import React from "react";
import "./TutorTopPanel.css";
import img from "./img.png";
import ModalEditTutor from "../ModalEditTutor";
import DeleteDialog from "../DeleteDialog/Index";
import { Refresh, SendOutlined } from "@material-ui/icons";
import useFetch from "../../hooks/useFetch";
import { useNavigate, useParams } from "react-router-dom";
import axios from "axios";

export default function tutorTopPanel() {
  const navigate = useNavigate();
  const params = useParams();
  const [tutorData] = useFetch(
    `http://localhost:3000/tcc/v1/tutores/${params.id}`
  );
  
  const handleDelete = async () => {
    try {
      const res = await axios.delete(
        `http://localhost:3000/tcc/v1/tutores/apagar/${params.id}`
      );
      navigate("/tutores");
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
          <ModalEditTutor tutorData={tutorData} />
        </p>

        <p className="delete">
          <DeleteDialog
            title={"Voce tem a certeza que pretende apagar este tutor?"}
            description={
              " Esta acção não pode ser desfeita. Isto vai apagar permanentemente todos os dados deste tutor nos nossos servidores."
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
          {tutorData?.nome} {tutorData?.apelido}
        </h3>
        <p className="profission">Tec. {tutorData?.especialidade}</p>
      </div>
    </div>
  );
}
