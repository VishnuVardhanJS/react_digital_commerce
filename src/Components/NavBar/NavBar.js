import React from 'react'
import { NavLink as Link } from "react-router-dom";
import { Nav, NavLink, Bars, NavMenu } from './NavBarElements';

import SapLogo from '../../Assets/Logo/SAP_logo.png'

const NavBar = () => {
  return (
    <>
    <Nav>
        <NavLink to="/">
            <img className='logoMain' src={SapLogo} alt="SAP" style={{height: "45px", width: "80px"}}/>
        </NavLink>
        <Bars className='barIcon'/>
        <NavMenu>
            <NavLink to="/products" activeStyle>
                Products
            </NavLink>
            <NavLink to="/contact">
                Contact
            </NavLink>
            <NavLink to="/about-us">
                About US
            </NavLink>
        </NavMenu>
    </Nav>
    </>
  )
}

export default NavBar