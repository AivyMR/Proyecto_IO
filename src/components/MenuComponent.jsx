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
                Explicacion Rutas mas cortas
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
                  Explicacion Problema de la Mochila
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
                  Explicacion Reemplazo de Equipos
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
                  Explicacion Arboles Binarios de Busqueda Optimos
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
                    Explicacion Series Deportivas
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
                    Explicacion Multiplicacion de Matrices
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