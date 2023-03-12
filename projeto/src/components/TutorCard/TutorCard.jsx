import React, { useState } from "react";
import { RemoveRedEyeOutlined } from "@material-ui/icons";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import "./TutorCard.css";
import ModalEditTutor from "../ModalEditTutor";
import { getAllTutores } from "../../store/feactures/tutoresSlice";
import { useDispatch } from "react-redux";
import DeleteDialog from "../DeleteDialog/Index";
export default function TutorCard({ tutorData }) {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const styles = {
    backgroundColor:
      tutorData.id_estado == 1
        ? "rgb(97, 183, 97)"
        : tutorData.id_estado == 2
        ? "rgb(211, 105, 84)"
        : "rgb(170, 167, 167)",
  };
  const handleDeleteTutor = async (id) => {
    try {
      const res = await axios.delete(
        `http://localhost:3000/tcc/v1/tutores/apagar/${id}`
      );
    } catch (error) {
      console.log("error", error);
    } finally {
      dispatch(getAllTutores());
    }
  };
  return (
    <div className="tutor_card">
      <p className="tutor_nome">
        {tutorData?.nome} {tutorData?.apelido}
      </p>
      <p className="tutor_especialidade">{tutorData?.especialidade}</p>
      <p className="tutor_morada">
        {tutorData?.municipio}, {tutorData?.bairro}
      </p>
      <p className="tutor_contacto">{tutorData?.contacto}</p>
      <p className="tutor_estado" style={styles}>
        {tutorData?.estado}
      </p>
      <p className="tutor_opcoes">
        <RemoveRedEyeOutlined
          onClick={() => navigate(`/tutores/${tutorData.id_tutor}`)}
        />{" "}
        <ModalEditTutor tutorData={tutorData} />{" "}
        <DeleteDialog
          title={"Voce tem a certeza que pretende apagar este tutor?"}
          description={
            " Esta acção não pode ser desfeita. Isto vai apagar permanentemente todos os dados deste tutor na base de dados."
          }
          handleDelete={() => handleDeleteTutor(tutorData.id_tutor)}
        />
      </p>
    </div>
  );
}
