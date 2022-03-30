import Head from 'next/head';
import {Fragment} from 'react';
import { ParallaxProvider } from 'react-scroll-parallax';
import '../styles/globals.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import '@fontsource/mulish';

function MyApp({ Component, pageProps }) {
  return (
    <Fragment>
        <Head>
          <title>ERP :: Source</title>
          <meta
            name="description"
            content="ERP Source : Cepat, Praktis, dan Solutif"
          />
          <meta name="viewport" content="width=device-width, initial-scale=1"></meta>
          
        </Head>
        <ParallaxProvider>
          <Component {...pageProps} />
        </ParallaxProvider>
    </Fragment>
  )
}

export default MyApp
