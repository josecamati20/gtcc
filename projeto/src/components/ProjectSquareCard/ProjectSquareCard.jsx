import { PersonOutlined } from "@material-ui/icons";
import React from "react";
import "./ProjectSquareCard.css";
export default function ProjectSquareCard({ title, data }) {
  return (
    <div className="projectSquareCard">
      <h4>{title}</h4>
      <p>{data}</p>
    </div>
  );
}
