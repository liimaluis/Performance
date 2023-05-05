import React from "react";
import { Container } from "react-bootstrap";

import "./main.css";

import Formulario from "../envio/index";
import Cards from "../cards";

function Main() {
  return (
    <main className="conteudo-principal" bg="dark">
      <Formulario />

      <div className="col-12 text-center pb-5">
        <h2 id="agnição">
          Empresas que nós P.O.C (Performance, Organização &amp; Competência)
          temos profunda agnição
        </h2>
      </div>

      <Container className="container">
        <Cards />
      </Container>

      <Container>
        <section className="features-overview">
          <div className="sobre">
            <h2>Pontos nos quais queremos te ajudar</h2>
            <h6>
              <ul className="lista-beneficios">
                <li className="itens">-Aumento de faturamento.</li>
                <li className="itens">-Confiança nos funcionários.</li>
                <li className="itens">
                  -Ambiente de trabalho com padrões de excelência.
                </li>
                <li className="itens">
                  -Melhor gestão da empresa, melhor entendimento dos números
                  gerados.
                </li>
                <li className="itens">-Autoconfiança, gestão das emoções.</li>
                <li className="itens">
                  -Desenvolvimento Soft/Hard Skills dos gestores, líderes e
                  colaboradores.
                </li>
              </ul>
            </h6>
          </div>
        </section>
      </Container>
    </main>
  );
}

export default Main;
