import React from "react";
import ModalAddAluno from "../../ModalAddAluno";
import { SearchBar } from "../../SearchBar/SearchBar";
import SelectDemo from "../../Select";
import AlunoCard from "../../AlunoCard/AlunoCard";
import AlunoCardTop from "../../AlunoCardTop/AlunoCardTop";

import "./Aluno.css";
import { useSelector } from "react-redux";
import TopBar from "../../TopBar/TopBar";
export default function Aluno() {
  const { payload, isLoading } = useSelector((store) => store.alunos);
  const { searchValue } = useSelector((store) => store.search);
  const filteredPayload = payload.filter(
    (aluno) =>
      aluno.nome.toLowerCase().includes(searchValue.toLowerCase()) ||
      aluno.apelido.toLowerCase().includes(searchValue.toLowerCase())
  );

  return (
    <div className="aluno">
      <TopBar text="Alunos" />
      <div className="menu">
        <div className="search">
          <SearchBar />
          <div className="groupBy">
            <label>Agrupar por</label>
            <select>
              <option value={""}>selecionar</option>
              <option value={"id_estado_projeto"}>estado</option>
              <option value={"id_curso"}>curso</option>
            </select>
            <ModalAddAluno />
          </div>
        </div>
      </div>

      <div className="alunos_list">
        {filteredPayload.length > 0 && <AlunoCardTop />}

        {filteredPayload.length > 0 ? (
          filteredPayload.map((listOfAlunos) => (
            <AlunoCard alunoData={listOfAlunos} key={listOfAlunos.id_aluno} />
          ))
        ) : (
          <div className="empty">
            <img
              className="empty_icon"
              src="src/assets/service1.svg"
              alt="emptyList_svg"
            />
            <p className="empty_text">lista de tutores vazia</p>
          </div>
        )}
      </div>
    </div>
  );
}
