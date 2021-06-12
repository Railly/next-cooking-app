import firebase from 'firebase/app'
import 'firebase/auth'

const firebaseConfig = {
  apiKey: 'AIzaSyDjKjfXnXsRCY7sAjqcPaWHDExwXCwqC6M',
  authDomain: 'foody-d471b.firebaseapp.com',
  projectId: 'foody-d471b',
  storageBucket: 'foody-d471b.appspot.com',
  messagingSenderId: '381152680308',
  appId: '1:381152680308:web:39c4d00d913d834b5f7421',
  measurementId: 'G-2X5GNQPKS9'
}

!firebase.apps.length && firebase.initializeApp(firebaseConfig)

export const signUpWithEmailPassword = (email, password) => {
  return firebase.auth().createUserWithEmailAndPassword(email, password)
}

export const signInWithEmailPassword = (email, password) => {
  return firebase.auth().signInWithEmailAndPassword(email, password)
}

export const signOut = () => {
  return firebase.auth().signOut()
}

export const loginWithGoogle = () => {
  const provider = new firebase.auth.GoogleAuthProvider()
  return firebase.auth().signInWithPopup(provider)
}

export const onAuthStateChanged = (onChange) => {
  return firebase.auth().onAuthStateChanged(async (user) => {
    const normalizeUser = user || null
    onChange(normalizeUser)
  })
}
