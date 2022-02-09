import React from 'react';
import styled from 'styled-components';
import SectionTitle from '../sectionTitle/SectionTitle'
import CenterMode from '../carousel/Carousel'

const DarkSection = styled.div`
	background-color:var(--color-black);	
	height:100vh;	

`;
function featuredSection() {
  return (
		<>
			<DarkSection>
				<SectionTitle
					title="Featured Projects"
				/>
				<CenterMode></CenterMode>
			</DarkSection>
		</>
  
	);
}

export default featuredSection;
