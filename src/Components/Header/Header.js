import { Button, Navbar, Nav, Form, FormControl } from 'react-bootstrap';
import React from 'react';
import logo from '../../logo.png';
import './Header.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons';
import banner from '../../bannerbackground.png';
import { Link } from 'react-router-dom';


const Header = () => {
    return (
        <div >
            <Navbar bg="light" variant="light">
                <Navbar.Brand href="#home">
                    <img src={logo} alt=""/>
                </Navbar.Brand>
                <Nav className="ml-auto mr-5">
                    <Nav.Link href="#home"><FontAwesomeIcon icon={faShoppingCart} /></Nav.Link>
                    <Nav.Link href="#home" className="text-dark mx-4">Login</Nav.Link>
                    <Button variant="danger">Sign in</Button>
                </Nav>
            </Navbar>
            <div className="banner">

            </div>

        </div>
    );
};

export default Header;