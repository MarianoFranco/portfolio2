import React from "react";
import styled from "styled-components";
import Image from "next/image";
import { Icon } from "@iconify/react";
import Link from "next/link";
import media from "styled-media-query";

const CardContainer = styled.div`
	height: 350px;
	max-width: 350px;

	display: flex;
	justify-content: center;
	align-items: center;
	margin: 15px auto;
	border-radius: 20px;
	position: relative;

	&:hover {
		transition: all 0.3s ease-in-out;
		border: solid 3px #ebe0a6;
	}
	&::before {
		content: "";
		position: absolute;
		width: 100%;
		height: 0;
		background: black;
		bottom: 0;
		left: 0;
		border-radius: 20px;
		transition: all 0.4s ease-in-out;
		z-index: 10;
	}
	&:hover::before {
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
		padding: 10px;
		box-sizing: border-box;
	}
	.card__data:hover {
		opacity: 1;

		.card__icons-container {
			left: 50%;
			transform: translateX(-50%);
			transition: all 0.4s ease-in-out;
		}
		.card__title {
			transform: translateY(50px);
			transition: all 0.3s ease-in-out;
			cursor: pointer;
		}
		.card__text {
			transform: translateY(73px);
			transition: all 0.3s ease-in-out;
		}
		.card__github-link {
			left: 50%;
			transform: translateX(-50%);
			transition: all 0.4s ease-in-out;
		}
	}
	.card__title,
	.card__github-link {
		font-size: var(--font-size-xl);
		font-weight: 600;
		color: #ebe0a6;
		margin: 0;
		cursor: pointer;
	}

	.card__title:hover {
		text-decoration: underline;
	}
	.card__text {
		font-size: var(--font-size);
		color: var(--color-white);
		margin-top: var(--size-md);
	}

	.card__github-link {
		font-size: var(--font-size-md);
		font-weight: 500;
		position: absolute;
		right: 0;
		bottom: 50px;
		cursor: pointer;
	}
	.card__github-link:hover {
		color: var(--color-tertiary);
		text-decoration: underline;
	}
	.card__icons-container {
		display: flex;
		justify-content: space-evenly;
		position: absolute;
		right: 0;
		bottom: 50px;
		gap: 24px;
	}
	${media.lessThan("medium")`
    
        max-width:300px;
        height:300px;
    `}
`;
const ImageContainer = styled.div`
	width: 100%;
	height: 100%;
	border-radius: 20px;
	position: relative;
`;
const ImageElement = styled(Image)`
	object-fit: cover;
	object-position: center center;
	border-radius: 20px;
	z-index: -10;
`;

const Icons = styled(Icon)`
	width: 40px;
	height: 40px;
	color: var(--color-secondary);
`;
function Card({
	title,
	imageSrc,
	imageName,
	usedLanguages,
	smallDesc,
	projectLink,
	githubLink,
}) {
	return (
		<>
			<CardContainer target="_blank">
				<ImageContainer>
					<ImageElement
						src={imageSrc}
						alt={imageName}
						layout="fill"
					></ImageElement>
				</ImageContainer>
				<div className="card__data">
					<Link href={projectLink} passHref>
						<a target="_blank">
							<h3 className="card__title">{title}</h3>
						</a>
					</Link>
					<p className="card__text">{smallDesc}</p>
					{githubLink && (
						<Link href={githubLink} passHref>
							<a target="_blank">
								<h4 className="card__github-link">
									Link to Github
								</h4>
							</a>
						</Link>
					)}
				</div>
			</CardContainer>
		</>
	);
}

export default Card;
