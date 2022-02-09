import React from 'react';
import Link from 'next/link';
import styled, {keyframes} from 'styled-components';

const slideIn = keyframes`
  from {
    transform: translateX(100%);
  }

  to {
    transform: translateX(0);
  }
`;

const Wrapper = styled.div`
    width: 100vw;
    height: 100vh;
    position: fixed;
    z-index: 100;
    background-color: orange;
    top:0;
    left:0px;    
    transform: translateX(${props => props.isOpen ? "0" : "100%"});
    transition: transform 700ms cubic-bezier(0.76, -0.18, 0.35, 1.33);    
    
`;

const Button = styled.button`
    width: 70px;
    height: 70px;
`;


function Sidebar({handleOnClick, isOpen}) {
    const navList = [
        {
            link: '/',
            title: 'Home',
        },
        {
            link: '/projects',
            title: 'My Projects',
        },
        {
            link: '/about',
            title: 'About me',
        },
        {
            link: '/contact',
            title: 'Contact me',
        },
    ];
  return (
        <Wrapper isOpen={isOpen}>
            <Button onClick={handleOnClick}>X</Button>
            <nav>
                {navList.map(({ link, title }) => (
                    <ul key={link}>
                         <li>
                            <Link href={link}>
                                <a >{title}</a>
                            </Link>
                        </li>
                    </ul>                    
                ))}            
                {/* <ul>
                    <li>
                        <Link href="/">
                            <a className="menu__link">Home</a>
                        </Link>
                    </li>
                    <li>
                        <Link href="/projects">
                            <a className="menu__link">My projects</a>
                        </Link>
                    </li>
                    <li>
                        <Link href="/">
                            <a className="menu__link">About me</a>
                        </Link>
                    </li>
                    <li>
                        <Link href="/">
                            <a className="menu__link">Contact me</a>
                        </Link>
                    </li>
                </ul> */}
            </nav>
        </Wrapper>
        
  )
}

export default Sidebar;

