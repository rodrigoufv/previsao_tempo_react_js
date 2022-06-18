import React from "react";

import "../styles/Warning.css";

function Warning() {
  return (
    <div className="Warning">
      <h2> Cidade não encontrada </h2>
      <p>Tente Informar Cidade e Estado/País</p>
      <p> Ex: São Carlos, São Paulo</p>
      <p> Ex: Tokyo, Japan </p>
    </div>
  );
}

export default Warning;
