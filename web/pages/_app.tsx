import { useEffect } from 'react'
import { useRouter } from 'next/router'
import '../styles/globals.css'
import type { AppProps } from 'next/app'
import Head from 'next/head'
import * as gtag from '../utils/gtag'
import { AppProvider } from '../utils/store'

const App = ({ Component, pageProps }: AppProps) => {
  const router = useRouter()
  useEffect(() => {
    const handleRouteChange = (url: string) => {
      gtag.pageview(url)
    }
    router.events.on('routeChangeComplete', handleRouteChange)
    return () => {
      router.events.off('routeChangeComplete', handleRouteChange)
    }
  }, [router.events])

  return (
    <>
      <Head>
        <meta name='viewport' content='width=device-width, initial-scale=1' />
      </Head>
      <AppProvider>
        <Component {...pageProps} />
      </AppProvider>
    </>
    
  )
}

export default App
