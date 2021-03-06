// For Firebase JS SDK v7.20.0 and later, measurementId is optional
import firebase from 'firebase/compat'
import 'firebase/firestore'

const firebaseConfig = {
  apiKey: "AIzaSyDnDh2tJMKOV3hFVQ7WV49ZcHL1WCWtiIg",
  authDomain: "whatsapp-clone-bb6a8.firebaseapp.com",
  projectId: "whatsapp-clone-bb6a8",
  storageBucket: "whatsapp-clone-bb6a8.appspot.com",
  messagingSenderId: "320223837108",
  appId: "1:320223837108:web:50eff7c1ed88d6836150e1",
  measurementId: "${config.measurementId}"
};
const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebase.firestore();
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();

export { auth, provider } ; 
export default db;
