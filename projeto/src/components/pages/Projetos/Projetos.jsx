import React from "react";
import "./Projetos.css";
import ModalAddAluno from "../../ModalAddAluno";
import { SearchBar } from "../../SearchBar/SearchBar";
import SelectDemo from "../../Select";
import { useSelector } from "react-redux";
import useFetch from "../../../hooks/useFetch";
import ProjetoCard from "../../ProjetoCard/ProjetoCard";
import TopBar from "../../TopBar/TopBar";
import ModalAddProjeto from "../../ModalAddProjeto";
export default function Projeto() {
  const { payload } = useSelector((store) => store.projetos);
  const { searchValue } = useSelector((store) => store.search);
  const filteredPayload = payload.filter((projeto) =>
    projeto.projeto.toLowerCase().includes(searchValue.toLowerCase())
  );

  return (
    <div className="projeto">
      <TopBar text={"projetos"} />
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
            <ModalAddProjeto />
          </div>
        </div>
      </div>

      <div className="projetos_list">
        {filteredPayload.map((projeto) => (
          <ProjetoCard projetoData={projeto} key={projeto.id_projeto} />
        ))}
      </div>
    </div>
  );
}
