import React from 'react'
import { Navbar } from 'react-bootstrap'

const BarraDeNav = () => {
  return (
    <div>
        <Header>
            
            <Navbar>
  <Container>
    <Navbar.Brand href="#home">Navbar with text</Navbar.Brand>
    <Navbar.Toggle />
    <Navbar.Collapse className="justify-content-end">
      <Navbar.Text>
        Signed in as: <a href="#login">Mark Otto</a>
      </Navbar.Text>
    </Navbar.Collapse>
  </Container>
</Navbar>
    
        </Header>
    </div>
  )
}

export default BarraDeNav