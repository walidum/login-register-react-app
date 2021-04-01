import React from 'react'
import styled from 'styled-components'
import EmailBg from '../pictures/arti.jpg'
import { Button } from './Button'



const EmailContainer =styled.div`
    background: linear-gradient(180deg, rgba(0,0,0,0.5) 0%,  rgba(0,0,0,0.5) 35%,  rgba(0,0,0,0.5) 100%),
     url(${ EmailBg}) no-repeat center;
     background-size: cover;
     height: 450px;
     width: 100%;
     padding: 2rem calc((100vw-1300px) /2);
     color:#fff;
     display: flex;
     justify-content: center;
     align-items: center;

`;
const EmailContent = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center:
    padding: 5rem calc((100vw-1300px) /2);

    h1{
        
        text-align: center;
        margin-bottom: 1rem;
        font-size: clamp(1.5rem, 5vw, 3rem);
        padding: 1 1rem;
    }

    p{
      
        text-align: center:
        font-size: clamp(1rem, 2.5vw, 1.5rem);
        padding: 1 1rem;
        margin-bottom:  2rem;
    }
    form{
        z-index: 10;
    }
`;
const Formwrap = styled.div`
    input{
        padding: 1rem 1.5rem;
        outline: none;
        width: 350px;
        height: 48px;
        border-radius: 50px;
        border: none;
        margin-right: 1rem;
        margin-bottom:  1rem;
        

    }
    
    media screen and (max-width: 768px){
        display: flex;
        flex-direction: column;
        padding:0 1rem;

        input{
            margin-bottom: 1rem;
            width: 100%;
            margin-right: 0;
            
        }
    }
`;


const Email = () => {
    return (
        <EmailContainer>
            <EmailContent>
                <h1>Get Access to Exclusive Offers</h1>
                <p> Sign Up and Join Us</p>
                <form action="#">
                    <Formwrap>
                        <label htmlFor="email">
                            <input type="email" placeholder="Enter your Email" id="email"/>
                        </label>
                        <Button as="button" type="submit" primary="true" round="true" css={
                            `48px 
                            @media screen and (max-width: 768px){
                                width : 100%;
                                min-width: 350px;
                            }
                            @media screen and (max-width: 400px){
                                width : 100%;
                                min-width: 250px;
                            }

                            `}>Sign Up</Button>
                    </Formwrap>
                </form>
            </EmailContent>
        </EmailContainer>
    )
}

export default Email;
