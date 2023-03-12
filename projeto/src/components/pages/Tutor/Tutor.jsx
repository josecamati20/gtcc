import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getAllTutores } from "../../../store/feactures/tutoresSlice";

import ModalAddTutor from "../../ModalAddTutor";
import { SearchBar } from "../../SearchBar/SearchBar";
import SelectDemo from "../../Select";
import TopBar from "../../TopBar/TopBar";
import TutorCard from "../../TutorCard/TutorCard";
import TutorCardTopBar from "../../TutorCardTopBar/TutorCardTopBar";

import "./Tutor.css";
export default function Tutor() {
  const { payload, isLoading } = useSelector((store) => store.tutores);
  const { searchValue } = useSelector((store) => store.search);
  const filteredPayload = payload.filter(
    (item) =>
      item.nome.toLowerCase().includes(searchValue.toLowerCase()) ||
      item.apelido.toLowerCase().includes(searchValue.toLowerCase())
  );

  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getAllTutores());
  }, []);
  return (
    <div className="tutor">
      <TopBar text={"tutores"} />
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
            <ModalAddTutor />
          </div>
        </div>
      </div>

      <div className="tutores_list">
        {filteredPayload.length > 0 && <TutorCardTopBar />}

        {filteredPayload.length > 0 ? (
          filteredPayload.map((listOfTutores) => (
            <TutorCard tutorData={listOfTutores} key={listOfTutores.id_tutor} />
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
