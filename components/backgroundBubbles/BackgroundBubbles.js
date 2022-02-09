import React from 'react'
import styled from 'styled-components';

const BackgroundContainer = styled.div`  
   
   
    @keyframes move {
        100% {
            transform: translate3d(0, 0, 1px) rotate(360deg);
        }
    }
    
    .background {
        position: absolute;
        width: 100%;
        height: 100%;
        top: 0;
        left: 0;
        background: #06212a;
        overflow: hidden;
        z-index:-10;        
    }
    
    .background span {
        width: 22vmin;
        height: 22vmin;
        border-radius: 22vmin;
        backface-visibility: hidden;
        position: absolute;
        animation: move;
        animation-duration: 30;
        animation-timing-function: linear;
        animation-iteration-count: infinite;
    }
    
    
   
    .background span:nth-child(1) {
        width: 10vmin;
        height: 10vmin;
        color: #ebe0a6;
        top: 18%;
        left: 91%;
        animation-duration: 74s;
        animation-delay: -59s;
        transform-origin: 23vw -16vh;
        background: linear-gradient(
            90deg
            , rgba(235,224,166,1) 0%, rgba(230,152,39,1) 75%);
    }
    .background span:nth-child(2) {
        width: 10vmin;
        height: 10vmin;
        color: #ebe0a6;
        top: 23%;
        left: 23%;
        animation-duration: 60s;
        animation-delay: -198s;
        transform-origin: 22vw 21vh;
        background: linear-gradient(
            90deg
            , rgba(235,224,166,1) 0%, rgba(230,152,39,1) 75%);
    }
    .background span:nth-child(3) {
        width: 5vmin;
        height: 5vmin;
        color: #ebe0a6;
        top:3%;
        left: 16%;
        animation-duration: 31s;
        animation-delay: -67s;
        transform-origin: 22vw -15vh;
        background: linear-gradient(
            90deg
            , rgba(235,224,166,1) 0%, rgba(230,152,39,1) 75%);
    }
    .background span:nth-child(4) {
        width: 5vmin;
        height: 5vmin;
        color: #ebe0a6;
        top: 45%;
        left: 7%;
        animation-duration: 79s;
        animation-delay: -166s;
        transform-origin: 5vw -11vh;
        background: linear-gradient(
            90deg
            , rgba(235,224,166,1) 0%, rgba(230,152,39,1) 75%);
    }
    .background span:nth-child(5) {
        width: 15vmin;
        height: 15vmin;
        color: #ebe0a6;
        top: 5%;
        left: -21%;
        animation-duration: 45s;
        animation-delay: -165s;
        transform-origin: 30vw 51vh;
        background: linear-gradient(
            90deg
            , rgba(235,224,166,1) 0%, rgba(230,152,39,1) 75%);
    }
    .background span:nth-child(6) {
        width: 15vmin;
        height: 15vmin;
        color: #ebe0a6;
        top: 56%;
        left: 2%;
        animation-duration: 46s;
        animation-delay: -103s;
        transform-origin: 18vw 24vh;
        background: linear-gradient(
            90deg
            , rgba(235,224,166,1) 0%, rgba(230,152,39,1) 75%);
    }
    .background span:nth-child(7) {
        width: 10vmin;
        height: 10vmin;
        color: #ebe0a6;
        top: 50px;
        left:50%;
        animation-duration: 129s;
        animation-delay: -89s;
        transform-origin: 14vw 18vh;
        background: linear-gradient(
            90deg
            , rgba(235,224,166,1) 0%, rgba(230,152,39,1) 75%);
        
    }
    
`;
function BackgroundBubbles() {
  return (
    <>
        <BackgroundContainer>
            <div className="background">
                <span></span>
                <span></span>
                <span></span>
                <span></span>
                <span></span>
                <span></span>
                <span></span>          
            </div>         
        </BackgroundContainer>
    </>
  )
}

export default BackgroundBubbles