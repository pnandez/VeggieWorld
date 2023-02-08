
import type { AppProps } from 'next/app'
import Head from 'next/head'
import 'tailwindcss/tailwind.css'


function MyApp({ Component, pageProps }: AppProps) {
  return <>
    <Head>
      <title>Veggie World</title>
      <link rel="icon" href="/favicon.ico" />
    </Head>
    <Component {...pageProps} />
  </>
}

export default MyApp
