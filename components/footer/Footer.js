import styled from "styled-components";
import React from "react";
import DarkSection from "../darkBackground/DarkBackground";
import { Icon } from "@iconify/react";
import Link from "next/link";
import media from "styled-media-query";

const FooterContainer = styled.footer`
  .footer__content {
    max-width: 1440px;
    margin: auto;
  }
  .footer__line {
    height: 1px;
    background: white;
  }
  .icons__container--footer {
    display: flex;
    justify-content: flex-end;
    align-items: center;
    height: 200px;

    ${media.lessThan("medium")`
            justify-content:space-around;
        `}
  }
  .icons__link {
    margin: 20px;
    font-size: var(--font-size-xxl);
    color: var(--color-secondary);
  }
  .copyright {
    color: var(--color-white);
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    ${media.lessThan("medium")`
            padding:var(--size-md);
            text-align:center;
        `}
  }
  .copyright__title {
    font-size: var(--font-size-lg);
    margin: 10px;
  }
`;

function Footer() {
  return (
    <>
      <FooterContainer>
        <DarkSection>
          <div className="footer__content">
            <div className="footer__line"></div>
            <div className="icons__container--footer">
              {/* TODO: DRY - use map */}
              <Link href="https://github.com/MarianoFranco" passHref>
                <a target="_blank">
                  <Icon icon="akar-icons:github-fill" className="icons__link" />
                </a>
              </Link>
              <Link href="mailto:fgmariano87@gmail.com" passHref>
                <a target="_blank">
                  <Icon icon="carbon:email" className="icons__link" />
                </a>
              </Link>
              <Link
                href="https://www.linkedin.com/in/mariano-david-franco-gallo/"
                passHref
              >
                <a target="_blank">
                  <Icon
                    icon="ant-design:linkedin-outlined"
                    className="icons__link"
                  />
                </a>
              </Link>
            </div>
            <div className="copyright">
              <p className="copyright__title">Portfolio and CV</p>
              <p className="copyright__text">
                Designed by Mariano Franco | Copyright © 2021 All Rights
                Reserved.
              </p>
            </div>
          </div>
        </DarkSection>
      </FooterContainer>
    </>
  );
}

export default Footer;
