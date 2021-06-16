import firebase from 'firebase/app'
import 'firebase/auth'
import 'firebase/firestore'

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

const db = firebase.firestore()

export const signUpWithEmailPassword = (email, password) => {
  return firebase.auth().createUserWithEmailAndPassword(email, password)
}

export const signInWithEmailPassword = (email, password) => {
  return firebase.auth().signInWithEmailAndPassword(email, password)
}

export const signOut = () => {
  return firebase.auth().signOut()
}

const mapUserFromFirebaseAuthToUser = (user) => {
  const { displayName, email, photoURL, uid } = user
  return {
    avatar: photoURL,
    username: displayName,
    email,
    uid
  }
}

export const loginWithGoogle = () => {
  const provider = new firebase.auth.GoogleAuthProvider()
  return firebase.auth().signInWithPopup(provider)
}

export const onAuthStateChanged = (onChange) => {
  return firebase.auth().onAuthStateChanged((user) => {
    const normalizeUser = user ? mapUserFromFirebaseAuthToUser(user) : null
    onChange(normalizeUser)
  })
}

export const addCookbook = ({ title, ingredients, steps, img, userId }) => {
  return db.collection('cookboks').add({
    title,
    ingredients,
    steps,
    img,
    userId,
    createdAt: firebase.firestore.Timestamp.fromDate(new Date())
  })
}
