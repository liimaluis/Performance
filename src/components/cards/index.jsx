import React from "react";

import Sas from "../../imgs/Sas.jpg";
import facility from "../../imgs/facility.jpg";
import conquer from "../../imgs/conquer.png";
import rockcontent from "../../imgs/rockcontent.jpg";

export default function Cards() {
  return (
    <div className="row grid-margin">
      <div className="col-12 col-md-6 col-lg-3 stretch-card mb-3 mb-lg-0">
        <div className="conquer">
          <div className="card-body p-0">
            <div className="text-center card-contents">
              <div className="card-image">
                <img src={conquer} className="card-img" alt="conquer" />
              </div>
              <div className="card-desc-box d-flex align-items-center justify-content-around"></div>
            </div>
            <div className="text-center pt-4">
              <h6 className="m-0 pb-1">Escola Conquer</h6>
              <p>
                Escola on-line que proporciona diversas graduações e formações
                para o mercado profissional. Tanto para pessoas, quanto para
                empresas. Faturamento +50.000.000R$ Milhões 2022 Relevância: +1
                Milhão de alunos +1.700 Funcionários Uma das maiores escolas da
                américa latina. Fundada em: 2016
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="col-12 col-md-6 col-lg-3 stretch-card mb-3 mb-lg-0">
        <div className="Rock">
          <div className="card-body p-0">
            <div className=" text-center card-contents">
              <div className="card-image">
                <img src={rockcontent} className="card-img" alt="rockcontent" />
              </div>
              <div className="card-desc-box d-flex align-items-center justify-content-around"></div>
            </div>
            <div className="text-center pt-4">
              <h6 className="m-0 pb-1">Rock Content</h6>
              <p>
                Fundada em: 2013 Ajuda profissionais de marketing e agências a
                entregar experiências de conteúdo excepcionais para seus
                clientes, por meio de soluções inovadoras de marketing de
                conteúdo, serviços criativos, talentos sob demanda e
                treinamentos. +2.000 Marcas ajudadas. Valuation da empresa:
                30.000.000 de Dólares
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="col-12 col-md-6 col-lg-3 stretch-card mb-3 mb-lg-0">
        <div className="Facility">
          <div className="card-body p-0">
            <div className="bg-primary text-center card-contents">
              <div className="card-image">
                <img src={facility} className="card-img" alt="facility" />
              </div>
              <div className="card-desc-box d-flex align-items-center justify-content-around"></div>
            </div>
            <div className="text-center pt-4">
              <h6 className="m-0 pb-1">Grupo Facility RH</h6>
              <p>
                O grupo Facility RH atua na prestação de serviços empresariais,
                fornecendo trabalhadores temporários e terceirização de serviços
                especializados, em diversos segmentos. +50 Funcionários. Fundada
                em: 2003
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="col-12 col-md-6 col-lg-3 stretch-card mb-3 mb-lg-0">
        <div className="Sas">
          <div className="card-body p-0">
            <div className="bg-success text-center card-contents">
              <div className="card-image">
                <img src={Sas} className="card-img" alt="sas" />
              </div>
            </div>
            <div className="text-center pt-4">
              <h6 className="m-0 pb-1">Sas Educação</h6>
              <p>
                Fundada em: 2004 Escola que proporciona soluções integradas a
                escolas parceiras. Relevância: 1.100 Escolas parceiras. Uma das
                maiores escolas do Brasil.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
