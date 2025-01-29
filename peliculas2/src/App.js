import { useEffect, useState } from 'react';
import './App.css';
import Pelicula from './Pelicula';
import { Container, Row, Col, Card, ListGroup, ListGroupItem } from 'react-bootstrap';

function App() {
  const [peliculas, setPeliculas] = useState([])
  const [showBigMovie, setShowBigMovie] = useState(false);

  const [selectedBigMovie, setSelectedBigMovie] = useState();

  useEffect(() => {
    const fetchPeliculas = async () => {
      const data = await fetch('peliculas.json')
      const json = await data.json();

      setPeliculas(json);
    }

    fetchPeliculas();
  }, [])

  const showMovieSpecs = ((mov) => {
    setShowBigMovie(true)

    setSelectedBigMovie(mov)
  })

  return (
    <div className="App">
      <Container fluid className='p-4'>
        <Row className='mb-4'>
          {
            showBigMovie &&
            <>
              <Col md={8} className='ml-1'>
                <img src={selectedBigMovie.foto} alt={selectedBigMovie.titulo} width={'400px'}/>
              </Col>
              
              <Col md={4} className='ml-1'>
                  <Card>
                    <Card.Body>
                      <Card.Text>{selectedBigMovie.titulo}</Card.Text>
                      <Card.Text>{selectedBigMovie.director}</Card.Text>
                      <ListGroup>
                        {
                          selectedBigMovie.actoresPrincipales.map((act) => {
                            return <ListGroup.Item>{act}</ListGroup.Item>
                          })
                        }
                      </ListGroup>

                      <Card.Text>{selectedBigMovie.sinopsis}</Card.Text>
                    </Card.Body>
                  </Card>
              </Col>
              </>
          }
        </Row>
        <Row>
          {
            peliculas.map((element, index) => {
              return (
                  <Pelicula movie={element} showMovie={showMovieSpecs}></Pelicula>
              )
            })
          }
        </Row>
      </Container>
    </div>
  );
}

export default App;