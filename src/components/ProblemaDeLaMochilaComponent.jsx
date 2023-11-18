import React, { useState } from "react";
import { Button, Form, Container, Row, Col, Table } from "react-bootstrap";

export const ProblemaDeLaMochilaComponent = () => {
  const [capacidadMochila, setCapacidadMochila] = useState(0);
  const [objetos, setObjetos] = useState([]);
  const [solucion, setSolucion] = useState([]);

  const handleCapacidadChange = (e) => {
    setCapacidadMochila(parseInt(e.target.value, 10));
  };

  const handleObjetosChange = (index, campo, valor) => {
    const nuevosObjetos = objetos.map((objeto, i) => {
      if (i === index) {
        return { ...objeto, [campo]: valor };
      }
      return objeto;
    });
    setObjetos(nuevosObjetos);
  };

  const agregarObjeto = () => {
    setObjetos([...objetos, { peso: 0, valor: 0, cantidad: 1 }]);
  };

  const renderForm = () => {
    return (
      <>
        <Form.Group as={Row}>
          <Form.Label column sm="2">
            Capacidad de la Mochila:
          </Form.Label>
          <Col sm="10">
            <Form.Control type="number" onChange={handleCapacidadChange} />
          </Col>
        </Form.Group>
        {objetos.map((objeto, index) => (
          <Row key={index}>
            <Col>
              <Form.Control
                type="number"
                placeholder="Peso"
                value={objeto.peso}
                onChange={(e) =>
                  handleObjetosChange(
                    index,
                    "peso",
                    parseInt(e.target.value, 10)
                  )
                }
              />
            </Col>
            <Col>
              <Form.Control
                type="number"
                placeholder="Valor"
                value={objeto.valor}
                onChange={(e) =>
                  handleObjetosChange(
                    index,
                    "valor",
                    parseInt(e.target.value, 10)
                  )
                }
              />
            </Col>
            <Col>
              <Form.Control
                type="number"
                placeholder="Cantidad"
                value={objeto.cantidad}
                onChange={(e) =>
                  handleObjetosChange(
                    index,
                    "cantidad",
                    parseInt(e.target.value, 10)
                  )
                }
              />
            </Col>
          </Row>
        ))}
        <Button onClick={agregarObjeto}>Agregar Objeto</Button>
      </>
    );
  };

  const calcularMochila = () => {
    let tabla = Array.from({ length: objetos.length + 1 }, () =>
      Array(capacidadMochila + 1).fill(0)
    );

    for (let i = 1; i <= objetos.length; i++) {
      for (let j = 1; j <= capacidadMochila; j++) {
        if (objetos[i - 1].peso <= j) {
          tabla[i][j] = Math.max(
            objetos[i - 1].valor + tabla[i - 1][j - objetos[i - 1].peso],
            tabla[i - 1][j]
          );
        } else {
          tabla[i][j] = tabla[i - 1][j];
        }
      }
    }

    setSolucion(tabla);
  };

  const renderSolucion = () => {
    return (
      <Table striped bordered hover>
        <thead>
          <tr>
            <th>#</th>
            {Array.from({ length: capacidadMochila + 1 }, (_, i) => (
              <th key={`capacidad-${i}`}>{i}</th>
            ))}
          </tr>
        </thead>
        <tbody>
          {solucion.map((fila, indexFila) => (
            <tr key={`fila-${indexFila}`}>
              <td>{indexFila}</td>
              {fila.map((valor, indexColumna) => (
                <td key={`valor-${indexFila}-${indexColumna}`}>{valor}</td>
              ))}
            </tr>
          ))}
        </tbody>
      </Table>
    );
  };

  return (
    <Container>
      <h2>Problema de la Mochila</h2>
      {renderForm()}
      <Button
        onClick={calcularMochila}
        variant="primary"
        style={{ margin: "10px 0" }}
      >
        Calcular Solución
      </Button>
      <Button onClick={() => setSolucion([])}>
        Reiniciar
      </Button>
      {solucion.length > 0 && renderSolucion()}
      <Row>
        <Col>
        <Button href="/">Volver</Button>
        </Col>
      </Row>
    </Container>
  );
};

export default ProblemaDeLaMochilaComponent;
