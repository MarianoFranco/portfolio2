import React  from 'react'
import styled from 'styled-components'
import Image from 'next/image';
import { Icon } from '@iconify/react';
import Link from 'next/link' 
const CardContainer = styled.div`
    width:350px;
    height:350px;
    display: flex;
    justify-content: center;
    align-items: center;    
    margin:15px;
    border-radius:20px;
    position: relative;
    
    &:hover{       
        transition: all 0.3s ease-in-out;
        border: solid 3px #ebe0a6;
    }
    &::before{
        content: "";
        position: absolute;
        width: 100%;
        height: 0;
        background: black;
        bottom: 0;
        left: 0;
        border-radius: 20px;
        transition: all 0.4s ease-in-out;
        z-index:10;
    }
    &:hover::before{
        content: "";
        position: absolute;
        width: 100%;
        height: 100%;
        background: black;
        bottom: 0;
        left: 0;
        border-radius: 20px;
        opacity: 0.9;
    }
    .card__data {
        position: absolute;
        top: 0px;
        width: 100%;
        height: 100%;
        z-index: 100;
        border-radius: 20px;
        text-align: center;
        opacity: 0;
        transition: all 0.4s ease-in-out;
    }
    .card__data:hover {
        opacity: 1;
        transform: translateY(100px);
        .card__icons-container{
            left:50%;
            transform: translateY(-100px) translateX(-50%);
            transition: all 0.4s ease-in-out;
            display:flex;
        }
    }
    .card__title {
        font-size:var(--font-size-xl);
        font-weight:600;
        color: #ebe0a6;
        margin:0;
     }
     .card__text {       
         font-size:var(--font-size);
         color:var(--color-white);
         margin-top:var(--size-md);
     }
     .card__icons-container{
         position:absolute;
         top:220px;
         right:0;
     }

`;
const ImageContainer = styled.div`
    width: 100%;
    height: 100%;
    border-radius: 20px;
   position: relative;
`;
const ImageElement = styled(Image)`
    object-fit:cover;
    object-position: center center;
    border-radius:20px;
    z-index:-10;  
`;

const Icons = styled(Icon)`
    width:45px;
    height:45px;
    color:var(--color-secondary);
    margin: 0 10px;
`;
function Card( {imageSrc, imageName}) {
  return (
    <>
        <CardContainer >            
            <ImageContainer>
                <ImageElement src={imageSrc} alt={imageName} layout="fill"></ImageElement>
            </ImageContainer>
            <div className="card__data">
				<h3 className="card__title">Science museum</h3>					
				<p className="card__text">This was my semester project. It was a Science museum website</p>	
                <div className="card__icons-container">
                    <Icons icon="ci:html5" />
                    <Icons icon="ci:css3" />
                    <Icons icon="ci:javascript" />
                </div>		      
			</div>
        </CardContainer>
    </>
  )
}

export default Card;