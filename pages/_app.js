import '../styles/globals.css'
import Layout from '../components/layout'
import { useRouter } from 'next/router'
import { useEffect } from 'react'


function MyApp({ Component, pageProps }) {
    const router = useRouter()  

    useEffect(() => {
        const handleRouteChange = (url) => {
            ga.pageview(url)
        }
        router.events.on('routeChangeComplete', handleRouteChange)
        return () => {
            router.events.off('routeChangeComplete', handleRouteChange)
        }
    }, [router.events])

  return (
      <Layout>
            <Component {...pageProps} />   
      </Layout>
  ) 
}

export default MyApp
