import React from "react";
import Link from "next/link";
import styled, { keyframes } from "styled-components";
import { Icon } from "@iconify/react";
import Image from "next/image";
import media from "styled-media-query";

const Wrapper = styled.div`
  width: 100vw;
  height: 100vh;
  position: fixed;
  z-index: 100;
  background-color: var(--color-primary);
  top: 0;
  left: 0px;
  transform: translateX(${(props) => (props.isOpen ? "0" : "100%")});
  transition: transform 900ms cubic-bezier(0.76, -0.18, 0.35, 1.33);

  .heading {
    max-width: 1440px;
    width: 100%;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: var(--size-xl) var(--size-jumbo);
    flex: 0 0 100px;
    position: fixed;
    left: 50%;
    transform: translateX(-50%);
    ${media.lessThan("medium")`
            padding:var(--size-md);
            
        `}
  }
`;
const NavBar = styled.nav`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100%;

  .nav__list-container {
    font-size: var(--font-size-xxl);
    list-style: none;
    font-weight: 600;
    font-family: var(--font-headings);
    color: var(--color-secondary);
    ${media.lessThan("medium")`
            padding:var(--size-md);
            
        `}
  }
  .nav__list {
    margin: 60px auto;
  }
  .nav__link {
    display: flex;
    align-items: center;
  }
  .nav__icon {
    margin-right: 30px;
    font-size: var(--font-size-xxl);
    display: flex;
    align-items: center;
    justify-content: center;
  }
`;

const Button = styled.button`
  width: 70px;
  height: 70px;
  background: none;
  border: none;

  .close__icon {
    color: var(--color-secondary);
    font-size: 70px;
  }
  .close__icon:hover {
    color: var(--color-tertiary);
    transform: scale(1.05) translateY(-2px);
    transition: all 50ms ease-in-out;
  }
  ${media.lessThan("large")`
        width: 40px;
        height: 40px;

        .close__icon{
            color: var(--color-secondary);
            font-size:40px;
        }
    `}
`;

function Sidebar({ handleOnClick, isOpen }) {
  const navList = [
    {
      link: "/",
      title: "Home",
      icon: "ant-design:home-outlined",
    },
    {
      link: "#projects",
      title: "My Projects",
      icon: "fluent:book-toolbox-24-regular",
    },
    {
      link: "#about",
      title: "About me",
      icon: "akar-icons:info",
    },
    {
      link: "#contact",
      title: "Contact me",
      icon: "carbon:email",
    },
  ];
  return (
    <Wrapper isOpen={isOpen}>
      <div className="heading">
        <Link href="/">
          <a>
            <Image
              src="/images/logo.png"
              width="183px"
              height="50px"
              alt="logo"
            ></Image>
          </a>
        </Link>
        <Button onClick={handleOnClick}>
          <i className="close__icon-container">
            <Icon icon="ep:close" className="close__icon" />
          </i>
        </Button>
      </div>
      <NavBar>
        <ul className="nav__list-container">
          {navList.map(({ link, title, icon }) => (
            <li key={link} className="nav__list" onClick={handleOnClick}>
              <Link href={link}>
                <a className="nav__link">
                  <i className="nav__icon">
                    <Icon icon={icon}></Icon>
                  </i>
                  <span>{title}</span>
                </a>
              </Link>
            </li>
          ))}
        </ul>
      </NavBar>
    </Wrapper>
  );
}

export default Sidebar;
