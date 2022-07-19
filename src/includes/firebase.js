import { initializeApp } from 'firebase/app';
// import { addDoc, collection, getFirestore } from 'firebase/firestore';
import { doc, setDoc, getFirestore } from 'firebase/firestore';
// import 'firebase/auth';
import { getAuth, createUserWithEmailAndPassword, onAuthStateChanged } from 'firebase/auth';

const firebaseConfig = {
  apiKey: 'AIzaSyAr1KBBAkWFiUfW-We6WqaNQUnOLb_abHY',
  authDomain: 'music-app-c13b8.firebaseapp.com',
  projectId: 'music-app-c13b8',
  storageBucket: 'music-app-c13b8.appspot.com',
  messagingSenderId: '151127675408',
  appId: '1:151127675408:web:2d8122bf07607554077095',
};

const firebase = initializeApp(firebaseConfig);

// const auth = firebase.auth();
const db = getFirestore(firebase);
// const userCollection = db.collection('users');

export {
  db,
  doc,
  setDoc,
  getAuth,
  createUserWithEmailAndPassword,
  onAuthStateChanged,
};
