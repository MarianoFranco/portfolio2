import React, { Component } from "react";
import Slider from "react-slick";
import styled from "styled-components";
import Card from '../card/Card'

const SliderContainer = styled(Slider)`
   
    height:500px;
    padding:0 var(--size-jumbo);
    .slick-list{
        padding:3px;
    }
    .slick-center{
        transform: scale(1.1);
        padding:3px;
    }
    .slick-dots{
       
        margin:20px 0;
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
`;

export default class SlickSlider extends Component {
  render() {
    const settings = {
        className: "center",
        centerMode: true,
        infinite: true,
        centerPadding: "50px",
        slidesToShow:3,
        speed: 800,
        dots: true,
        slidesToScroll: 1,
        arrows: false,
        autoplay: true,
        autoplaySpeed:5000
    };
    return (
        <div>            
            <SliderContainer {...settings} >
                <Card imageSrc="/images/nomada/1.jpg" imageName="Blog Portrait"></Card>   
                <Card imageSrc="/images/lvlup/lvlup.jpg" imageName="Gaming Portrait"></Card>    
                <Card imageSrc="/images/technoland/1.jpg" imageName="Museum Portrait"></Card>    
                <Card imageSrc="/images/nomada/1.jpg" imageName="Blog Portrait"></Card>   
                <Card imageSrc="/images/lvlup/lvlup.jpg" imageName="Gaming Portrait"></Card>    
                <Card imageSrc="/images/technoland/1.jpg" imageName="Museum Portrait"></Card>                                  
            </SliderContainer>
        </div>
    );
  }
}