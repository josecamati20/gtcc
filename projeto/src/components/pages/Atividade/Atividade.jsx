import React from "react";
import ModalAddAluno from "../../ModalAddAluno";
import { SearchBar } from "../../SearchBar/SearchBar";
import "./Atividade.css";
import { useSelector } from "react-redux";
import TopBar from "../../TopBar/TopBar";
import AtividadeCard from "../../AtividadeCard/AtividadeCard";
import useFetch from "../../../hooks/useFetch";
export default function Atividade() {
  const [atividades] = useFetch(`http://localhost:3000/tcc/v1/atividades`);
  const { searchValue } = useSelector((store) => store.search);
  const filteredPayload = atividades.filter((aluno) =>
    aluno.descricao.toLowerCase().includes(searchValue.toLowerCase())
  );
  const dd = new Date()
  console.log("atividades:", dd );

  return (
    <div className="atividade">
      <TopBar text="Atividades" />
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
          </div>
        </div>
      </div>

      <div className="atividades_list">
        {filteredPayload.length > 0 ? (
          filteredPayload.map((listOfAtividades) => (
            <AtividadeCard
              atividadeData={listOfAtividades}
              key={listOfAtividades.id_atividade}
            />
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
