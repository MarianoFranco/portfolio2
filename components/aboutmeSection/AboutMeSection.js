import React from 'react'
import styled from 'styled-components'
import BackgroundBubbles from '../backgroundBubbles/BackgroundBubbles'
import SectionTitle from '../sectionTitle/SectionTitle'
import Image from 'next/image'
import Button from '../button/Button'
import media from 'styled-media-query'

const AboutContainer= styled.div`    
    padding:var(--size-jumbo);
    position:relative;
    outline: var(--color-primary) solid 3px;
`;

const BioLayoutContainer = styled.div` 
    display:flex;
    max-width:1440px;
    margin:auto;
    justify-content:space-between;
    align-items:center;
    padding:var(--size-jumbo);
    flex-direction:column-reverse;
    gap:20px;

    ${media.greaterThan("large")`
        display:flex;
        max-width:1440px;
        margin:auto;
        justify-content:space-between;
        align-items:center;
        padding:var(--size-jumbo);
        flex-direction:row;
        `}
    
    .about__data-container{       
        position:relative;
        max-width:50%;
    }
    .about__bio-container{
        color:var(--color-white);
        font-size:var(--font-size);
        font-family:var(--font-body);
        line-height:1.8rem;
        font-weight: 400;
    }
    .bio__text{
        margin:20px 0;
        
    }
    .bio__marked-text{
        color:var(--color-secondary);
    }
    .about__img-container{
        position:relative;        
        min-width:300px;
        width:100%;
        height:720px;
        margin-left:50px;
    }
    .about__buttons-container{
        
        display:flex;        
        justify-content:flex-end;
        margin-top: 30px;
    }
    .about__button{
        margin:20px 0 0 60px;
    }
`;

const ImageElement = styled(Image)`
    object-fit:contain;
    object-position: center center;
    border-radius:20px;
    z-index:-10;  
`;


function AboutMeSection() {
  return (
    <>
        <AboutContainer>
            <BackgroundBubbles></BackgroundBubbles>          
            <SectionTitle 
                title="About me"
                id="about"
            ></SectionTitle>
           <BioLayoutContainer>
               <div className="about__data-container">
                    <div className="about__bio-container">
				        <p className="bio__text">I am a 34 year old man from Argentina but I have lived in a beautiful town in Spain for 12 years. In 2016 I moved to Norway where I am currently living with my family.</p>
				        <p className="bio__text">I consider myself a positive and ambitious person and I am always looking for new challenges that help me grow both as a professional and as a person. I like to learn new things that help me do my job better. And whenever I can, I do it on my own.</p>
				        <p className="bio__text">In my last year as a student, I have learned the main technologies used to carry out my work as a frontend developer, such as <span className="bio__marked-text">HTML</span>, <span className="bio__marked-text">CSS</span> and <span className="bio__marked-text">Javascript</span>. In addition to acquiring knowledge about <span className="bio__marked-text">UX</span> and <span className="bio__marked-text">UI</span> design, using applications such as <span className="bio__marked-text">Adobe xD</span> and <span className="bio__marked-text">Figma</span>.</p>
				        <p className="bio__text">With all this knowledge I have been able to carry out some complete web projects. These are adapted to view on any device and you can check them on my projects page.</p>
			        </div>	
                    <div className="about__buttons-container">
                        <div className="about__button">
                            <Button
                                text="Download CV"
                                icon="akar-icons:download"
                                styleClass="primary"
                                className="button-customized"
                            ></Button>
                        </div>
                        <div className="about__button">
                            <Button
                                text="Download CV"
                                icon="akar-icons:download"
                                styleClass="primary"
                                className="button-customized"
                            ></Button>
                        </div>
                        
                    </div>
               </div>
               <div className="about__img-container">
                    <ImageElement src="/images/profile-bw.png" layout="fill" alt="profile picture"/>
               </div>
           </BioLayoutContainer>           
        </AboutContainer>
    </>
  )
}

export default AboutMeSection;