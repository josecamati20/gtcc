import { PersonOutlined } from "@material-ui/icons";
import React from "react";
import "./PartenersListCard.css";
export default function PartenersListCard({ text }) {
  return (
    <div className="partenersListCard">
      
        <PersonOutlined />
      

      <p>{text}</p>
    </div>
  );
}
