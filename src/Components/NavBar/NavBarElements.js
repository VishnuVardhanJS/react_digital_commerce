import styled from "styled-components";
import { NavLink as Link } from "react-router-dom";
import {FaBars} from 'react-icons/fa'

export const Nav = styled.nav`
    overflow: hidden;
    height: 80px;
    display: flex;
    position: sticky;
    justify-content: space-between;
    z-index: 99;
    font-size: 1.4rem;
`

export const NavLink = styled(Link)`
    color: #000;
    display: flex;
    align-items: center;
    justify-content: space-evenly;
    text-decoration: none;
    -webkit-text-stroke: 1px;
    padding: 0 1rem;
    height: 100%;
    cursor: pointer;

    &.active {
        color: #2d69db;
    }

    &:hover {
      transform: translate(0%, -10%);
      transition: 0.3s ease-out;
    }

`

export const Bars = styled(FaBars)`
    display: none;
    color: #fff;

    @media screen and (max-width: 768px) {
        display: flex;
        position: absolute;
        top: 0;
        right: 0;
        transform: translate(-100%, 75%);
        font-size: 1.8rem;
        cursor: pointer;
    }
`
export const NavMenu = styled.div`
    overflow: hidden;
    position: relative;
    padding-right: 125px;;
    display: flex;
    width: 100vw;
    justify-content: center;
    
    
    @media screen and (max-width: 768px){
        display: none;  
    }

`

