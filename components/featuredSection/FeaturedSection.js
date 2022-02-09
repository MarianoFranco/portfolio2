import React from 'react';
import styled from 'styled-components';
import SectionTitle from '../sectionTitle/SectionTitle'
import SlickSlider from '../carousel/Carousel'
import DarkSection from '../darkBackground/DarkBackground'

const SliderContainer =styled.div`
	
	max-width:1440px;
	height:600px;
	margin:auto;
`;
function featuredSection() {
  return (
		<>
			<DarkSection>
				<SectionTitle
					title="Featured Projects"
				/>
				<SliderContainer>
					<SlickSlider></SlickSlider>
				</SliderContainer>				
			</DarkSection>
		</>  
	);
}

export default featuredSection;
