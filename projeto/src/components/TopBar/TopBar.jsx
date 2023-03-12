import { NotificationsOutlined } from "@material-ui/icons";
import React from "react";
import "./TopBar.css";
export default function TopBar({text}) {
  return (
    <div className="topBar">
      <div className="rigth">
        <p>{text}</p>
      </div>
      <div className="left">
        <div className="notification">
          <NotificationsOutlined />
        </div>

        <div className="user">
          <img className="user_img" src="/src/assets/img.jpg" />
         
        </div>
      </div>
    </div>
  );
}
