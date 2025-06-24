
import React from 'react';
import { Badge,Navbar, Nav, Container } from 'react-bootstrap';
import { FaShoppingCart, FaUser } from 'react-icons/fa';

import { useSelector } from 'react-redux';




import logo from '../assets/logo.png';

const Header = () => {

  const {cartItems} = useSelector((state) => state.cart)


  return (
    <header>
      <Navbar bg="dark" variant="dark" expand="lg" collapseOnSelect>
        <Container>
          
            <Navbar.Brand  href='/'>
              <img src={logo} alt="Ark-Shop" height="30" className="d-inline-block align-top" />
              {' '}Ark-Shop
            </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="ms-auto">
              
                <Nav.Link href='/cart'><FaShoppingCart /> Cart

                {
                  cartItems.length > 0 && (
                    <Badge pill bg='success' style={{marginLeft : '5px'}}>

                      {cartItems.reduce((a ,c )=> a + c.qty, 0)}

                    </Badge>
                  )
                }
                
                
                </Nav.Link>
             
              
                <Nav.Link href='/'><FaUser /> Sign In</Nav.Link>
              
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </header>
  );
};

export default Header;



