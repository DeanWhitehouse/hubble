import Head from 'next/head'
import Layout from '../layouts/main'
import '../styles/globals.css'

function MyApp({ Component, pageProps }) {
  return (
    <Layout>
        <Head>
          <title>Hubble</title>
          <meta name="description" content="Asset intelligence at the speed of business" />
          <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
          <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
          <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />
          <link rel="manifest" href="/site.webmanifest" />
          <link rel="mask-icon" href="/safari-pinned-tab.svg" color="#8655ff" />
          <meta name="msapplication-TileColor" content="#8655ff" />
          <meta name="theme-color" content="#8655ff" />
        </Head>
          <Component {...pageProps} />
    </Layout>
  )
}

export default MyApp
