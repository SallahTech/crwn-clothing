import firebase from 'firebase/app'
import 'firebase/firestore'
import 'firebase/auth'

const config = {
  apiKey: 'AIzaSyBvB5r9yZtG2PWG2c2CFr8Z-YEk3uwl-vc',
  authDomain: 'crwn-db-3e5b2.firebaseapp.com',
  databaseURL: 'https://crwn-db-3e5b2.firebaseio.com',
  projectId: 'crwn-db-3e5b2',
  storageBucket: 'crwn-db-3e5b2.appspot.com',
  messagingSenderId: '813556176536',
  appId: '1:813556176536:web:1a7dc3b4f8f4263520e2ed',
  measurementId: 'G-BKFLTFQ2CS',
}

firebase.initializeApp(config)

export const auth = firebase.auth()

export const firestore = firebase.firestore()

const provider = new firebase.auth.GoogleAuthProvider()
provider.setCustomParameters({ prompt: 'select_account' })

export const signInWithGoogle = () => auth.signInWithPopup(provider)

export default firebase
