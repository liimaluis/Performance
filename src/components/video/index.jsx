import React from "react";

import "./video.css";
import video from "../../imgs/performance.mp4";

export default function Video() {
  return (
    <div>
      <h3 className="titulo-video">
        Se você estava buscando ser mais produtivo, obter melhores resultados e
        triplicar a sua renda, você acaba de achar o melhor meio!<br></br>
        Através de Performance Organização & Competência
      </h3>

      <div className="div-video">
        <video src={video} width="750" height="450" controls></video>
      </div>
    </div>
  );
}
