import React, { useState } from "react";
import { Button, Form, Container, Row, Col, Table } from "react-bootstrap";

export const SeriesDeportivasComponent = () => {
  const [numeroMaximoJuegos, setNumeroMaximoJuegos] = useState(11);
  const [probabilidadCasa, setProbabilidadCasa] = useState(0);
  const [probabilidadVisita, setProbabilidadVisita] = useState(0);
  const [formatoSerie, setFormatoSerie] = useState([]);
  const [resultados, setResultados] = useState([]);


  const calcularSeriesDeportivas = () => {
    const calcularProbabilidad = (juegoActual, victoriasA, victoriasB) => {
      if (victoriasA === numeroMaximoJuegos) {
        return 1; 
      }
      if (victoriasB === numeroMaximoJuegos) {
        return 0; 
      }
      if (juegoActual > numeroMaximoJuegos * 2 - 1) {
        return 0; 
      }

      const esLocal = formatoSerie[juegoActual];
      const probabilidadGanar = esLocal ? probabilidadCasa : probabilidadVisita;

      const probGanaA =
        probabilidadGanar *
        calcularProbabilidad(juegoActual + 1, victoriasA + 1, victoriasB);

      const probGanaB =
        (1 - probabilidadGanar) *
        calcularProbabilidad(juegoActual + 1, victoriasA, victoriasB + 1);

      return probGanaA + probGanaB;
    };

    console.log("Formato Serie:", formatoSerie); 
    const probabilidadAGanaSerie = calcularProbabilidad(0, 0, 0);
    console.log("Probabilidad calculada:", probabilidadAGanaSerie);
    setResultados([{ probabilidadAGanaSerie }]);
  };

  const handleFormatoSerieChange = (index, esLocal) => {
    let nuevoFormato = [...formatoSerie];
    nuevoFormato[index] = esLocal;
    setFormatoSerie(nuevoFormato);
  };

  const renderForm = () => {
    const renderFormatoSerie = () => {
      return Array.from({ length: numeroMaximoJuegos }, (_, index) => (
        <Form.Group as={Row} key={index}>
          <Form.Label column sm="4">
            Juego {index + 1} - Equipo A es Local:
          </Form.Label>
          <Col sm="8">
            <Form.Check
              type="radio"
              label="Local"
              name={`juego-${index}`}
              onChange={() => handleFormatoSerieChange(index, true)}
            />
            <Form.Check
              type="radio"
              label="Visitante"
              name={`juego-${index}`}
              onChange={() => handleFormatoSerieChange(index, false)}
            />
          </Col>
        </Form.Group>
      ));
    };

    return (
      <>
        <Form.Group as={Row}>
          <Form.Label column sm="4">
            Probabilidad de Ganar en Casa:
          </Form.Label>
          <Col sm="8">
            <Form.Control
              type="number"
              value={probabilidadCasa}
              onChange={(e) => setProbabilidadCasa(parseFloat(e.target.value))}
            />
          </Col>
        </Form.Group>
        <Form.Group as={Row}>
          <Form.Label column sm="4">
            Probabilidad de Ganar de Visita:
          </Form.Label>
          <Col sm="8">
            <Form.Control
              type="number"
              value={probabilidadVisita}
              onChange={(e) =>
                setProbabilidadVisita(parseFloat(e.target.value))
              }
            />
          </Col>
        </Form.Group>
        {renderFormatoSerie()}
        <Button onClick={calcularSeriesDeportivas} variant="primary">
          Calcular Probabilidades
        </Button>
      </>
    );
  };

  return (
    <Container>
      <h2>Series Deportivas</h2>
      {renderForm()}
      {resultados.length > 0 && (
        <Table striped bordered hover>
          <thead>
            <tr>
              <th>Resultado</th>
              <th>Probabilidad</th>
            </tr>
          </thead>
          <tbody>
            {resultados.map((resultado, index) => (
              <tr key={index}>
                <td>Probabilidad de que el equipo A gane la serie</td>
                <td>{resultado.probabilidadAGanaSerie}</td>
              </tr>
            ))}
          </tbody>
        </Table>
      )}
      <Row>
        <Col>
        <Button href="/">Volver</Button>
        </Col>
      </Row>
      
    </Container>
  );
};
