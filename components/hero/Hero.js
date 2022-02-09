import React  from 'react';
import styled from 'styled-components';
import Image from 'next/image';
import { Container, Row, Col } from 'react-grid-system';
import Button from '../button/Button'
import { Icon } from '@iconify/react';
import BackgroundBubbles from '../backgroundBubbles/BackgroundBubbles'
const Section = styled.section`
    display:flex;
    justify-content:center;   
    align-items:end;
    height:940px;
    position:relative;
`;

const GridStyledContainer = styled(Container)`   
    width: 100%;
    max-width:1440px !important; 
    
    padding: 0 60px !important;   
`;
const RowContainer = styled(Row)`
    margin-left:0 !important;
    margin-right:0 !important;
`;
const ColumnContainer = styled(Col)`
    padding: 0 !important;
`;

const TextContainer = styled.div`    
   padding: var(--size-xl) 0; 
   color: var(--color-white);
   .title{
        font-size:var(--font-size-jumbo);
        font-family:var(--font-headings);
        font-weight:700;
        margin:var(--size-md) 0;
   }
   .name{
        color: var(--color-secondary);
        
   }
   .sub-title{
        font-family:var(--font-headings);
        font-size: var(--font-size-xl);
        font-weight:600;
        margin:0;
        padding-top:20px;
   }
`;

const DescriptionContainer = styled(TextContainer)`
    .p-text{
        color: var(--color-secondary);
        font-family:var(--font-body);
        padding-top:20px;
        line-height:1.5rem;
    }
   
`;
const ButtonsContainer = styled.div`
   
    display:flex;
    flex-direction:column;
    align-items:flex-start;
    justify-content: space-around;
    height:315px;
    position:absolute;
    top:-230px;
    .button{
        
    }
    .line{
        width: 2px;
        height: 84px;
        background-color:var(--color-secondary);
        margin-left:20px;
    }
     .email__icon{
         font-size:var(--font-size-xxl);
         color:var(--color-secondary);
     }
`; 
const ImageContainer = styled.div`
    width: 553px;
    height:553px;
   display:block;
    
`;
const ScrollButtonContainer = styled.div`
    
    font-size:var(--font-size-xxl);
    color:var(--color-secondary);
    display:flex;
    flex-direction:column;
    align-items:center;  
    justify-content:flex-end;
    font-family:var(--font-headings);
    margin-top:80px;
    
   .text{
       margin:30px 0 20px;
       
   }
`

function Hero() {
  return (
        <> 
            <Section>
                <BackgroundBubbles></BackgroundBubbles>                     
                <GridStyledContainer>                 
                    <RowContainer>
                        <ColumnContainer>
                            <TextContainer>
                                <h1 className="title">Hi,<br/>I&apos;m <span className="name"> Mariano</span></h1>
                                <h4 className="sub-title">Front-end Developer</h4>
                            </TextContainer>
                        </ColumnContainer>
                        <ColumnContainer >
                            <ImageContainer>
                                <Image src="/images/Mariano-photo1.png"  width="100%" height="100%" layout="responsive" alt="Profile Image" quality="100" priority="true" />
                            </ImageContainer>                       
                        </ColumnContainer>
                        <ColumnContainer >
                            <DescriptionContainer>
                                <h4 className="sub-title">Based in Norway. I’m a front-end developer with UI/UX designer knowledges.</h4>
                                <p className="p-text">I’m a newly graduated front-end developer from Noroff - School of technology and digital media in Norway, and I’m ready to take on the world.</p>
                            </DescriptionContainer>
                        </ColumnContainer>
                    </RowContainer>
                    <RowContainer>
                        <ColumnContainer >                                                 
                            <ButtonsContainer>
                                <Button
                                    icon="cil:arrow-right"
                                    text="Hire me"
                                    styleClass="primary" 
                                    className="button"                                    
                                >
                                </Button> 
                                <div className="line"></div>
                                <Icon icon="carbon:email" className="email__icon"/>
                                <Icon icon="ant-design:linkedin-outlined" className="email__icon" />                              
                            </ButtonsContainer>                                             
                        </ColumnContainer>
                        <ColumnContainer >
                            <ScrollButtonContainer>
                                <p className="text">My projects</p>
                                <Icon icon="dashicons:arrow-down-alt2" />
                            </ScrollButtonContainer>
                        </ColumnContainer>    
                        <ColumnContainer >                          
                        </ColumnContainer>                      
                    </RowContainer>                 
                </GridStyledContainer>               
            </Section>
           
        </>
  );
}

export default Hero;
