import React from 'react';
import styled from 'styled-components';
import { Icon } from '@iconify/react';

const PrimaryBtn = styled.div`
    height: 58px;       
    border-radius: 10px;
    padding: 2px 2px 2px 10px;
    display:flex;
    align-items: center;
    border:none;
    background-color:var(--color-secondary);
    font-family: var(--font-headings);
    font-size:var(--font-size-md);
    color:var(--color-black);
    .btn__icon-container{
        height: 54px;
        width: 54px;
        border-radius: 10px;              
        display:flex;
        align-items: center;
        justify-content: center;
        margin-left:15px;
        background-color:var(--color-tertiary-42);
        color:var(--color-black);
        
    }
    .btn__icon{
        font-size:var(--font-size-xl);
    }
`;

const SecondaryBtn = styled.div`
    height: 60px;       
    border-radius: 10px;
    padding: 2px 2px 2px 10px;
    display:flex;
    align-items: center;
    border:solid 2px var(--color-secondary);
    background-color:none;
    font-family: var(--font-headings);
    font-size:var(--font-size-md);
    color:var(--color-secondary);
    
    .btn__icon-container{
        height: 54px;
        width: 54px;
        border-radius: 10px;              
        display:flex;
        align-items: center;
        justify-content: center;
        margin-left:15px;
        background-color:var(--color-secondary);
        color:var(--color-black);
       
    }
    .btn__icon{
        font-size:var(--font-size-xl);
    }
`;
    


function Button({text, icon, styleClass}) {
    
    if (styleClass === 'primary') {
        return (
            <PrimaryBtn className={styleClass} >
               <div>{text}</div><div className="btn__icon-container"><Icon icon={icon} className="btn__icon"/></div> 
            </PrimaryBtn>
        );
    }
    
  return (
    <SecondaryBtn className={styleClass} onClick={()=>{}}>
        <div>{text}</div><div className="btn__icon-container"><Icon icon={icon} className="btn__icon"/></div> 
    </SecondaryBtn>  
    )       
       
}


       

export default Button;
