import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const firebaseConfig = {
    apiKey: "AIzaSyALYHzEm23-xn72Rc_L9LeJxIBxZmisxOE",
    authDomain: "ecommerce-react-app-446e4.firebaseapp.com",
    databaseURL: "https://ecommerce-react-app-446e4.firebaseio.com",
    projectId: "ecommerce-react-app-446e4",
    storageBucket: "ecommerce-react-app-446e4.appspot.com",
    messagingSenderId: "571005954199",
    appId: "1:571005954199:web:948ecd26afd0b52b05e1d2",
    measurementId: "G-3ZMH8P79GD"
};

firebase.initializeApp(firebaseConfig);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account' });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;