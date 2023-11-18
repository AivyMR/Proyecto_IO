import { OverlayTrigger, Tooltip, Button } from "react-bootstrap";
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

function MenuComponent() {
  return (
    <Container style={{marginTop: '10%', marginRight: '10%'}} fluid='md'>
      <Row>
        <Col md={{ span: 6, offset: 3 }}>
          <OverlayTrigger
            placement="right"
            overlay={
              <Tooltip
                id="tooltip"
                style={{ width: "100%", wordBreak: "break-all" }}
              >
                Este algoritmo encuentra las rutas mas optimas entre nodos de acuerdo al valor que requiere moverse entre ellos.
              </Tooltip>
            }
          >
          <Button style={{width: '400px'}} href="/rutas">Rutas más cortas</Button>
          </OverlayTrigger> 
        </Col>
      </Row>
      <Row style={{marginTop: 10}}>
        <Col md={{ span: 6, offset: 3 }}>
          <OverlayTrigger
              placement="right"
              overlay={
                <Tooltip
                  id="tooltip"
                  style={{ width: "100%", wordBreak: "break-all" }}
                >
                  Este algoritmo se basa en calcular la opcion mas optima para guardar objetos en una mochila de acuerdo a su peso y valor.
                </Tooltip>
              }
            >
            <Button style={{width: '400px'}} href="/mochila">Problema de la Mochila</Button>
            </OverlayTrigger> 
        </Col>
      </Row>
      <Row style={{marginTop: 10}}>
        <Col md={{ span: 6, offset: 3 }}>
        <OverlayTrigger
              placement="right"
              overlay={
                <Tooltip
                  id="tooltip"
                  style={{ width: "100%", wordBreak: "break-all" }}
                >
                  Este algoritmo busca la optimización para reemplazar equipos en el mejor tiempo de acuerdo a su mantenimiento, vida util y reventa.
                </Tooltip>
              }
            >
            <Button style={{width: '400px'}} href="/equipos">Reemplazo de Equipos</Button>
            </OverlayTrigger> 
        </Col>
      </Row>
      <Row style={{marginTop: 10}}>
        <Col md={{ span: 6, offset: 3 }}>
        <OverlayTrigger
              placement="right"
              overlay={
                <Tooltip
                  id="tooltip"
                  style={{ width: "100%", wordBreak: "break-all" }}
                >
                  Este algoritmo se utiliza para encontrar el costo promedio minimo de un árbol de busqueda binario.
                </Tooltip>
              }
            >
            <Button style={{width: '400px'}} href="/arboles">Árboles Binarios de Búsqueda Óptimos</Button>
            </OverlayTrigger> 
        </Col>
      </Row>
      <Row style={{marginTop: 10}}>
        <Col md={{ span: 6, offset: 3 }}>
          <OverlayTrigger
                placement="right"
                overlay={
                  <Tooltip
                    id="tooltip"
                    style={{ width: "100%", wordBreak: "break-all" }}
                  >
                    Este algoritmo se utiliza para saber las probabilidades de que un equipo deportivo gane un partido, utilizando las probabilidades de si juega en casa o no.
                  </Tooltip>
                }
              >
            <Button style={{width: '400px'}} href="/series">Series Deportivas</Button>            
          </OverlayTrigger> 
        </Col>
      </Row>
      <Row style={{marginTop: 10}}>
        <Col md={{ span: 6, offset: 3 }}>
        <OverlayTrigger
                placement="right"
                overlay={
                  <Tooltip
                    id="tooltip"
                    style={{ width: "100%", wordBreak: "break-all" }}
                  >
                    Este algoritmo defina el mínimo de multiplicaciones que se deben hacer para resolver una multiplicación de matrices
                  </Tooltip>
                }
              >
          <Button style={{width: '400px'}} href="/matrices">Multiplicación de Matrices</Button>
        </OverlayTrigger> 
        </Col>
      </Row>
    </Container>
  );
}

export default MenuComponent;