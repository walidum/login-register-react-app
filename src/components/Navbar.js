import React from 'react';
import styled, {css} from 'styled-components/macro';
import {Link, useHistory} from 'react-router-dom';
import {Button} from './Button';
import {FaBars} from 'react-icons/fa'

const Nav = styled.nav`
 height:60px;
 display:flex;
 justify-content: space-between;
 padding: 16px 18px ;
 z-index: 100;
 position: fixed;
 width: 100%;
 
`;

const NavLink = css`
color: black;
display: felx;
align-items: center;
padding: 0 1rem;
height: 100%;
cursor: pointer;
text-decoration:none;
`

const Logo = styled(Link)`
 ${NavLink}
 font-style: italic;
`;

const MenuBars = styled(FaBars)`
 display: none;
 top: 0;
 right: 0;
 cursor: pointer;
 @media screen and (max-width: 768px){
     display: block;
 }
`;

const NavMenu = styled.div`
display: flex;
align-items: center;
margin-right: -60px;


@media screen and (max-width: 768px) {
    display: none;
}
`;


const NavMenulinks = styled(Link)`
${NavLink}
`;

const NavBtn = styled.div`
dipslay: felx;
align-items: center;
margin-right: 24px;

@media screen and (max-width: 768px) {
    display: none;
}
`;

const Navbar = ({toggle}) => {
    const user = JSON.parse(localStorage.getItem('user'))
    console.log(user)
    const history = useHistory()
    const navigate = (path) => {
        history.push(path)
    }
    const logout = () => {
        //navigate('/login')
    }
    return (
        <Nav>
            <Logo to="/">ASMA</Logo>
            <MenuBars onClick={toggle}/>
            <NavMenu>
                <NavMenulinks to={'/'}>
                    Home
                </NavMenulinks>
                <NavMenulinks to={'/about'}> About
                </NavMenulinks>
                {!user || !user.email && (
                    <>
                        <NavMenulinks to={'/register'}> Register
                        </NavMenulinks>
                        <NavMenulinks to={'/login'}> Login
                        </NavMenulinks>
                    </>
                )}

            </NavMenu>
            {user && user.email && (
                <>
                    <NavBtn>
                        <h3 style={{color: 'red'}}>{user.firstname} {user.lastname}</h3>
                    </NavBtn>

                    <NavBtn>
                        <Button onClick={logout} primary='true'> Logout </Button>
                    </NavBtn>
                </>
            )}
        </Nav>
    )
}

export default Navbar;
