import React from "react";

import "./video.css";
import video from "../../imgs/performance.mp4";

export default function Video() {
  return (
    <div>
      <h3 className="titulo-video">
        Se você busca obter melhores resultados e possuir uma rede de contatos
        sólida com potenciais clientes e grandes empresas, acaba de achar o
        melhor meio!<br></br>
        Através da Performance, Organização & Competência
      </h3>

      <div className="div-video">
        <video src={video} width="750" height="450" controls></video>
      </div>
    </div>
  );
}
