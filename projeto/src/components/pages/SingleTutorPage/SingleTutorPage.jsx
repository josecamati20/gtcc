import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import "./SingleTutorPage.css";
import TutorTopPanel from "../../TutorTopPanel/TutorTopPanel";
import ProjectSquareCard from "../../ProjectSquareCard/ProjectSquareCard";
import ProjetoSquareCard from "../../ProjetoSquareCard/ProjetoSquareCard";
import ProjetoCardMain from "../../ProjetoCardMain/ProjetoCardMain";
import useFetch from "../../../hooks/useFetch";
import TopBar from "../../TopBar/TopBar";

export default function SingleTutorPage() {
  const params = useParams();
  const [projetosData] = useFetch(
    `http://localhost:3000/tcc/v1/projetos/tutor/${params.id}`
  );

  const [singleTutorData] = useFetch(
    `http://localhost:3000/tcc/v1/tutores/${params.id}`
  );
  console.log("meu projetos data: ", projetosData);
  console.log("meu sigleTutor data: ", singleTutorData);
  if (!singleTutorData) {
    return <h3>Loading...</h3>;
  }

  return (
    <div className="singleTutorPage">
      <div className="tutorSquare">
        <div className="basic">
          <TutorTopPanel />
        </div>
        <div className="tutor_info">
          <div className="titleBar">
            <h3>detalhes do tutor</h3>
          </div>
          <div className="project_body">
            <ProjectSquareCard title={"NOME"} data={singleTutorData.nome} />
            <ProjectSquareCard
              title={"APELIDO"}
              data={singleTutorData.apelido}
            />
            <ProjectSquareCard
              title={"ESPECIALIDADE"}
              data={singleTutorData.especialidade}
            />
            <ProjectSquareCard
              title={"GRAU ACADEMICO"}
              data={singleTutorData.grau}
            />
            <ProjectSquareCard
              title={"PROVINCIA"}
              data={singleTutorData.provincia}
            />
            <ProjectSquareCard
              title={"MUNICIPIO"}
              data={singleTutorData.municipio}
            />
            <ProjectSquareCard title={"BAIRRO"} data={singleTutorData.bairro} />
            <ProjectSquareCard title={"E-MAIL"} data={singleTutorData.email} />
            <ProjectSquareCard
              title={"CONTACTO"}
              data={singleTutorData.contacto}
            />
            <ProjectSquareCard
              title={"CONTACTO ALTERNATIVO"}
              data={singleTutorData.contacto_alternativo}
            />

            <ProjectSquareCard title={"ESTADO"} data={singleTutorData.estado} />
          </div>
        </div>
      </div>
      {projetosData != null && (
        <div className="projects_list">
          <div className="titleBar">
            <h3>projetos em supervisão</h3>
          </div>
          <ProjetoCardMain />
          <div className="list_item">
            {projetosData.map((projeto) => (
              <ProjetoSquareCard data={projeto} />
            ))}
          </div>
        </div>
      )}
    </div>
  );
}
