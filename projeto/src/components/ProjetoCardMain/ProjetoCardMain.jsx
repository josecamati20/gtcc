import React from 'react'
import './ProjetoCardMain.css'
export default function ProjetoCardMain({data}) {
  return (
    <div className='projeto_card_main'>
        <p className="curso_name">CURSO</p>
        <p className="projeto_name">PROJETO</p>
        <p className="grupo_number">GRUPO</p>
        <p className="date">DATA DEFESA</p>
        <p className="projeto_status">ESTADO</p>
    </div>
  )
}
