import React from 'react'
import { Container, Navbar } from 'react-bootstrap'
import { Img, Imgg } from '../styles/BarraDeNav'

const BarraDeNav = () => {
  return (
    <div>
        <div>
            
            <Navbar>
  <Container>
    <Navbar.Brand href="#home">
      <Img src='https://res.cloudinary.com/alexa01020304/image/upload/v1648765380/01-nvidia-logo-vert-500x200-2c50-p_2x_fiuzzs.png'
       alt ='logo'/>
      </Navbar.Brand>

      <Navbar.Brand href="#home">
      <Img src='https://res.cloudinary.com/alexa01020304/image/upload/v1648765380/LA_tnvog3.png'
       alt ='lenguaje'/>
      </Navbar.Brand>
  </Container>
  </Navbar>

<Navbar bg="dark" variant="dark">
  <Container >
    <Navbar.Brand href="#home">
      <Imgg src='https://res.cloudinary.com/alexa01020304/image/upload/v1648765380/01-nvidia-logo-vert-500x200-2c50-p_2x_fiuzzs.png'
       alt ='logo'/>
      </Navbar.Brand>

      <Navbar.Brand href="#home">
      <Img src='https://res.cloudinary.com/alexa01020304/image/upload/v1648765380/LA_tnvog3.png'
       alt ='lenguaje'/>
      </Navbar.Brand>
  </Container>
</Navbar>
    
        </div>
    </div>
  )
}

export default BarraDeNav