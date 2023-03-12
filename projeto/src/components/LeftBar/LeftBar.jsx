import { CardHeader } from "@material-ui/core";
import {
  CardGiftcardTwoTone,
  CropSquare,
  DashboardOutlined,
  DataUsageOutlined,
  ExitToApp,
  ExitToAppOutlined,
  HomeOutlined,
  MessageOutlined,
  Note,
  NoteAddOutlined,
  NotificationImportant,
  NotificationsOutlined,
  PeopleAltOutlined,
  PersonAddOutlined,
  PersonOutlined,
  PersonOutlineOutlined,
  Settings,
  SettingsOutlined,
  TripOrigin,
  WorkOutline,
} from "@material-ui/icons";
import React from "react";
import { useNavigate } from "react-router-dom";
import "./LeftBar.css";
export default function LeftBar() {
  const navigate = useNavigate();
  return (
    <div className="leftBar">
      <div className="leftBarelements">
        <div className="listOfElements">
          <div
            className="element"
            onClick={() => {
              navigate("/home");
            }}
          >
            <HomeOutlined />
            <p className="myTag">home</p>
          </div>

          <div
            className="element"
            onClick={() => {
              navigate("/projetos");
            }}
          >
            <WorkOutline />
            <p className="myTag">projetos</p>
          </div>

          <div
            className="element"
            onClick={() => {
              navigate("/tutores");
            }}
          >
            <PeopleAltOutlined />
            <p className="myTag">tutores</p>
          </div>

          <div
            className="element"
            onClick={() => {
              navigate("/alunos");
            }}
          >
            <PersonOutlined />
            <p className="myTag">Alunos</p>
          </div>

          <div
            className="element"
            onClick={() => {
              navigate("/atividades");
            }}
          >
            <DataUsageOutlined />
            <p className="myTag">atividades</p>
          </div>
          <div className="element">
            <DashboardOutlined />
            <p className="myTag">dashboard</p>
          </div>
        </div>
        <div className="exit">
          <ExitToAppOutlined />
        </div>
      </div>
    </div>
  );
}
