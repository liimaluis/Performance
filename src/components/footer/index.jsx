import React from "react";

import "./footer.css";

function Footer() {
  return (
    <footer className="text-center text-lg-start bg-dark text-muted">
      <section className="d-flex justify-content-center justify-content-lg-between p-4 border-bottom">
        <div className="me-5 d-none d-lg-block">
          <span>Fale conosco em nossas redes sociais</span>
        </div>

        <div></div>
      </section>

      <section className="">
        <div className="container text-center text-md-start mt-5">
          <div className="row mt-3">
            <div className="col-md-3 col-lg-4 col-xl-3 mx-auto mb-4">
              <h6 className="text-uppercase fw-bold mb-4">
                <i className="fas fa-gem me-3"></i>Quem somos nós
              </h6>
              <p>
                Somos um negócio digital que possui ação virtualmente e tem como
                propósito desenvolver, melhorar e fazer empresas, líderes e
                gestores
              </p>
            </div>

            <div className="col-md-4 col-lg-3 col-xl-3 mx-auto mb-md-0 mb-4">
              <h6 className="text-uppercase fw-bold mb-4">Contato</h6>
              <i className="fas fa-envelope me-3"></i>
              <p>comercial.performanceoc@gmail.com</p>
              <p>
                <i className="fas fa-envelope me-3"></i>
                @performance.oc
              </p>

              <p>
                <i className="fas fa-envelope me-3"></i>
                São Paulo, Cep 08160-232, Itaim Paulista<br></br> Inscrita no
                CNPJ: 50.491.651/0001-08
              </p>
            </div>
          </div>
        </div>
      </section>

      <div className="text-center p-4">©️ Copyright:</div>
    </footer>
  );
}

export default Footer;
