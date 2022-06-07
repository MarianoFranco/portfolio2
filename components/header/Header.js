import styled from "styled-components";
import Image from "next/image";
import Link from "next/link";
import React, { useState } from "react";
import { Icon } from "@iconify/react";
import media from "styled-media-query";
import Sidebar from "../sidebar/Sidebar";

const Container = styled.div`
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
	z-index: 100;

	${media.lessThan("medium")`
            padding:var(--size-md);
            
        `}
`;

const HamburgerButton = styled.button`
	background: none;
	border: none;
	.menu__icon {
		font-size: 60px;
		display: flex;
		align-items: center;
		color: var(--color-secondary);
	}
	.menu__icon:hover {
		transform: scale(1.05);
		transition: all 50ms ease-in-out;
	}
	${media.lessThan("large")`
      .menu__icon{
            font-size:40px;
            display:flex;
            align-items:center;
            color:var(--color-secondary);     
        }
    `}
`;

function Header() {
	const [isOpen, setIsOpen] = useState(false);

	return (
		<div>
			<Container>
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
				<HamburgerButton onClick={() => setIsOpen(true)}>
					<i className="menu__icon">
						<Icon icon="iconoir:menu-scale" rotate={2} />
					</i>
				</HamburgerButton>
			</Container>
			<Sidebar handleOnClick={() => setIsOpen(false)} isOpen={isOpen} />
		</div>
	);
}

export default Header;
