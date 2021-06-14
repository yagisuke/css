import qs from 'querystring'
import { useEffect } from 'react'
import { AppProps } from 'next/app'
import { useRouter } from 'next/router'
import { firebase } from '~/utils/firebaseClient'

function MyApp({ Component, pageProps }: AppProps) {
  const router = useRouter()

  console.log(router.pathname)

  useEffect(() => {
    const screenLogger = (url: string) => {
      const query = { ref: 'hogehoge', condition: 'hogehoge' }

      firebase.analytics().logEvent('screen_logger', {
        current_url: url,
        page: 1,
        id: 1,
        query: JSON.stringify(query)
      })
    }
    
    router.events.on('routeChangeComplete', screenLogger)
    //For First Page
    screenLogger(router.pathname)

    //Remvove Event Listener after un-mount
    return () => {
      router.events.off('routeChangeComplete', screenLogger)
    }
  }, [])

  useEffect(() => {
    window.addEventListener('click', () => {
      firebase.analytics().setUserId('yagisukev2')
      firebase.analytics().setUserProperties({
        gender: 'male',
        todofuken: 'kanagawa',
        age: 32
      })
      firebase.analytics().logEvent('clicking_event', {
        eventTargetId: 'hoge',
        water: 1000
      })
    })
  }, [])

  return <Component {...pageProps} />
}

export default MyApp
