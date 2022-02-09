import { createGlobalStyle } from "styled-components";
import media from "styled-media-query";

const GlobalStyle = createGlobalStyle`
:root{  

    --font-body: Merriweather, Arial, sans-serif;
    --font-headings: Montserrat, Arial, serif;

    /* FONT SIZES */
    --font-size-base: 16px;
    --font-size-xxs: 0.296rem;
    --font-size-xs: 0.444rem;
    --font-size-sm: 0.667rem;
    --font-size: 1rem;
    --font-size-md: 1.25rem;
    --font-size-lg: 1.5rem;
    --font-size-xl: 1.9rem;
    --font-size-xxl: 2.4rem;
    --font-size-huge: 3rem;
    --font-size-jumbo: 3.8rem;
  
    /* SPACING */
    --size-xxs: 4px;
    --size-xs: 7px;
    --size-sm: 11px;
    --size: 16px;
    --size-md: 20px;
    --size-lg: 25px;
    --size-xl: 31px;
    --size-xxl: 39px;
    --size-huge: 48px;
    --size-jumbo: 61px;

    /* COLORS */
    --color-primary: #06212A;
    --color-secondary: #EBE0A6;
    --color-tertiary: #E69827;   
    --color-white: #fff;
    --color-black: #051920;

    /*COLORS WITH OPACITY*/

    --color-tertiary-42: rgba(230, 152, 39, 0.42);

    /* Animation speed */
    --speed-base: 300ms;
    --speed-fast: 120ms;
    --speed-medium: 200ms;
    --speed-slow: 500ms;
  
    --animate-duration: var(--speed-base);
    --animate-delay: var(--speed-fast);
  
    /* ${media.greaterThan('small')`
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
   
    `} */
}
html {
    font-family: var(--font-body);
    font-size: var(--font-size-base);
    scroll-behavior: smooth;
    
}
body{
    margin:0 auto;
    padding:0;      
    
}
a {
    color: inherit;
    text-decoration: none;
  }  

*,
*:before,
*:after {
  box-sizing: border-box;
}
`;

export default GlobalStyle;