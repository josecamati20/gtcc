import React from "react";
import "./TutorCardTopBar.css";
export default function TutorCardTopBar({ data }) {
  return (
    <div className="tutor_card_main">
      <p className="tutor_nome">nome</p>
      <p className="tutor_especialidade">especialidade</p>
      <p className="tutor_morada">morada</p>
      <p className="tutor_contacto">contacto</p>
      <p className="tutor_estado">estado</p>
      <p className="tutor_opcoes">opções</p>
    </div>
  );
}
