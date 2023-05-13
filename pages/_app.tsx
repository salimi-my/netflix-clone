import '../styles/globals.css';
import type { AppProps } from 'next/app';
import Head from 'next/head';

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <title>Netfuix — Watch Movies, TV Shows Online</title>
        <meta name='title' content='Netfuix — Watch Movies, TV Shows Online' />
        <meta
          name='description'
          content='Watch Netfuix movies & TV shows online or stream right to your smart TV, game console, PC, Mac, mobile, tablet and more.'
        />

        <meta property='og:type' content='website' />
        <meta property='og:url' content='https://netfuix.salimi.my/' />
        <meta
          property='og:title'
          content='Netfuix — Watch Movies, TV Shows Online'
        />
        <meta
          property='og:description'
          content='Watch Netfuix movies & TV shows online or stream right to your smart TV, game console, PC, Mac, mobile, tablet and more.'
        />
        <meta property='og:image' content='/netfuix.jpg' />

        <meta property='twitter:card' content='summary_large_image' />
        <meta property='twitter:url' content='https://netfuix.salimi.my/' />
        <meta
          property='twitter:title'
          content='Netfuix — Watch Movies, TV Shows Online'
        />
        <meta
          property='twitter:description'
          content='Watch Netfuix movies & TV shows online or stream right to your smart TV, game console, PC, Mac, mobile, tablet and more.'
        />
        <meta property='twitter:image' content='/netfuix.jpg' />
      </Head>
      <Component {...pageProps} />
    </>
  );
}

export default MyApp;
