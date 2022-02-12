import React from 'react';
import styled from 'styled-components';
import SectionTitle from '../sectionTitle/SectionTitle'
import SlickSlider from '../carousel/Carousel'
import DarkSection from '../darkBackground/DarkBackground'

const SliderContainer =styled.div`
	width:100%;
	max-width:1440px;	
	margin:auto;
	padding-bottom:100px;
`;
function featuredSection() {
  return (
		<>
			<DarkSection>
				<SectionTitle
					title="Featured Projects"
					id="projects"
				/>
				<SliderContainer>
					<SlickSlider></SlickSlider>	
				</SliderContainer>
						
			</DarkSection>
		</>  
	);
}

export default featuredSection;
