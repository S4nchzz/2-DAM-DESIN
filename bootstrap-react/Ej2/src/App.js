import './App.css';
import { Container, Row, Col, Stack } from 'react-bootstrap';

function App() {
  return (
    <div className='backgroundMain'>
      <Container>
        <Row className="align-items-center mb-5 pt-5">
          <Col lg={6}>
            <img src='pradera.jpg' alt='Pradera verde' width="100%"/>
          </Col>
          <Col lg={2}>
            <Stack gap={5}>
              <img src='hoja.jpeg' alt='Pradera verde' width="100%"/>
              <img src='flor.jpeg' alt='Pradera verde' width="100%"/>
            </Stack>
          </Col>
          <Col>
            <h1>Texto 1</h1>
            <h1>Texto 2</h1>
          </Col>
        </Row>

        <Row className='align-items-center'>
          <Col lg={6}>
            <p>Una montaña es una figura topográfica del relieve terrestre positiva, una eminencia natural que se caracteriza por su altitud y, más generalmente, por su altura relativa, o incluso por su volumen, pendiente, espaciado o continuidad.2​ Aparecen como parte de un conjunto —una cadena montañosa, es decir cordillera, macizo, sierra...— o formando un relieve aislado.Nota 1​Nota 2​Nota 3​Nota 4​ No existe una definición única de montaña, un término que apareció en Europa entre los siglos X y XII, y son numerosos los localismos y regionalismos usados para describir este accidente geográfico, que puede referirse tanto a una cumbre empinada como a una elevación</p>
          </Col>

          <Col lg={2}>
            <Stack gap={5}> 
              <img src='selva.jpg' alt='Pradera verde' width="100%"/>
              <img src='arbol.jpg' alt='Pradera verde' width="100%"/>
            </Stack>
          </Col>

          <Col>
            <h1>Texto 3</h1>
            <h1>Texto 4</h1>
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default App;
