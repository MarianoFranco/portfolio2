import '../styles/globals.js'
import GlobalStyle from '../styles/globals'

import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";

function MyApp({ Component, pageProps }) {
  return (
	<>	
		<GlobalStyle></GlobalStyle>
	  	<Component {...pageProps} />
	</>	
  )}

export default MyApp
