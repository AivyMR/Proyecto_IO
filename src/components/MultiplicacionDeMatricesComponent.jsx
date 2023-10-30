import { Button, Form, Container, Row, Col, Alert } from "react-bootstrap"
import { useState, useEffect } from 'react'

export const MultiplicacionDeMatricesComponent = () => {

  const [numeroInputs, setNumeroInputs] = useState("")
  const [numeroMatrices, setNumeroMatrices] = useState("")
  const [fila, setFila] = useState(0)
  const [columna, setColumna] = useState(0)
  const [arrayMat, setArrayMat] = useState([])
  const [show, setShow] = useState(false)
  const [resultado, setResultado] = useState(0)

  const inputs = []
  const matricesArray = []

  const handleChange = event => {
    setNumeroInputs(event.target.value);
    setNumeroMatrices(event.target.value)
  };

  const handleArrayMatValues = (id) => {
    setArrayMat([...arrayMat, {
      id: id,
      f: fila,
      c: columna
    }])
  }

  const handleFila = event => {
    setFila(event.target.value)
  };

  const handleColumna = event => {
    setColumna(event.target.value);
  };

  for (let i = 1; i <= numeroInputs; i++) {
    inputs.push("Defina el tamano de la matriz: " + i);
  }

  const handleCalcular = event => {
    event.preventDefault();
    arrayMat.forEach(element => {
      matricesArray.push(element.f)
      if (element.id == numeroMatrices - 1) {
        matricesArray.push(element.c)
      }
    });
    setResultado(MatrixChainOrder(matricesArray, 1, numeroMatrices))
    setShow(true)
  };

  useEffect(() => {
    console.log(arrayMat)
  }, [arrayMat])


  // matrix chain multiplication
  // Based on : https://www.geeksforgeeks.org/matrix-chain-multiplication-dp-8/

  const MatrixChainOrder = (p, i, j) => {
    if (i == j)
      return 0;

    let min = Number.MAX_VALUE;

    let k = 0;
    for (k = i; k < j; k++) {
      let count = MatrixChainOrder(p, i, k)
        + MatrixChainOrder(p, k + 1, j)
        + p[i - 1] * p[k] * p[j];

      if (count < min)
        min = count;
    }

    return min;
  }


  return (
    <Container>
      <br />
      <div>MultiplicacionDeMatricesComponent</div>
      <br />
      <Row>
        <Col xs={6}>
          <Form.Control size="lg" type="number" placeholder="Cantidad de matrices" value={numeroInputs} onChange={handleChange} />
        </Col>
      </Row>
      <br />
      {inputs.map((element) => {
        return (
          <Row style={{ marginTop: '15px' }}>
            <Col>
              <span>{element}</span>
            </Col>
            <Col>
              <Form.Control size="md" type="number" placeholder="Filas" onChange={(e) => handleFila(e)} id={'fila' + (element.charAt(element.length - 1) - 1)} />
            </Col>
            <Col>
              <Form.Control size="md" type="number" placeholder="Columnas" onChange={(e) => handleColumna(e)} id={'columna' + (element.charAt(element.length - 1) - 1)} />
            </Col>
            <Col>
              <Button id={(element.charAt(element.length - 1) - 1)} onClick={(e) => handleArrayMatValues(e.target.id)}>Definir</Button>
            </Col>
          </Row>
        )
      })}
      <Row>
        <Col>
          <Button style={{ marginBottom: '15px' }} onClick={handleCalcular}>Calcular</Button>
        </Col>
      </Row>
      <Row>
        <Col>
          {show ? (
            <Alert variant='info'>
              La cantidad mínima de multplicaciones es: {resultado}
            </Alert>
          ) : <></>}
        </Col>
      </Row>
      <Button href="/">Volver</Button>
    </Container>
  )
}
