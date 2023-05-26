import React, { useState } from 'react';
import { Container, FormControl, Navbar, Nav, Form } from "react-bootstrap";
import { Link} from "react-router-dom";
import logo from "./logo60.png";
import Styled from "styled-components"

const Styles = Styled.div `

a, .navbar-brand, .navbar-nav .nav-link, .link {
    color: #ffffff;
    text-decoration:none;
    &:hover {
        color: white;   
        
    }
}

`
export default function Header() {
        return(
        <>  
        <Styles>
            <Navbar sticky="top" collapseOnSelect expand="lg" bg="secondary" variant="dark">
                <Container>
                    <Navbar.Brand href="/">
                        <img
                            src={logo}
                            height="30"
                            width="30"
                            className="d-inline-block align-top"
                            alt="Logo"
                        /> Белая ромашка
                    </Navbar.Brand>
                    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                    <Navbar.Collapse id="responsive-navbar-nav" >
                        <Nav className="mr-auto">
                            {/* <Nav.Link><Link to="/"> Home </Link ></Nav.Link> */}
                            <Nav.Link><Link to="/doctors"> Врачи </Link ></Nav.Link>
                            {/* <Nav.Link><Link to="/analyses">Анализы</Link></Nav.Link>                           */}
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
            </Styles>
        </>
        )
    }



