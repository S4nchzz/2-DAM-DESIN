import React, { useContext } from 'react';
import { Card, CardGroup, Row, Col, Container } from 'react-bootstrap';
import { NewsContext } from '../context/NewsContext.js';
import { Link } from 'react-router-dom';

export default function NewsList() {
  const { noticias } = useContext(NewsContext);

  return (
    <Container>
      <Row>
      {noticias.map((noticia, index) => (
        <Col xs={6} md={3}>
          <Card key={index}>
            <Card.Body>
              <Card.Text>
                <Link to={`/news/${index}`}>{noticia.titulo}</Link>
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>
      ))}
      </Row>
    </Container>
  );
}