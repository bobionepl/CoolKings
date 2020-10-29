import React from "react";
import {Nav, Navbar, Form, FormControl, Button} from "react-bootstrap";
import styled from "styled-components";
import logo from "../assets/logo.png"

const Styles = styled.div`
        
    .navbar { 
        background-color: white;
        border-bottom: 1px solid lightgray;
        position:fixed;
        z-index:421;
        width:100vw;
    }
    
    .navbar-collapse{
            justify-content: space-between;

    }
    
    .navbar-brand {
        border-right: 1px solid lightgray;
     
        right:0px;
    }
    
    .search-bar{
        width:300px;
        border: none;
        box-shadow: none;

    }
    
    
    .navbar-brand, .navbar-nav, .nav-link {
        color: #bbb;
        font-size: 12px;
        font-weight: bold;
        
        &:hover {
            color:white;   
        }
    }
    
    .nav-elem:hover {
        border-bottom: 2px solid gray;
        margin-bottom: -2px;
    }    
`;

export const NavigationBar = () => {

    return (
        <Styles>
            <Navbar expand="lg">
                <Navbar.Brand href="/"><img src={logo} alt="logo"/></Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar"/>
                <Navbar.Collapse id="basic-navbar-nav">
                    <Form inline>
                        <svg width="1em" height="1em" viewBox="0 0 16 16" className="bi bi-search" fill="currentColor"
                             xmlns="http://www.w3.org/2000/svg">
                            <path fill-rule="evenodd"
                                  d="M10.442 10.442a1 1 0 0 1 1.415 0l3.85 3.85a1 1 0 0 1-1.414 1.415l-3.85-3.85a1 1 0 0 1 0-1.415z"/>
                            <path fill-rule="evenodd"
                                  d="M6.5 12a5.5 5.5 0 1 0 0-11 5.5 5.5 0 0 0 0 11zM13 6.5a6.5 6.5 0 1 1-13 0 6.5 6.5 0 0 1 13 0z"/>
                        </svg>
                        <FormControl type="text" placeholder="What Would You Like To Cook?" className="search-bar" />
                    </Form>
                    <Nav className="nl-auto">
                        <Nav.Item className="nav-elem"><Nav.Link href="/">WHAT TO COOK THIS WEEK</Nav.Link></Nav.Item>
                        <Nav.Item className="nav-elem"><Nav.Link href="/">GROCERY LIST</Nav.Link></Nav.Item>
                        <Nav.Item className="nav-elem"><Nav.Link href="/">RECIPE BOX</Nav.Link></Nav.Item>
                    </Nav>
                </Navbar.Collapse>

            </Navbar>
        </Styles>
    )
};

