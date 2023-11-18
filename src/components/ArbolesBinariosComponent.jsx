import React, { useState } from 'react';
import { Button, Form, Container, Table } from "react-bootstrap";

export const ArbolesBinariosComponent = () => {
  let INF = 99999;
  const V = 4; // Número de vértices en el grafo
  const initialGraph = Array.from({ length: V }, () => new Array(V).fill(INF));
  const [graph, setGraph] = useState(initialGraph);
  const [distances, setDistances] = useState([]);

  const handleInputChange = (i, j, value) => {
    const newGraph = graph.map((row, ri) => row.map((cell, ci) => {
      if (ri === i && ci === j) {
        return value === '' || isNaN(value) ? INF : Number(value);
      }
      return cell;
    }));
    setGraph(newGraph);
  };

  const floydWarshall = () => {
    let dist = graph.map(inner => inner.slice());
    for (let k = 0; k < V; k++) {
      for (let i = 0; i < V; i++) {
        for (let j = 0; j < V; j++) {
          if (dist[i][k] + dist[k][j] < dist[i][j]) {
            dist[i][j] = dist[i][k] + dist[k][j];
          }
        }
      }
    }
    setDistances(dist);
  };

  return (
    <Container>
      <h2>Busqueda de árboles binarios</h2>
      <Form>
        {graph.map((row, i) => (
          <div key={i} className="mb-3">
            {row.map((cell, j) => (
              <Form.Control
                key={j}
                type="text"
                placeholder={`Grafo[${i}][${j}]`}
                value={cell === INF ? '' : cell}
                onChange={e => handleInputChange(i, j, e.target.value)}
                style={{ width: '100px', display: 'inline-block', margin: '5px' }}
              />
            ))}
          </div>
        ))}
      </Form>
      <Button onClick={floydWarshall} variant="primary">Calcular Distancias</Button>
      {distances.length > 0 && (
        <>
          <h3>Matriz de Distancia</h3>
          <Table striped bordered hover>
            <tbody>
              {distances.map((row, i) => (
                <tr key={i}>
                  {row.map((cell, j) => (
                    <td key={j}>{cell === INF ? 'INF' : cell}</td>
                  ))}
                </tr>
              ))}
            </tbody>
          </Table>
        </>
      )}
      <Button href="/">Volver</Button>
    </Container>
  );
};
