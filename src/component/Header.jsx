import React from 'react'
import { NavLink } from 'react-bootstrap';

import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';

function Header() {
  return (
    <Navbar bg="grey" expand="lg">
      <Container fluid>
        <Navbar.Brand href="/">Oma Fourm
          
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <Nav
            className="me-auto my-2 my-lg-0"
            style={{ maxHeight: '100px' }}
            navbarScroll
          >
            <Nav.Link href="/home">Home</Nav.Link>
            <Nav.Link href="/discuss">Discuss</Nav.Link>
            
          </Nav>
          
          <Form className="d-flex">
            <Form.Control
              type="search"
              placeholder="尋找文章"
              className="me-2"
              aria-label="Search"
            />
            <Button variant="outline-success">Search</Button>
          </Form>
          <NavLink className='ms-auto' href='/login'>Login</NavLink>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default Header