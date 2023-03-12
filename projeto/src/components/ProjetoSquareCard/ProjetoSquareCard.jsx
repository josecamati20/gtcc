import React from "react";
import "./ProjetoSquareCard.css";
export default function ProjetoSquareCard({ data }) {
  
  const styles = {
    backgroundColor:
      data.id_estado_projeto == 1
        ? "rgb(97, 183, 97)"
        : data.id_estado_projeto == 2
        ? "rgb(211, 105, 84)"
        : "rgb(170, 167, 167)",
  };
  return (
    <div className="projeto_card">
      <p className="curso_name">{data.sigla}</p>
      <p className="projeto_name">{data?.projeto}</p>
      <p className="grupo_number">{data?.grupo}</p>
      <p className="date">{data?.data_defesa}</p>
      <p className="projeto_status" style={styles}>
        {data?.estado_projeto}
      </p>
    </div>
  );
}
