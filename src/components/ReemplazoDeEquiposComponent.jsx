import { useState } from "react"
import { Button, Col, Container, Form, Row } from "react-bootstrap"

export const ReemplazoDeEquiposComponent = () => {
  const [numeroVidaUtilInputs, setNumeroVidaUtilInputs] = useState("")
  const inputs = []

  const handleChange = event => {
    setNumeroVidaUtilInputs(event.target.value);
  };


  for (let i = 1; i <= numeroVidaUtilInputs; i++) {
    inputs.push("Año: " + i);
  }

  return (
    <Container>
        <div>ReemplazoDeEquiposComponent</div>
        <br />
        <Row>
        <Col xs={6}>
          <Form.Control size="lg" type="number" placeholder="Costo inicial del equipo"/>
        </Col>
      </Row>
      <br />
      <Row>
        <Col xs={6}>
          <Form.Control size="lg" type="number" placeholder="Plazo del proyecto (1-30)"/>
        </Col>
      </Row>
      <br />
      <Row>
        <Col xs={6}>
          <Form.Control size="lg" type="number" placeholder="Vida util del equipo (1-10)" value={numeroVidaUtilInputs} onChange={handleChange}/>
        </Col>
      </Row>
      {inputs.map((element) => {
        return (
          <Row style={{marginTop: '15px'}}>
            <Col>
              <span>{element}</span>
            </Col>
            <Col>
              <Form.Control size="md" type="number" placeholder="Mantenimiento"/>
            </Col>
            <Col>
              <Form.Control size="md" type="number" placeholder="Venta"/>
            </Col>
            <Col>
              <Form.Control size="md" type="number" placeholder="Ganancia (opcional)"/>
            </Col>
            <Col>
              <Button>Definir</Button>
            </Col>
          </Row>
        )
      })}
      <br />
        <Button href="/">Volver</Button>
    </Container>
  )
}
