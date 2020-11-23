import React, { useRef, useState } from "react";
import { Nav, Navbar, Form, FormControl } from "react-bootstrap";
import logo from "../assets/logo.png"
import { NavStyle } from '../css/navigationBar';
import { searchByProducts } from "../Redux/actions";
import {useDispatch} from "react-redux";
import { useHistory } from "react-router-dom";

export const NavigationBar = () => {
    const searchValue = useRef();
    const dispatch = useDispatch();
    let history = useHistory();

    const performSearch = (e) => {
        e.preventDefault();
        dispatch(searchByProducts(searchValue.current.value));
        history.push("/results");
    };

    return (
        <NavStyle>
            <Navbar expand="lg">
                <Navbar.Brand href="/"><img src={logo} alt="logo"/></Navbar.Brand>
                <Navbar.Toggle aria-controls="navbarSupportedContent23" className="navbar-hamburger"/>
                <Navbar.Collapse id="basic-navbar-nav">
                    <Form inline onSubmit={(e) => performSearch(e)}>
                        <svg width="1em" height="1em" viewBox="0 0 16 16" className="bi bi-search" fill="currentColor"
                             xmlns="http://www.w3.org/2000/svg">
                            <path
                                d="M10.442 10.442a1 1 0 0 1 1.415 0l3.85 3.85a1 1 0 0 1-1.414 1.415l-3.85-3.85a1 1 0 0 1 0-1.415z"/>
                            <path
                                d="M6.5 12a5.5 5.5 0 1 0 0-11 5.5 5.5 0 0 0 0 11zM13 6.5a6.5 6.5 0 1 1-13 0 6.5 6.5 0 0 1 13 0z"/>
                        </svg>
                        <FormControl type="text" placeholder="What Would You Like To Cook?" className="search-bar" ref={searchValue} />
                    </Form>
                    <Nav className="nl-auto">
                        <Nav.Item className="nav-elem"><Nav.Link href="/propositions">WHAT TO COOK THIS WEEK</Nav.Link></Nav.Item>
                        <Nav.Item className="nav-elem"><Nav.Link href="/grocery">GROCERY LIST</Nav.Link></Nav.Item>
                        <Nav.Item className="nav-elem"><Nav.Link href="/recipeBox">RECIPE BOX</Nav.Link></Nav.Item>
                    </Nav>
                </Navbar.Collapse>
            </Navbar>
        </NavStyle>
    )
}
