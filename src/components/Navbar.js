import React from 'react';
import styled, {css} from 'styled-components/macro';
import {Link} from 'react-router-dom';
import { menuData } from '../data/MenuData';
import { Button } from './Button';
import {FaBars} from 'react-icons/fa'

const Nav= styled.nav`
 height:60px;
 display:flex;
 justify-content: space-between;
 padding: 16px 18px ;
 z-index: 100;
 position: fixed;
 width: 100%;
 
`;

const NavLink= css`
color: black;
display: felx;
align-items: center;
padding: 0 1rem;
height: 100%;
cursor: pointer;
text-decoration:none;
`

const Logo= styled(Link)`
 ${NavLink}
 font-style: italic;
`;

const MenuBars= styled(FaBars)`
 display: none;
 top: 0;
 right: 0;
 cursor: pointer;
 @media screen and (max-width: 768px){
     display: block;
 }
`;

const NavMenu= styled.div`
display: flex;
align-items: center;
margin-right: -60px;


@media screen and (max-width: 768px) {
    display: none;
}
`;




const NavMenulinks= styled(Link)`
${NavLink}
`;

const NavBtn= styled.div`
dipslay: felx;
align-items: center;
margin-right: 24px;

@media screen and (max-width: 768px) {
    display: none;
}
`;

const Navbar = ({toggle}) => {
    return (
        <Nav>
            <Logo to="/">ASMA</Logo>
            <MenuBars onClick= {toggle}/>
            <NavMenu>
                {menuData.map( (item, index) =>(
                    <NavMenulinks to={item.link} key={index}>
                        {item.title}
                    </NavMenulinks>
                ))}
            </NavMenu>
            <NavBtn>
                <Button to='/conatct' primary='true'> Contact Us </Button>
            </NavBtn>
        </Nav>
    )
}

export default Navbar;
