import React, { useState } from "react";
import "./envio.css";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";

function Formulario() {
  const [email, setEmail] = useState("");
  const [nome, setNome] = useState("");
  const [telefone, setTelefone] = useState("");
  const handleOnSubmit = async (event) => {
    event.preventDefault();

    if (!nome || !email || !telefone) {
      alert("Preencha todos os campos corretamente.");
      return;
    }

    let result = await fetch("https://backeendemail.herokuapp.com/users", {
      method: "post",
      body: JSON.stringify({ email, nome, telefone }),
      headers: {
        "Content-Type": "application/json",
      },
    });
    result = await result.json();
    console.warn(result);
    if (result) {
      alert("formulário enviado");
      setEmail("");
      setNome("");
      setTelefone("");
    }
  };

  return (
    <div className="formulario">
      <h3>
        GARANTA SUA OPORTUNIDADE <br></br> PREENCHENDO O FORMULÁRIO ABAIXO
      </h3>
      <Form>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label className="nomecampo"> Seu Melhor Email</Form.Label>
          <Form.Control
            className="input"
            value={email}
            onChange={(event) => setEmail(event.target.value)}
            type="email"
            placeholder="Enter email"
          />

          <Form.Label className="nomecampo">Nome Completo</Form.Label>
          <Form.Control
            className="input"
            value={nome}
            onChange={(event) => setNome(event.target.value)}
            type="name"
            placeholder="João Vitor Santos"
          />

          <Form.Label className="nomecampo">Whatsapp</Form.Label>
          <Form.Control
            className="input"
            value={telefone}
            onChange={(event) => setTelefone(event.target.value)}
            type="tel"
            placeholder="975826347 (somente números)"
          />
          <Form.Text className="text-muted">
            ASSIM QUE VOCÊ ENVIAR O FORMULÁRIO, ENTRAREMOS EM CONTATO
          </Form.Text>
        </Form.Group>
        <Button variant="primary" onClick={handleOnSubmit} type="submit">
          Enviar
        </Button>
      </Form>
    </div>
  );
}

export default Formulario;
