import '../styles/globals.css'

// nterbal
import {Navbar, Footer} from '../Components'



function MyApp({ Component, pageProps }) {
  return (
    <>
      <Navbar />
      <Component { ...pageProps } />
      <Footer/>
    </>
  )
}

export default MyApp
