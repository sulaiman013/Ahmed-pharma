import React from 'react';
import { Container, Nav, Navbar, NavDropdown} from 'react-bootstrap';
import './Header.css';
import logo from './../../assets/img/logo.png';
import { NavLink } from 'react-router-dom';
import useAuth from '../../hooks/useAuth';
const Header = () => {
    const {contexts} = useAuth();
    const {user, logOut} = contexts;

    return (
        <div>
            <Navbar className = "nav-bg" expand="lg">
  <Container>
    <Navbar.Brand as = {NavLink} to="/home">
        {"  "}
        <img className = "nav-logo2" width = "100px" src={logo} alt="Logo" />
        <span className = "nav-logo">AHMED PHARMA</span></Navbar.Brand>
    <Navbar.Toggle aria-controls="basic-navbar-nav" />
    <Navbar.Collapse id="basic-navbar-nav">
      <Nav className="ms-auto">
        <Nav.Link as = {NavLink}  className = "nav-link" to="/home">Home</Nav.Link>
        <Nav.Link as = {NavLink}  className = "nav-link" to="/about">About</Nav.Link>
        <Nav.Link as = {NavLink}  className = "nav-link" to="/contact">Contact</Nav.Link>
        <Nav.Link as = {NavLink}  className = "nav-link" to="/products">Products</Nav.Link>
        {!user.displayName ? (
            <>
        <Nav.Link as = {NavLink}  className = "nav-link" to="/signup">Sign Up</Nav.Link>
        <Nav.Link as = {NavLink}  className = "nav-link" to="/login">Log In</Nav.Link>
            </>
        ):(
            <NavDropdown title={<img style = {{
                width: '45px',
                borderRadius: '50%'
            }} 
            src = {user.photoURL} alt = ""  />}>
                <div className="text-center p-3">
                <h6>{user.displayName}</h6>
                <p className="m-0">{user.email}</p>
                <button onClick = {logOut} className="btn btn-light">Sign Out</button>
                </div>
          
        </NavDropdown>
        )
        }
        
      </Nav>
    </Navbar.Collapse>
  </Container>
</Navbar>
        </div>
    );
};

export default Header;