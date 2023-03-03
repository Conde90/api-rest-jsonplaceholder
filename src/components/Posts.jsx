import Card from 'react-bootstrap/Card';
import Container from 'react-bootstrap/esm/Container';
import { useState, useEffect } from "react";


function Posts() {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    obtenerPosts(), [];
  });

  const obtenerPosts = async () => {
    try {
      const response = await fetch(
        "https://jsonplaceholder.typicode.com/posts"
      );
      const posteos = await response.json();
      //console.log(posteos);
      setPosts(posteos);
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <div className='py-5'>
        <h1 className='text-center mt-5'>Posts</h1>
    { 
        posts.map(post => (
    <Container>
    <Card className='mt-5'>
      <Card.Header>{post.title}</Card.Header>
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p>
            {' '}
            {post.body}{' '}
          </p>
          <footer className="blockquote-footer">
            {post.id}
          </footer>
        </blockquote>
      </Card.Body>
    </Card>
    </Container>
        ))
    }
    </div>
  )
}

export default Posts