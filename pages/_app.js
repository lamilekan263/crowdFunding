import '../styles/globals.css';

// nterbal
import { Navbar, Footer } from '../Components';

import { CrowdFundingProvider } from '../Context/CrowdFunding';

function MyApp ({ Component, pageProps }) {
  return (
    <CrowdFundingProvider>
      <Navbar />
      <Component { ...pageProps } />
      <Footer />
    </CrowdFundingProvider>
  );
}

export default MyApp;
