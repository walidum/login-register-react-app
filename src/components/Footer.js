import React from 'react'
import styled from 'styled-components'
import {Link} from 'react-router-dom'

const FooterContainer= styled.div`
    padding: 5rem calc((100vw - 1100px) /1.5);
    display: grid;
    grid-template-columns: repeat(2, 0.5fr);
    color: #000;
    background: #fafafb;
`;
const Footerwrap=styled.div`
    padding: 0 2rem;
    h1{
        margin-bottom: 3rem;
        color: #f26a2e;
    }
    p{
        color: #f26a2e; 
    }
    @media screen and(max-width: 400px) {
        padding: 1rem;
    }
`;
const Footerdesc= styled.div`
    display: grid;
    grid-template-columns:  repeat(2, 1fr);

    @media screen and(max-width: 820px) {
        grid-template-colmuns:  repeat(1, 1fr);

    }
`;
const FooterLinkItems= styled.div`
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    cursor: pointer;
    padding: 1rem 2rem;

    @media screen and(max-width: 400px) {
        padding: 1rem;
    }
`;
const FooterLinkTittel=styled.h2`
    font-size: 14px;
    margin-bottom: 16px;
`;
const FooterLink=styled(Link)`
    text-decoration: none;
    margin-bottom: 0.5rem;
    cursor: pointer;
    font-size: 14px;
    color: #3d3d4e;

    &:hover{
        color: #f26a2e;
        transition: 0.3s ease-out;
    }
`;
const FooterlinksWrapper=styled.div``;


const Footer = () => {
    return (
        <FooterContainer>
            <Footerwrap>
                <Footerdesc>
                    <h1>ASMA</h1>
                    <p>We strive to createthe best experiences for our costumers </p>
                </Footerdesc>
                <FooterLinkItems>
                    <FooterLinkTittel>Contact Us</FooterLinkTittel>
                    <FooterLink to="/about">Contact</FooterLink>
                    <FooterLink to="/">support</FooterLink>
                </FooterLinkItems>
            </Footerwrap>
            <FooterlinksWrapper>
            <FooterLinkItems>
                    <FooterLinkTittel>Social Media</FooterLinkTittel>
                    <FooterLink to="/">Instagram</FooterLink>
                    <FooterLink to="/">Facebook</FooterLink>
                    <FooterLink to="/">twitter</FooterLink>
                </FooterLinkItems>
            </FooterlinksWrapper>
        </FooterContainer>
    )
}

export default Footer;
