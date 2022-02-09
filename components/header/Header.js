import styled from "styled-components";
import Image from 'next/image'
import Link from 'next/link'
import React, {useState} from 'react';


import Sidebar from "../sidebar/Sidebar";

const Container = styled.div`
    
    max-width:1440px;
    width:100%;
    display:flex;
    justify-content:space-between;
    align-items:center;
    padding:var(--size-xl) var(--size-jumbo);
    flex: 0 0 100px;
    position:fixed;   
    left: 50%;
    transform:translateX(-50%);
    z-index: 100;
`;

const HamburgerButton = styled.button`
    background:none;
    border:none;
`;

function Header() {
    const [isOpen, setIsOpen] = useState(false);
   
  return (
    <div>
        <Container>
            <Link href="/">
                <a><Image src="/images/logo.png" width="183px" height="50px" alt="logo"></Image></a>
            </Link> 
            <HamburgerButton onClick={()=> setIsOpen(true)}>
                <Image src="/images/menu.svg" width="70px" height="70px" alt="menu icon"></Image>
            </HamburgerButton>
            <Sidebar handleOnClick={()=> setIsOpen(false)} isOpen={isOpen}/>       
        </Container>
    </div>  
  )
}

export default Header;





