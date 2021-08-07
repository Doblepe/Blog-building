import React from 'react'
import { Container, Navbar, Nav } from 'react-bootstrap'
import { Link } from 'react-router-dom'



export default function HeaderComp() {
  return (<Navbar bg="dark" variant="dark">
    <Container>
      <Navbar.Brand href="#home">Navbar</Navbar.Brand>
      <Nav className="me-auto">
        <Nav.Link as={Link} to="/">Home </Nav.Link>
        <Nav.Link as={Link} to="/posts">Posts</Nav.Link>
        <Nav.Link as={Link} to="/contact">Contacto</Nav.Link>
      </Nav>
    </Container>
  </Navbar>)
}