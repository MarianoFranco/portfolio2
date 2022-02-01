import '../styles/globals.css'
import GlobalStyle from '../styles/globals'


function MyApp({ Component, pageProps }) {
  return (
	<>
		<GlobalStyle></GlobalStyle>
	  	<Component {...pageProps} />
	</>	
  )}

export default MyApp
