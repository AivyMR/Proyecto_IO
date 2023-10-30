import { useState } from "react"
import { Button, Col, Container, Form, Row } from "react-bootstrap"

export const ProblemaDeLaMochilaComponent = () => {
  const [numeroObjetosInputs, setNumeroObjetosInputs] = useState("")
  const inputs = []


  const handleChange = event => {
    setNumeroObjetosInputs(event.target.value);
  };


  for (let i = 1; i <= numeroObjetosInputs; i++) {
    inputs.push("Objeto: " + i);
  }


  return (
    <Container>
        <div>ProblemaDeLaMochilaComponent</div>
        <br />
        <Row>
        <Col xs={6}>
          <Form.Control size="lg" type="number" placeholder="Capacidad de la mochila (0-20)"/>
        </Col>
      </Row>
      <br />
      <Row>
        <Col xs={6}>
          <Form.Control size="lg" type="number" placeholder="Cantidad de objetos (1-10)" value={numeroObjetosInputs} onChange={handleChange}/>
        </Col>
      </Row>
      <br />
      {inputs.map((element) => {
        return (
          <Row style={{marginTop: '15px'}}>
            <Col>
              <span>{element}</span>
            </Col>
            <Col>
              <Form.Control size="md" type="number" placeholder="Costo"/>
            </Col>
            <Col>
              <Form.Control size="md" type="number" placeholder="Valor"/>
            </Col>
            <Col>
              <Form.Control size="md" type="number" placeholder="Cantidad disponible"/>
            </Col>
            <Col>
              <Button>Definir</Button>
            </Col>
          </Row>
        )
      })}
      <Button href="/">Volver</Button>
    </Container>
  )
}
