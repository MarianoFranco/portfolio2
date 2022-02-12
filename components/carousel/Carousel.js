import React, { Component } from "react";
import Slider from "react-slick";
import styled from "styled-components";
import Card from '../card/Card'
import projectsData from '../../data/projectData'
import media from 'styled-media-query'

const SliderContainer = styled(Slider)`
    
    width:100%;
    margin: 40px auto;
    
    padding:40px var(--size-jumbo);
    overflow: hidden;

    .slick-list{
        padding:3px;
    }
    
    .slick-center{
        transform: scale(1.1);
        padding:3px;
    }
    .slick-dots{        
        height:50px;
        left: 50%;
        transform:translateX(-50%);
    }
    .slick-dots li.slick-active button:before{
        color:var(--color-tertiary);
        font-size:21px;
      
    }
    .slick-dots li{
        margin: 0 15px;
    }
    .slick-dots li button:before{
        font-size:21px;
        color:var(--color-secondary);
        opacity:1;
       
    }
    ${media.lessThan("medium")`    
        padding:0 20px;
       
    `}
`;



export default class SlickSlider extends Component {

  render() {
    const settings = {
        className: "center",
        centerMode: true,
        infinite: true,
        centerPadding: "0px",
        slidesToShow:3,
        speed: 2000,
        dots: true,
        slidesToScroll: 1,
        arrows: false,
        autoplay: true,
        autoplaySpeed:10000,
        responsive: [
            {
              breakpoint: 1440,
              settings: {
                slidesToShow: 3,
                slidesToScroll: 1,                
                dots: false,
                
              }
            },
            {
                breakpoint: 1170,
                settings: {
                  slidesToShow: 2,
                  slidesToScroll: 1,   
                  initialSlide: 1,             
                  dots: false,
                  
                }
              },
            {
              breakpoint: 768,
              settings: {
                slidesToShow: 1,
                slidesToScroll: 1,
                initialSlide: 1,
                dots: false, 
               
                speed: 5000
              }
            },
           
          ]
    };
    return (

        <div> 
            <SliderContainer {...settings} >
                {projectsData.map(project => <Card key={project.title} title = {project.title} imageSrc={project.imageSrc} imageName={project.title} usedLanguages={project.usedLanguages} smallDesc={project.smallDesc}></Card> )}
               
            </SliderContainer>
        </div>
    );
  }
}