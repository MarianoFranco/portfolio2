import styled from "styled-components";
import React from 'react'
const Title = styled.h2`
    color:var(--color-white);
    font-weight:bold;
    font-family:var(--font-headings);
    font-size:var(--font-size-huge);
    padding:var(--size-jumbo);
    max-width:1440px;
    margin:auto;
    z-index:5;
`;


function SectionTitle({title}) {
    
  return (
    <Title>
        {title}
    </Title>
  )
}


export default SectionTitle;