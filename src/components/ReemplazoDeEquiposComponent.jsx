import React, { useState } from "react";
import { Button, Form, Container, Row, Col, Table } from "react-bootstrap";

export const ReemplazoDeEquiposComponent = () => {
  const [parametros, setParametros] = useState({
    numeroAños: "",
    maximaEdadMaquina: "",
    edadInicialMaquina: "",
    precioNuevaMaquina: "",
  });
  const [datosAnuales, setDatosAnuales] = useState([]);
  const [resultados, setResultados] = useState(null);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setParametros({ ...parametros, [name]: value });
  };

  const handleAnualDataChange = (index, field, value) => {
    const updatedData = [...datosAnuales];
    updatedData[index] = { ...updatedData[index], [field]: Number(value) };
    setDatosAnuales(updatedData);
  };

  const agregarAñoDatos = () => {
    setDatosAnuales([
      ...datosAnuales,
      { ingreso: '', costoOperacion: '', ingresoVenta: '' },
    ]);
  };

  const calcularDecisionesOptimas = (parametros, datosAnuales) => {
    const {
      numeroAños,
      maximaEdadMaquina,
      edadInicialMaquina,
      precioNuevaMaquina,
    } = parametros;
    let resultado = [];
    let costoAcumulado = precioNuevaMaquina;
    let edadActual = edadInicialMaquina;

    for (let año = 1; año <= numeroAños; año++) {
      const datosAño = datosAnuales[año - 1] || {
        ingreso: 0,
        costoOperacion: 0,
        ingresoVenta: 0,
      };

      costoAcumulado += datosAño.costoOperacion;

      let decision;
      if (edadActual >= maximaEdadMaquina) {
        decision = "Reemplazar";
      } else {
        const costoSiMantiene = costoAcumulado - datosAño.ingreso;
        const costoSiReemplaza =
          precioNuevaMaquina + datosAño.costoOperacion - datosAño.ingresoVenta;
        decision =
          costoSiMantiene < costoSiReemplaza ? "Mantener" : "Reemplazar";
      }

      if (decision === "Reemplazar") {
        costoAcumulado = precioNuevaMaquina;
        edadActual = 1;
      } else {
        edadActual++;
      }

      resultado.push({
        año,
        decision,
        costoAcumulado,
        costoOperacion: datosAño.costoOperacion,
        ingresoVenta: decision === "Reemplazar" ? datosAño.ingresoVenta : 0,
      });
    }

    return resultado;
  };

  const calcularModeloReemplazo = () => {
    const paramsNumeros = {
      numeroAños: Number(parametros.numeroAños),
      maximaEdadMaquina: Number(parametros.maximaEdadMaquina),
      edadInicialMaquina: 1,
      precioNuevaMaquina: Number(parametros.precioNuevaMaquina),
    };


    const decisionesOptimas = calcularDecisionesOptimas(paramsNumeros, datosAnuales.map(dato => ({
      ingreso: Number(dato.ingreso),
      costoOperacion: Number(dato.costoOperacion),
      ingresoVenta: Number(dato.ingresoVenta),
    })));
    setResultados({ cadenaResultados: decisionesOptimas });
  };

  const renderResultadosTabla = (resultados) => {
    return (
      <Table striped bordered hover>
        <thead>
          <tr>
            <th>Año</th>
            <th>Decisión</th>
            <th>Costo Operación</th>
            <th>Ingreso por Venta</th>
            <th>Costo Acumulado</th>
          </tr>
        </thead>
        <tbody>
          {resultados.map((resultado) => (
            <tr key={resultado.año}>
              <td>{resultado.año}</td>
              <td>{resultado.decision}</td>
              <td>{resultado.costoOperacion}</td>
              <td>{resultado.ingresoVenta}</td>
              <td>{resultado.costoAcumulado}</td>
            </tr>
          ))}
        </tbody>
      </Table>
    );
  };

  const renderDatosAnuales = () => {
    return datosAnuales.map((dato, index) => (
      <Row key={index} className="mb-3">
        <Col>
          <Form.Control
            type="number"
            placeholder="Costo de mantenimiento"
            value={dato.costoOperacion}
            onChange={(e) => handleAnualDataChange(index, 'costoOperacion', e.target.value)}
          />
        </Col>
        <Col>
          <Form.Control
            type="number"
            placeholder="Costo de venta"
            value={dato.ingresoVenta}
            onChange={(e) => handleAnualDataChange(index, 'ingresoVenta', e.target.value)}
          />
        </Col>
      </Row>
    ));
  };

  return (
    <Container>
      <h2>Modelo de Reemplazo de Equipos</h2>
      <Form>
        <Row className="mb-3">
          <Col>
            <Form.Group controlId="formNumeroAños">
              <Form.Label>Número de años de proyecto</Form.Label>
              <Form.Control
                type="number"
                placeholder="Ingrese el número de años"
                name="numeroAños"
                value={parametros.numeroAños}
                onChange={handleInputChange}
              />
            </Form.Group>
          </Col>
          <Col>
            <Form.Group controlId="formMaximaEdadMaquina">
              <Form.Label>Tiempo útil de la máquina</Form.Label>
              <Form.Control
                type="number"
                placeholder="Ingrese tiempo en años"
                name="maximaEdadMaquina"
                value={parametros.maximaEdadMaquina}
                onChange={handleInputChange}
              />
            </Form.Group>
          </Col>
        </Row>

        <Row className="mb-3">
          <Col>
            <Form.Group controlId="formPrecioNuevaMaquina">
              <Form.Label>Precio de compra de máquina nueva</Form.Label>
              <Form.Control
                type="number"
                placeholder="Ingrese el precio de la nueva máquina"
                name="precioNuevaMaquina"
                value={parametros.precioNuevaMaquina}
                onChange={handleInputChange}
              />
            </Form.Group>
          </Col>
        </Row>

        <Button variant="primary" onClick={agregarAñoDatos}>
          Agregar Año de Datos
        </Button>

        {renderDatosAnuales()}

        <Button
          onClick={calcularModeloReemplazo}
        >
          Calcular
        </Button>
      </Form>

      {resultados && renderResultadosTabla(resultados.cadenaResultados)}
      <Button href="/">Volver</Button>
    </Container>
  );
};

export default ReemplazoDeEquiposComponent;
