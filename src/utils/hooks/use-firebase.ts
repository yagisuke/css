import { useEffect, useState } from 'react'
import { initializeApp, FirebaseApp } from 'firebase/app'
import { getAnalytics, Analytics } from 'firebase/analytics'

const firebaseConfig = {
  apiKey: 'AIzaSyAznG0kEvOjqzxdCYmynzvxRNOvB86qqNs',
  authDomain: 'yagis-mock.firebaseapp.com',
  projectId: 'yagis-mock',
  storageBucket: 'yagis-mock.appspot.com',
  messagingSenderId: '1074598871181',
  appId: '1:1074598871181:web:9fc2b6e4ba726f0b6fe2c4',
  measurementId: 'G-KP3HTBXJGM'
}

const useFirebase = () => {
  const [firebase, setFirebase] = useState<FirebaseApp | undefined>(undefined)
  const [analytics, setAnalytics] = useState<Analytics | undefined>(undefined)

  useEffect(() => {
    const fb = initializeApp(firebaseConfig)
    const ga = getAnalytics(fb)
    setFirebase(fb)
    setAnalytics(ga)
  }, [])

  return {
    firebase,
    analytics
  }
}

export default useFirebase
