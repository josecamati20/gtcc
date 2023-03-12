import React from "react";
import { useParams } from "react-router-dom";
import "./SingleProjetoPage.css";
import ProjectSquareCard from "../../ProjectSquareCard/ProjectSquareCard";
import useFetch from "../../../hooks/useFetch";
import AlunoCard from "../../AlunoCard/AlunoCard";
import AlunoCardTop from "../../AlunoCardTop/AlunoCardTop";

export default function SingleProjetoPage() {
  const params = useParams();

  const [singleProjetoData] = useFetch(
    `http://localhost:3000/tcc/v1/projetos/${params.id}`
  );
  const [alunosData] = useFetch(
    `http://localhost:3000/tcc/v1/alunos/projeto/${params.id}`
  );
  console.log("m", singleProjetoData);
  console.log("n", alunosData);

  if (!singleProjetoData) {
    return <h3>Loading...</h3>;
  }

  return (
    <div className="singleProjetoPage">
      <div className="projetoSquare">
        <div className="titleBar">
          <h3>detalhes do projeto</h3>
        </div>
        <div className="project_body">
          <ProjectSquareCard title={"TEMA"} data={singleProjetoData.projeto} />
          <ProjectSquareCard title={"curso"} data={singleProjetoData.curso} />
          <ProjectSquareCard
            title={"tutor"}
            data={singleProjetoData.nome + " " + singleProjetoData.apelido}
          />

          <ProjectSquareCard
            title={"estado do projeto"}
            data={singleProjetoData.estado_projeto}
          />

          <ProjectSquareCard title={"grupo"} data={singleProjetoData.grupo} />
          <ProjectSquareCard
            title={"data da defesa"}
            data={singleProjetoData.data_defesa}
          />
          <ProjectSquareCard
            title={"CLASSIFICAÇÃO DO TRABALHO"}
            data={singleProjetoData.classificacao}
          />
        </div>
      </div>
      <div className="projetoSquare">
        <div className="titleBar">
          <h3>descrição do projeto</h3>
        </div>
        <p className="descricao">{singleProjetoData.descricao} </p>
      </div>
      {alunosData.length > 0 && (
        <div className="alunos_list">
          <div className="titleBar">
            <h3>Colegas de grupo</h3>
          </div>
          <AlunoCardTop />
          {alunosData.map((aluno) => (
            <AlunoCard alunoData={aluno} key={aluno.id_aluno} />
          ))}
        </div>
      )}
    </div>
  );
}
