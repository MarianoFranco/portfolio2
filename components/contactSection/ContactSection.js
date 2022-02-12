import React from 'react'
import DarkBackground from '../darkBackground/DarkBackground'
import styled from 'styled-components'
import Button from '../button/Button'
import Link from 'next/link'

const ContactBackground = styled.div`
    
    margin:auto;
    padding: var(--size-jumbo);
    background-color: var(--color-black);
`;

const ContactContainer = styled.div`
    max-width:545px;   
    margin:auto;
    border-radius: 20px;
    background: linear-gradient(45deg, rgba(6,33,42,1) 50%, rgba(6,33,42,0.64) 100%);
    display:flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    
    .contact__text{
        font-size:var(--font-size-xxl);
        color:var(--color-white);
        font-family:var(--font-headings);
        font-weight:500;
        padding:8px;
        margin:15px;
    }
    .contact__text-h2{
        font-size:var(--font-size-huge);
        color:var(--color-secondary);
        font-family:var(--font-headings);
        font-weight:700;
        padding:8px;
        margin: 15px;
    }
    .contact__button{      
        padding:8px;
        margin: 15px;
    }
`;

function ContactSection() {
  return (
    <>
        <ContactBackground>           
            <ContactContainer id="contact">
                <h3 className="contact__text">Have a project in mind?</h3>
                <h2 className="contact__text-h2">Just Say Hello!</h2>
                <div className="contact__button">
                    <Link href="mailto:fgmariano87@gmail.com" passHref>
                        <a>
                            <Button
                                text="CONTACT ME"
                                icon="cil:arrow-right"
                                styleClass="primary"
                            ></Button>
                        </a>
                    </Link> 
                    
                </div>              
            </ContactContainer>
        </ContactBackground>
    </>
  )
}

export default ContactSection