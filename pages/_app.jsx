import '../styles/globals.css';
import Layout from 'components/layout';
import { UIContextProvider } from 'contexts/UIContext';

function MyApp({ Component, pageProps }) {
  return (
    <>
      <UIContextProvider>
        <Layout>
          <Component pageProps={pageProps} />
        </Layout>
      </UIContextProvider>
    </>
  );
}

export default MyApp;
