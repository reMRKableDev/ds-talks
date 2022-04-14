import '../styles/globals.css';
import Script from 'next/script';
import Layout from 'components/layout';
import { UIContextProvider } from 'contexts/UIContext';

function MyApp({ Component, pageProps }) {
  return (
    <>
      <UIContextProvider>
        <Script strategy="beforeInteractive" src="/scripts/darkMode.js" />
        <Layout>
          <Component pageProps={pageProps} />
        </Layout>
      </UIContextProvider>
    </>
  );
}

export default MyApp;
