import firebase from 'firebase/app'
import 'firebase/analytics'

const FIREBASE_CONFIG = {
  apiKey: 'AIzaSyAznG0kEvOjqzxdCYmynzvxRNOvB86qqNs',
  authDomain: 'yagis-mock.firebaseapp.com',
  projectId: 'yagis-mock',
  storageBucket: 'yagis-mock.appspot.com',
  messagingSenderId: '1074598871181',
  appId: '1:1074598871181:web:9fc2b6e4ba726f0b6fe2c4',
  measurementId: 'G-KP3HTBXJGM',
}

if (typeof window !== 'undefined' && !firebase.apps.length) {
  firebase.initializeApp(FIREBASE_CONFIG)
  ;(window as any).firebase = firebase
}

export { firebase }
