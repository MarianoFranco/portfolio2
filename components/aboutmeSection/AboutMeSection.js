import React from 'react'
import styled from 'styled-components'
import BackgroundBubbles from '../backgroundBubbles/BackgroundBubbles'
import SectionTitle from '../sectionTitle/SectionTitle'
import Image from 'next/image'
import Button from '../button/Button'

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
    
    .about__data-container{
        max-width:660px;
        position:relative;
    }
    .about__img-container{
        position:relative;       
        width:900px;
        height:720px;
        margin-left:30px;
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
            <SectionTitle title="About me"></SectionTitle>
           <BioLayoutContainer>
               <div className="about__data-container">
                    <div className="about__bio-container">
				        <p className="bio__text">I am a 34 year old man from Argentina but I have lived in a beautiful town in Spain for 12 years. In 2016 I moved to Norway where I am currently living with my family.</p>
				        <p className="bio__text">I consider myself a positive and ambitious person and I am always looking for new challenges that help me grow both as a professional and as a person. I like to learn new things that help me do my job better. And whenever I can, I do it on my own.</p>
				        <p className="bio__text">In my last year as a student, I have learned the main technologies used to carry out my work as a frontend developer, such as <strong>HTML</strong>, <strong>CSS</strong> and <strong>Javascript</strong>. In addition to acquiring knowledge about <strong>UX</strong> and <strong>UI</strong> design, using applications such as <strong>Adobe xD</strong> and <strong>Figma</strong>.</p>
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