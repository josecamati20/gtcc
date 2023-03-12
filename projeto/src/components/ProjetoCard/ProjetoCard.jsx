import { RemoveRedEyeOutlined } from "@material-ui/icons";
import axios from "axios";
import React from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { getAllProjetos } from "../../store/feactures/projetosSlice";
import DeleteDialog from "../DeleteDialog/Index";
import ModalEditProjeto from "../ModalEditProjeto";
import "./ProjetoCard.css";
export default function ProjetoCard({ projetoData }) {
  const dispatch = useDispatch();
  const navigate= useNavigate()
  const handleDeleteProjeto = async (id) => {
    try {
      const res = await axios.delete(
        `http://localhost:3000/tcc/v1/projetos/${id}`
      );
    } catch (error) {

    } finally {
      dispatch(getAllProjetos());
    }
  };
  const styles = {
    backgroundColor:
      projetoData.id_estado_projeto == 1
        ? "rgb(97, 183, 97)"
        : projetoData.id_estado_projeto == 2
        ? "rgb(211, 105, 84)"
        : "rgb(170, 167, 167)",
  };
  return (
    <div className="projeto_cd">
      <div className="top_card">
        <p className="sigla">{projetoData.curso}</p>
        <p className="estado" style={styles}>
          {projetoData.estado_projeto}
        </p>
      </div>
      <div className="midle_card">
        <p className="midle_card_title">{projetoData.projeto}</p>
      </div>
      <div className="bottom_card">
        <p className="opcoes">
          <RemoveRedEyeOutlined onClick={() => navigate(`${projetoData.id_projeto}`)} />{" "}
          <ModalEditProjeto projetoData={projetoData} />
          <DeleteDialog
            title={"Voce tem a certeza que pretende apagar este projeto?"}
            description={
              " Esta acção não pode ser desfeita. Isto vai apagar permanentemente todos os dados deste projeto na base de dados."
            }
            handleDelete={() => handleDeleteProjeto(projetoData.id_projeto)}
          />
        </p>
      </div>
    </div>
  );
}
