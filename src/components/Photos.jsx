import Card from 'react-bootstrap/Card';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import { useState, useEffect } from "react";

function Photos() {
    const [photos, setPhotos] = useState([]);

  useEffect(() => {
    obtenerFotos()}, []
  );

  const obtenerFotos = async () => {
    try {
      const response = await fetch(
        "https://jsonplaceholder.typicode.com/photos"
      );
      const fotos = await response.json();
      setPhotos(fotos);
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <div className='container py-5'>
        <h1 className='text-center mt-5'>Photos</h1>
    <Row xs={1} md={4} className="g-4">
      {
        photos.map (photo => (
        <Col key={photo.id}>
          <Card style={{height:"28rem"}}>
            <Card.Img variant="top" src={photo.url} />
            <Card.Body>
              <Card.Title>{photo.id}</Card.Title>
              <Card.Text>
                {photo.title}
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>
        ))
      }
    </Row>
    </div>
  )
}

export default Photos