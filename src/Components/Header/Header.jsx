import React from 'react'
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';

function Header() {
  return (
    <div>
        <Navbar className="bg-dark shadow">
        <Container>
          <Navbar.Brand href="/" className='text-light'>
          <i class="fa-solid fa-utensils fa-bounce me-3"></i>
           Resto Cafe
          </Navbar.Brand>
        </Container>
      </Navbar>
    </div>
  )
}

export default Header