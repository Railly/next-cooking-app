import firebase from 'firebase/app'
import 'firebase/auth'
import 'firebase/firestore'
import 'firebase/storage'

const firebaseConfig = {
  apiKey: 'AIzaSyCeTLwrUUsVLltj2x2tU3uNhoszgWrUl3A',
  authDomain: 'foody-87679.firebaseapp.com',
  projectId: 'foody-87679',
  storageBucket: 'foody-87679.appspot.com',
  messagingSenderId: '738187282540',
  appId: '1:738187282540:web:9c57c59bfd15870c7eb049',
  measurementId: 'G-KKSLG2L1KF'
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

export const addCookbook = ({ name, userId }) => {
  return db.collection('cookbooks').add({
    name,
    userId,
    createdAt: firebase.firestore.Timestamp.fromDate(new Date())
  })
}
// TODO: Add Recipe DB
export const addRecipe = ({ bookId, title, img, ingredients, steps }) => {
  return db
    .collection('cookbooks')
    .doc(`${bookId}`)
    .collection('recipes')
    .add({
      title,
      img,
      ingredients,
      steps,
      createdAt: firebase.firestore.Timestamp.fromDate(new Date())
    })
}

export const updateRecipe = ({
  bookId,
  recipeId,
  title,
  img,
  ingredients,
  steps
}) => {
  return db
    .collection('cookbooks')
    .doc(`${bookId}`)
    .collection('recipes')
    .doc(`${recipeId}`)
    .update({
      title,
      img,
      ingredients,
      steps
    })
}

const mapFromFirebaseToObject = (doc) => {
  const data = doc.data()
  const id = doc.id
  const { createdAt } = data

  return {
    ...data,
    id,
    createdAt: +createdAt.toDate()
  }
}

// TODO: .limit(20)
export const listenLatestCookbooks = (userId, callback) => {
  return db
    .collection('cookbooks')
    .where('userId', '==', `${userId}`)
    .orderBy('createdAt')
    .onSnapshot(({ docs }) => {
      const newCookbooks = docs.map(mapFromFirebaseToObject)
      callback(newCookbooks)
    })
}

export const listenLatestRecipes = (cookbookId, callback) => {
  return db
    .collection('cookbooks')
    .doc(`${cookbookId}`)
    .collection('recipes')
    .orderBy('createdAt')
    .onSnapshot(({ docs }) => {
      const newRecipes = docs.map(mapFromFirebaseToObject)
      callback(newRecipes)
    })
}

export const uploadImage = (file) => {
  const ref = firebase.storage().ref(`images/${file.name}`)
  const task = ref.put(file)
  return task
}
