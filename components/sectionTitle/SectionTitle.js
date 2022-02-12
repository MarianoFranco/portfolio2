import styled from "styled-components";
import React from 'react'
import media from 'styled-media-query'
const Title = styled.h2`
    color:var(--color-white);
    font-weight:bold;
    font-family:var(--font-headings);
    font-size:var(--font-size-huge);
    padding:var(--size-jumbo);
    max-width:1440px;
    margin:auto;
    z-index:5;

    ${media.lessThan("medium")`    
         padding:var(--size-md);
    `}
`;


function SectionTitle({title, id}) {
    
  return (
    <Title id={id}>
        {title}
    </Title>
  )
}


export default SectionTitle;