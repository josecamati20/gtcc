import React from "react";
import { useParams } from "react-router-dom";
import "./SingleAlunoPage.css";
import ProjectSquareCard from "../../ProjectSquareCard/ProjectSquareCard";
import AlunoCardTop from "../../AlunoCardTop/AlunoCardTop";
import useFetch from "../../../hooks/useFetch";
import AlunoTopPanel from "../../AlunoTopPanel/AlunoTopPanel";

export default function SingleAlunoPage() {
  const params = useParams();

  const [singleAlunoData] = useFetch(
    `http://localhost:3000/tcc/v1/alunos/${params.id}`
  );
  const [colegas] = useFetch(
    `http://localhost:3000/tcc/v1/alunos/projeto/${singleAlunoData.id_projeto}`
  );

  if (!singleAlunoData) {
    return <h3>Loading...</h3>;
  }
  console.log("meu singleAlunoPage Data colegas: ", colegas);

  return (
    <div className="singleAlunoPage">
      <div className="tutorSquare">
        <div className="basic">
          <AlunoTopPanel />
        </div>
        <div className="tutor_info">
          <div className="titleBar">
            <h3>detalhes do aluno</h3>
          </div>
          <div className="project_body">
            <ProjectSquareCard title={"NOME"} data={singleAlunoData.nome} />
            <ProjectSquareCard title={"APELIDO"} data={singleAlunoData.nome} />
            <ProjectSquareCard title={"curso"} data={singleAlunoData.curso} />
            <ProjectSquareCard
              title={"projeto"}
              data={singleAlunoData.projeto}
            />

            <ProjectSquareCard
              title={"PROVINCIA"}
              data={singleAlunoData.provincia}
            />
            <ProjectSquareCard
              title={"MUNICIPIO"}
              data={singleAlunoData.municipio}
            />
            <ProjectSquareCard title={"BAIRRO"} data={singleAlunoData.bairro} />
            <ProjectSquareCard title={"E-MAIL"} data={singleAlunoData.email} />
            <ProjectSquareCard
              title={"CONTACTO"}
              data={singleAlunoData.contacto}
            />
            <ProjectSquareCard
              title={"CONTACTO ALTERNATIVO"}
              data={singleAlunoData.contacto_alternativo}
            />
          </div>
        </div>
      </div>
      {colegas.length > 0 && (
        <div className="alunos_list">
          <div className="titleBar">
            <h3>Colegas de grupo</h3>
          </div>
          <AlunoCardTop />
          <div className="list_item">
            {colegas.map((colega) => (
              <AlunoCard alunoData={colega} key={colega.id_aluno} />
            ))}
          </div>
        </div>
      )}
    </div>
  );
}
