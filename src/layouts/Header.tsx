import React from 'react'
import Navbar from 'react-bootstrap/Navbar'
import Container from 'react-bootstrap/Container'
import Offcanvas from 'react-bootstrap/Offcanvas'
import Nav from 'react-bootstrap/Nav'
import Form from 'react-bootstrap/Form'
import NavDropdown from 'react-bootstrap/NavDropdown'
import Button from 'react-bootstrap/Button'
import FormControl from 'react-bootstrap/FormControl'
import CartItem from '../components/CartItem'

const Header = () => {
  return (
    <div>
      <Navbar bg="light" expand={false}>
  <Container fluid>
    <Navbar.Brand href="#">Logo</Navbar.Brand>

    <Navbar.Toggle aria-controls="offcanvasNavbar" />
    <Navbar.Offcanvas
      id="offcanvasNavbar"
      aria-labelledby="offcanvasNavbarLabel"
      placement="end"
    >
      <Offcanvas.Header closeButton>
        <Offcanvas.Title className='text-mid' id="offcanvasNavbarLabel">My Cart</Offcanvas.Title>
      </Offcanvas.Header>
      <Offcanvas.Body>
        <Nav className="justify-content-end flex-grow-1 pe-3">
        <p className="text-p">3 Items</p>
        <CartItem />
        <CartItem />
        </Nav>
        
      </Offcanvas.Body>
    </Navbar.Offcanvas>
  </Container>
</Navbar>
    </div>
  )
}

export default Header