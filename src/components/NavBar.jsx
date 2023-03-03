import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import {Outlet, Link} from 'react-router-dom';
import "bootstrap/dist/css/bootstrap.min.css";

function NavBar() {
  return (
    <>
        <Navbar bg="dark" variant="dark" className='fixed-top' >
        <Container>
          <Navbar.Brand as={Link} to = "/">BlackCoder | JSONPlaceholder</Navbar.Brand>
          <Nav className="justify-content-right">
            <Nav.Link as={Link} to = "/">Home</Nav.Link>
            <Nav.Link as={Link} to = "/posts">Posts</Nav.Link>
            <Nav.Link as={Link} to = "/comments">Comments</Nav.Link>
            <Nav.Link as={Link} to = "/photos">Photos</Nav.Link>
            <Nav.Link as={Link} to = "/todos">Todos</Nav.Link>
            <Nav.Link as={Link} to = "/users">Users</Nav.Link>
          </Nav>
        </Container>
      </Navbar>
      <section>
        <Outlet>

        </Outlet>
      </section>
    </>
  )
}

export default NavBar