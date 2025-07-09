import {useNavigate} from 'react-router-dom'
import React from 'react';
import { Badge,Navbar, Nav, Container, NavDropdown } from 'react-bootstrap';
import { FaShoppingCart, FaUser } from 'react-icons/fa';
import { useSelector,useDispatch } from 'react-redux';
import {useLogoutMutation} from '../slices/usersApiSlice'
import {logout} from '../slices/authSlice'




import logo from '../assets/logo.png';

const Header = () => {

  const {cartItems} = useSelector((state) => state.cart)
  const {userInfo} = useSelector((state) => state.auth)

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const [logoutApiCall] =useLogoutMutation();

  const logoutHandler = async () =>{
    
    try{
      await logoutApiCall().unwrap();
    dispatch(logout());
    navigate('/login')

    }catch(err){

      console.log(err);

    }
  }


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
             
               {userInfo ? (
                <NavDropdown title= {userInfo.name} id='username'>

                <Nav.Link href='/profile'>
                  <NavDropdown.Item>Profile</NavDropdown.Item>
                  </Nav.Link>

                  <NavDropdown.Item onClick={logoutHandler}>

                    logout

                  </NavDropdown.Item>



                </NavDropdown>
               ) 

               : (
                
                <Nav.Link href='/login'>
                  <FaUser /> Sign IN
                </Nav.Link>

               

               )}
              
                
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </header>
  );
};

export default Header;



