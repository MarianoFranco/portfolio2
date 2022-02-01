import { createGlobalStyle } from "styled-components";
import media from "styled-media-query";

const GlobalStyle = createGlobalStyle`
:root{  
    ${media.greaterThan('small')`
    --font-size-base: 16px;
    --font-size-xxs: 0.296rem;
    --font-size-xs: 0.444rem;
    --font-size-sm: 0.667rem;
    --font-size: 1rem;
    --font-size-md: 1.5rem;
    --font-size-lg: 2.25rem;
    --font-size-xl: 3.375rem;
    --font-size-xxl: 5.068rem;
    --font-size-huge: 7.594rem;
    --font-size-jumbo: 11.391rem;  
    background: blue;
    `}
}
html {
    background: black;
    font-family: var(--font-body);
    font-size: var(--font-size-base);
    scroll-behavior: smooth;
    
}
  
`;

export default GlobalStyle;