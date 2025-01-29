import './App.css';
import {useEffect, useState} from 'react'
import { Col } from 'react-bootstrap';
import Card from 'react-bootstrap/Card';
import ListGroup from 'react-bootstrap/ListGroup';
import Button from 'react-bootstrap/Button';

function Pelicula ({movie, showMovie}) {
    const [showSinopsis, setShowSinopsis] = useState(false)
    return (
        <Col md={3} >
        <Card className='h-100'>
           <Card.Img src={movie.foto} variant="top"></Card.Img>  
           <Card.Body>
            <Card.Text>{movie.titulo}</Card.Text>
                  
            <ListGroup className="list-group-flush">
                <ListGroup.Item>Director:{movie.director}</ListGroup.Item>
                <ListGroup.Item>Actores:{movie.actoresPrincipales}</ListGroup.Item>
            </ListGroup>

            <Button onClick={() => showMovie(movie)}>Seleccionar</Button>
            <Button onClick={() => setShowSinopsis(!showSinopsis)}>Mas</Button>
            {
                showSinopsis &&
                <Card.Text>

                    {
                        movie.sinopsis
                    }
                    
                </Card.Text>
            }
           </Card.Body>    
       </Card>   
  </Col>
    )
}

export default Pelicula;