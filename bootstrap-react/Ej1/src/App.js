import './App.css';
import { Container, Row, Col } from 'react-bootstrap';


function App() {
  return (
    <div>
      <header className="App-header">
        <h1>Ejercicio 1</h1>
        <Container className='containerBox'>
          <Row>
            <Col sm={12} md={6} lg={4}>Mujer</Col>
            <Col sm={12} md={6} lg={4}>Hombre</Col>
            <Col sm={12} md={6} lg={4}>Niños</Col>
          </Row>
        </Container>
      </header>
    </div>
  );
}

export default App;
