import React, { useState } from "react";
import "./envio.css";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";

function Formulario() {
  const [email, setEmail] = useState("");
  const handleOnSubmit = async (event) => {
    event.preventDefault();
    let result = await fetch("https://backeendemail.herokuapp.com/users", {
      method: "post",
      body: JSON.stringify({ email }),
      headers: {
        "Content-Type": "application/json",
      },
    });
    result = await result.json();
    console.warn(result);
    if (result) {
      alert("Data saved succesfully");
      setEmail("");
    }
  };

  return (
    <div className="formulario">
      <h3>COLOQUE SEU EMAIL AQUI</h3>
      <Form>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Email address</Form.Label>
          <Form.Control
            className="input"
            value={email}
            onChange={(event) => setEmail(event.target.value)}
            type="email"
            placeholder="Enter email"
          />
          <Form.Text className="text-muted">
            ASSIM QUE VC ENVIAR SEU EMAIL, ENTRAREMOS EM CONTATO
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
