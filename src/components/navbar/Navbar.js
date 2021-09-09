import React, { useState } from 'react';
import { Hamburger, Logo, Menu, MenuLink, Nav } from './style';



function Navbar() {
    const [isOpen, setIsOpen] = useState(false)
    return (
        <Nav>
            <Logo to="/">
                <i>{"<CLRSWY/>"}</i><span>recipe</span>
            </Logo>
            <Hamburger onClick={() => setIsOpen(!isOpen)}>
                <span></span>
                <span></span>
                <span></span>
            </Hamburger>
            <Menu isOpen={isOpen}>
                <MenuLink to="/about">About</MenuLink>
                <MenuLink
                    to={{ pathname: "https://github.com/orgs/clarusway/dashboard" }}
                    target="_blank"
                    rel="noopener noreferrer"
                >Github</MenuLink>
                <MenuLink to="/login">Logout</MenuLink>
            </Menu>
        </Nav>
    )
}

export default Navbar
