import styled from "styled-components";
import React from 'react'
const Title = styled.h2`
    color:var(--color-white);
    font-weight:bold;
    font-family:var(--font-headings);
    font-size:var(--font-size-huge);
    padding:var(--size-jumbo);
`;


function SectionTitle({title}) {
    
  return (
    <Title>
        {title}
    </Title>
  )
}


export default SectionTitle;