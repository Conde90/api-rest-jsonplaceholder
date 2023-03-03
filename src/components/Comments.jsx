
import Card from 'react-bootstrap/Card';
import { useState, useEffect } from "react";

function Comments() {
    const [comments, setComments] = useState([]);

  useEffect(() => {
    obtenerComments()}, []
  );

  const obtenerComments = async () => {
    try {
      const response = await fetch(
        "https://jsonplaceholder.typicode.com/comments"
      );
      const comentarios = await response.json();
      //console.log(comments);
      setComments(comentarios);
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <div className='container py-5'>
        <h1 className='text-center mt-5'>Comments</h1>
      {
        comments.map ( comment => (
        <Card border="light" className="light mb-5">
          <Card.Header>{comment.email}</Card.Header>
          <Card.Body>
            <Card.Title>{comment.name} </Card.Title>
            <Card.Text>
            {comment.body}
            </Card.Text>
          </Card.Body>
        </Card>
        ))
      }
    </div>
        )}
export default Comments