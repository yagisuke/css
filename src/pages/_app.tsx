import { useEffect } from 'react'
import { AppProps } from 'next/app'
import { useRouter } from 'next/router'
import useFirebase from '~/utils/hooks/use-firebase'
import { logEvent, setCurrentScreen, setUserId, setUserProperties } from 'firebase/analytics'

function MyApp({ Component, pageProps }: AppProps) {
  const { analytics } = useFirebase()
  const router = useRouter()

  useEffect(() => {
    const screenlogger = (url: string) => {
      console.warn('screen logger event')
      if (analytics) {
        setCurrentScreen(analytics, url)
        logEvent(analytics, 'screen_view2')
      }
    }
    router.events.on('routeChangeComplete', screenlogger)
    //For First Page
    screenlogger(router.pathname)
    //Remvove Event Listener after un-mount
    return () => {
      router.events.off('routeChangeComplete', screenlogger)
    }
  }, [])

  useEffect(() => {
    console.warn('click event')
    window.addEventListener('click', () => {
      console.warn('click event 2')
      if (analytics) {
        console.warn('click event 3')
        setUserId(analytics, 'yagisuke')
        setUserProperties(analytics, {
          gender: 'male',
          todofuken: 'kanagawa',
          age: 32
        })
        logEvent(analytics, 'click_event2', {
          eventTargetId: 'hoge',
          water: 1000
        })
        console.warn('click event 4')
      }
    })
  }, [])

  return <Component {...pageProps} />
}

export default MyApp
