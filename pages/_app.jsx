import '../styles/globals.css';
import Script from 'next/script';
import Layout from '../components/layout';

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Script strategy="beforeInteractive" src="/scripts/darkMode.js" />
      <Layout>
        <Component pageProps={pageProps} />
      </Layout>
    </>
  );
}

export default MyApp;
