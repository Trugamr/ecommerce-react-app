import firebase from 'firebase/app'
import 'firebase/firestore'
import 'firebase/auth'

const firebaseConfig = {
  apiKey: 'AIzaSyALYHzEm23-xn72Rc_L9LeJxIBxZmisxOE',
  authDomain: 'ecommerce-react-app-446e4.firebaseapp.com',
  databaseURL: 'https://ecommerce-react-app-446e4.firebaseio.com',
  projectId: 'ecommerce-react-app-446e4',
  storageBucket: 'ecommerce-react-app-446e4.appspot.com',
  messagingSenderId: '571005954199',
  appId: '1:571005954199:web:948ecd26afd0b52b05e1d2',
  measurementId: 'G-3ZMH8P79GD'
}

firebase.initializeApp(firebaseConfig)

export const createUserProfileDocument = async (userAuth, additionalData) => {
  if (!userAuth) return

  const userRef = firestore.doc(`/users/${userAuth.uid}`)
  const snapShot = await userRef.get()

  if (!snapShot.exists) {
    const { displayName, email } = userAuth
    const createdAt = new Date()

    try {
      await userRef.set({
        displayName,
        email,
        createdAt,
        ...additionalData
      })
    } catch (error) {
      console.log('error creating user: ', error.message)
    }
  }

  return userRef
}

export const addCollectionsAndDocuments = async (
  collectionKey,
  objectsToAdd
) => {
  const collectionRef = firestore.collection(collectionKey)
  console.log(collectionRef, objectsToAdd)

  const batch = firestore.batch()
  objectsToAdd.forEach(obj => {
    const newDocRef = collectionRef.doc()
    batch.set(newDocRef, obj)
  })

  return await batch.commit()
}

export const convertCollectionsSnapshotToMap = collections => {
  const transformedCollections = collections.docs.map(doc => {
    const { title, items } = doc.data()
    return {
      id: doc.id,
      title,
      items,
      routeName: encodeURI(title.toLowerCase())
    }
  })

  // converting collections array into object
  return transformedCollections.reduce((acc, collection) => {
    acc[collection.title.toLowerCase()] = collection
    return acc
  }, {})
}

export const auth = firebase.auth()
export const firestore = firebase.firestore()

const provider = new firebase.auth.GoogleAuthProvider()
provider.setCustomParameters({
  prompt: 'select_account'
})
export const signInWithGoogle = () => auth.signInWithPopup(provider)

export default firebase
