//https://www.geeksforgeeks.org/dijkstras-shortest-path-algorithm-greedy-algo-7/
//Todo
import React, { useEffect, useState } from "react";
import { Button, Form, Container, Row, Col } from "react-bootstrap";

export const RutasMasCortasComponent = () => {
  const [numVertices, setNumVertices] = useState(0);
  const [graph, setGraph] = useState([]);
  const [srcVertex, setSrcVertex] = useState(0);
  const [distances, setDistances] = useState([]);

  useEffect(() => {
    // Inicializar la matriz de adyacencia con ceros
    const initialGraph = Array.from({ length: numVertices }, () =>
      Array(numVertices).fill(0)
    );
    setGraph(initialGraph);
  }, [numVertices]);

  const V = graph.length; // Número de vértices en el grafo

  // Función para encontrar el vértice con la distancia mínima
  const minDistance = (dist, sptSet) => {
    let min = Number.MAX_VALUE;
    let minIndex = -1;

    for (let v = 0; v < V; v++) {
      if (!sptSet[v] && dist[v] <= min) {
        min = dist[v];
        minIndex = v;
      }
    }
    return minIndex;
  };

  const calcularDijkstra = () => {
    let dist = Array(V).fill(Number.MAX_VALUE);
    let sptSet = Array(V).fill(false);

    dist[0] = 0;

    for (let count = 0; count < V - 1; count++) {
      let u = minDistance(dist, sptSet);
      sptSet[u] = true;

      for (let v = 0; v < V; v++) {
        if (
          !sptSet[v] &&
          graph[u][v] &&
          dist[u] !== Number.MAX_VALUE &&
          dist[u] + graph[u][v] < dist[v]
        ) {
          dist[v] = dist[u] + graph[u][v];
        }
      }
    }

    setDistances(dist);
  };

  const handleSrcVertexChange = (e) => {
    setSrcVertex(Number(e.target.value));
  };

  const renderDistancias = () => {
    return (
      <div>
        <h3>Distancias desde el vértice {srcVertex}:</h3>
        <ul>
          {distances.map((dist, index) => (
            <li key={index}>
              Nodo {index} - Distancia: {dist}
            </li>
          ))}
        </ul>
      </div>
    );
  };

  const handleGraphChange = (row, col, value) => {
    const updatedGraph = graph.map((graphRow, rowIndex) =>
      rowIndex === row
        ? graphRow.map((cell, colIndex) =>
            colIndex === col ? Number(value) : cell
          )
        : graphRow
    );
    setGraph(updatedGraph);
  };

  const renderGraphInput = () => {
    return (
      <div>
        <h3>Matriz</h3>
        {graph.map((row, rowIndex) => (
          <Row key={rowIndex} className="mb-2">
            {row.map((cell, colIndex) => (
              <Col key={colIndex} md={1}>
                <Form.Control
                  type="number"
                  value={cell}
                  onChange={(e) =>
                    handleGraphChange(rowIndex, colIndex, e.target.value)
                  }
                />
              </Col>
            ))}
          </Row>
        ))}
      </div>
    );
  };

  return (
    <Container>
    <h2>Algoritmo de Rutas mas cortas</h2>
    <Form>
      {/* Formulario para el número de vértices y la matriz de adyacencia */}
      <Row className="mb-3">
        <Col>
          <Form.Group controlId="formNumVertices">
            <Form.Label>Número de nodos</Form.Label>
            <Form.Control
              type="number"
              placeholder="Ingrese el número de vértices"
              value={numVertices}
              onChange={(e) => setNumVertices(Number(e.target.value))}
            />
          </Form.Group>
        </Col>
      </Row>

      {numVertices > 0 && (
        <>
          {renderGraphInput()}



          <Button variant="primary" onClick={calcularDijkstra}>
            Calcular Caminos Más Cortos
          </Button>
        </>
      )}

      {distances.length > 0 && renderDistancias()}
    </Form>
    <Row>
        <Col>
        <Button href="/">Volver</Button>
        </Col>
      </Row>
  </Container>
  );
};

export default RutasMasCortasComponent;
