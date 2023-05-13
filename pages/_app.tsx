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

        <link
          rel='apple-touch-icon'
          sizes='180x180'
          href='/apple-touch-icon.png'
        />
        <link
          rel='icon'
          type='image/png'
          sizes='32x32'
          href='/favicon-32x32.png'
        />
        <link
          rel='icon'
          type='image/png'
          sizes='16x16'
          href='/favicon-16x16.png'
        />
        <link rel='manifest' href='/site.webmanifest'></link>
        <meta name='robots' content='index, follow' />
      </Head>
      <Component {...pageProps} />
    </>
  );
}

export default MyApp;
