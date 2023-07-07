import '../styles/globals.css';

// nterbal
import { NavBar, Footer, } from '../Components';

import { CrowdFundingProvider } from '../Context/CrowdFunding';

function MyApp ({ Component, pageProps }) {
  return (
    <CrowdFundingProvider>
      <>
        <NavBar />
        <Component { ...pageProps } />
        <Footer />
      </>
    </CrowdFundingProvider>
  );
}

export default MyApp;
