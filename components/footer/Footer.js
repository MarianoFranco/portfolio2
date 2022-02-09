import styled from "styled-components";
import React from 'react'
import DarkSection from '../darkBackground/DarkBackground'
import { Icon } from '@iconify/react';

const FooterContainer = styled.footer`
   
    .footer__content{
        max-width:1440px;
        margin:auto;
    }
    .footer__line {
        height: 1px;
        background: white;
    }
    .icons__container--footer {
       display:flex;
       justify-content:flex-end;
       align-items:center;
       height:300px;
    }
    .icons__link{        
        margin: 20px;
        font-size:4rem;
        color:white;
    }
    .copyright {
        color:white;
        display:flex;
        flex-direction:column;
        justify-content:center;
        align-items:center;
    }
`;


function Footer() {
  return (
    <>
        <FooterContainer>  
            <DarkSection>
                <div className="footer__content">
                    <div className="footer__line"></div>
                    <div className="icons__container--footer">
                        <a href="contact.html" className="icons__link" target="_blank">
                            <Icon icon="akar-icons:github-fill" />
                        </a>
                        <a href="https://www.linkedin.com/in/mariano-david-franco-gallo/" className="icons__link"  >
                            <Icon icon="akar-icons:github-fill" />
                        </a>
                        <a href="https://github.com/MarianoFranco" className="icons__link"  >
                            <Icon icon="akar-icons:github-fill" />
                        </a>
                    </div>
                    <div className="copyright">
                        <p className="copyright__text">Portfolio and CV</p>
                        <p className="copyright__text">Designed by Mariano Franco | Copyright © 2021 All Rights Reserved.</p>
                    </div>		
                </div>                
            </DarkSection>            
        </FooterContainer>       
    </>
  )
}

export default Footer


