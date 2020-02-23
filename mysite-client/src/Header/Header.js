import React, { Fragment, useContext } from 'react'
import { LinkContainer } from 'react-router-bootstrap'
import { Navbar, Nav, NavItem } from 'react-bootstrap';
import { Link } from 'react-router-dom';

import { store } from '../Store/Store'

function Header() {
    const { state } = useContext(store);

    const RightHeader = () => {
        let userLoggedIn = <LinkContainer to="/login">
            <NavItem>{state.user.name}</NavItem>
        </LinkContainer>;

        let userNotLoggedIn = <Fragment>  <LinkContainer to="/signup">
            <NavItem>Signup</NavItem>
        </LinkContainer>
            <LinkContainer to="/login">
                <NavItem>Login</NavItem>
            </LinkContainer></Fragment>

        let userSection = (state.user.name) ? userLoggedIn : userNotLoggedIn
        let rightHeader = <Nav pullRight>{userSection} </Nav>


        return (rightHeader)
    }

    return (
        <Navbar bg="light" expand="lg">
            <Navbar.Brand href="#home">React-Bootstrap</Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="mr-auto">
                    <Nav.Link href="#home">Home</Nav.Link>
                    <Nav.Link href="#link">Link</Nav.Link>
                </Nav>
                <RightHeader />

            </Navbar.Collapse>
        </Navbar>
    )
}



export default Header;