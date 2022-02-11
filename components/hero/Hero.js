import React  from 'react';
import styled from 'styled-components';
import Image from 'next/image';
import { Container, Row, Col } from 'react-grid-system';
import Button from '../button/Button'
import { Icon } from '@iconify/react';
import BackgroundBubbles from '../backgroundBubbles/BackgroundBubbles'
import media from 'styled-media-query'
import Link from 'next/link'

const Section = styled.section`
     
    padding-top: 220px;
    min-height:940px;
    position:relative;
`;

const GridStyledContainer = styled(Container)`   
    width: 100%;   
    height:100%;    
    display:flex;
    flex-direction:column;
    justify-content:flex-end;
   

    .wrapper{
        max-width:1440px;
        padding: 0 60px;
        margin:auto;  
       
    }
      
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
   
    display:none;
    flex-direction:column;
    align-items:flex-start;
    justify-content: space-around;
    height:315px;    
    position:absolute;
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
     ${media.greaterThan("1440px")`
    
       display:flex;
    `}
`; 
const ImageContainer = styled.div`
    min-width:200px;
    max-width: 553px;
    width:553px;   
    display:block;
    transform:translateX(-110px);
    ${media.greaterThan("medium")`
        
        
    `}
`;
const ScrollButtonContainer = styled.div`
    
    font-size:var(--font-size-xxl);
    color:var(--color-secondary);
    display:flex;
    flex-direction:column;
    align-items:center;  
    justify-content:center; 
    font-family:var(--font-headings);
    margin-top:70px;
    
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
                    <div className="wrapper">
                        <RowContainer>
                            <ColumnContainer lg={6} xl={4}>
                                <TextContainer>
                                    <h1 className="title">Hi,<br/>I&apos;m <span className="name"> Mariano</span></h1>
                                    <h4 className="sub-title">Front-end Developer</h4>
                                </TextContainer>
                                <ButtonsContainer>
                                    <Link href="/#contact" passHref >
                                        <a>
                                            <Button
                                                icon="cil:arrow-right"
                                                text="Hire me"
                                                styleClass="primary" 
                                                className="button"                                    
                                            >
                                            </Button> 
                                        </a>                                    
                                    </Link>                               
                                    <div className="line"></div>
                                    <Link href="mailto:fgmariano87@gmail.com" passHref>
                                        <a>
                                            <Icon icon="carbon:email" className="email__icon"/>
                                        </a>
                                    </Link>
                                    <Link href="https://www.linkedin.com/in/mariano-david-franco-gallo/" passHref>
                                        <a>
                                            <Icon icon="ant-design:linkedin-outlined" className="email__icon" />    
                                        </a>
                                    </Link>                                                         
                                </ButtonsContainer>
                            </ColumnContainer>
                            <ColumnContainer lg={6} xl={4}>
                                <ImageContainer>
                                    <Image src="/images/Mariano-photo1.png"  width="100%" height="100%" layout="responsive" alt="Profile Image" quality="100" priority="true" />
                                </ImageContainer>                       
                            </ColumnContainer>
                            <ColumnContainer lg={12} xl={4}>
                                <DescriptionContainer>
                                    <h4 className="sub-title">Based in Norway. I’m a front-end developer with UI/UX designer knowledges.</h4>
                                    <p className="p-text">I’m a newly graduated front-end developer from Noroff - School of technology and digital media in Norway, and I’m ready to take on the world.</p>
                                </DescriptionContainer>
                            </ColumnContainer>
                        </RowContainer>
                        <RowContainer>                       
                            <ColumnContainer>
                                <Link href="/#projects" passHref >
                                    <a>
                                        <ScrollButtonContainer>                                
                                            <p className="text">My projects</p>
                                            <Icon icon="dashicons:arrow-down-alt2" />
                                        </ScrollButtonContainer>  
                                    </a>                                                      
                                </Link>                               
                            </ColumnContainer>    
                                                
                        </RowContainer>           
                    </div>                
                         
                </GridStyledContainer>               
            </Section>
            {/* <Section>
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
                                <Link href="/#contact" passHref >
                                    <a>
                                        <Button
                                            icon="cil:arrow-right"
                                            text="Hire me"
                                            styleClass="primary" 
                                            className="button"                                    
                                        >
                                        </Button> 
                                    </a>                                    
                                </Link>                               
                                <div className="line"></div>
                                <Link href="mailto:fgmariano87@gmail.com" passHref>
                                    <a>
                                        <Icon icon="carbon:email" className="email__icon"/>
                                    </a>
                                </Link>
                                <Link href="https://www.linkedin.com/in/mariano-david-franco-gallo/" passHref>
                                    <a>
                                        <Icon icon="ant-design:linkedin-outlined" className="email__icon" />    
                                    </a>
                                </Link>                                                         
                            </ButtonsContainer>                                             
                        </ColumnContainer>
                        <ColumnContainer >
                            <Link href="/#projects" passHref >
                                <a>
                                    <ScrollButtonContainer>                                
                                        <p className="text">My projects</p>
                                        <Icon icon="dashicons:arrow-down-alt2" />
                                    </ScrollButtonContainer>  
                                </a>                                                      
                            </Link>                               
                        </ColumnContainer>    
                        <ColumnContainer >                          
                        </ColumnContainer>                      
                    </RowContainer>                 
                </GridStyledContainer>               
            </Section>                   */}
        </>
  );
}

export default Hero;
