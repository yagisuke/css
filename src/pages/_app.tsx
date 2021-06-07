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
      if (!analytics) return
      setCurrentScreen(analytics, url)
      logEvent(analytics, 'screen_view2')
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
    const $anchor = document.querySelector('a') as HTMLAnchorElement
    $anchor.addEventListener('click', () => {
      if (analytics) {
        setUserId(analytics, 'yagisuke')
        setUserProperties(analytics, {
          gender: 'male',
          todofuken: 'kanagawa',
          age: 32
        })
      }
    })
  }, [])

  return <Component {...pageProps} />
}

export default MyApp
