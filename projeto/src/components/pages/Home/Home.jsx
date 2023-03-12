import {
  Work,
  CropSquare,
  Person,
  DataUsage,
  WorkOutlineRounded,
  PersonOutlineRounded,
  DataUsageOutlined,
  WorkOutline,
  PeopleAltOutlined,
  DevicesOtherSharp,
  TripOrigin,
  DashboardOutlined,
  LocalActivityOutlined,
} from "@material-ui/icons";
import React from "react";
import { useNavigate } from "react-router-dom";
import LeftBar from "../../LeftBar/LeftBar";
import TopBar from "../../TopBar/TopBar";
import "./Home.css";

export default function Home() {
  const navigate = useNavigate();
  const handleNavigate = (to) => {
    navigate(to);
  };
  return (
    <div className="home">
      <TopBar text={"gestor de tcc"} />
      <div className="components">
        <div className="container">
          <div className="elements">
            <div
              className="element"
              onClick={() => {
                handleNavigate("/projetos");
              }}
            >
              <CropSquare />
              <p>trabalhos</p>
            </div>

            <div className="element">
              <PeopleAltOutlined />
              <p>tutores</p>
            </div>

            <div className="element">
              <PeopleAltOutlined />
              <p>estudantes</p>
            </div>
            <div className="element">
              <DataUsageOutlined />
              <p>Relatórios</p>
            </div>
            <div className="element">
              <DataUsageOutlined />
              <p>Actividades</p>
            </div>
            <div
              className="element"
              onClick={() => {
                handleNavigate("/projetos");
              }}
            >
              <DashboardOutlined />
              <p>Dashboard</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
