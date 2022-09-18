import React from 'react'
import { Container, Nav, Navbar } from 'react-bootstrap'

const Header = ({headerdata}) => {
  return (
    <>
      <Navbar bg="dark" expand="lg">
      <Container>
        <Navbar.Brand href="#home"  style={{color:"white"}}>{headerdata.title}</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="#home" style={{color:"white"}}>{headerdata.home}</Nav.Link>
            <Nav.Link href="#link"  style={{color:"white"}}>Link</Nav.Link>
            
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>

    </>
  )
}

export default Header
