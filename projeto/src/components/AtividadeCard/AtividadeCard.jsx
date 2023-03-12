import React from "react";

import "./AtividadeCard.css";

export default function AtividadeCard({ atividadeData }) {
  return (
    <div className="atividade_card">
      <div className="top_card">
        <p className="adm">{atividadeData.nome} {atividadeData.apelido}</p>
        <p className="top_card_date">{atividadeData.data_atividade}</p>
      </div>
      <p className="descricao"> {atividadeData.descricao}</p>
    </div>
  );
}
