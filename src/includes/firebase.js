import { initializeApp } from 'firebase/app';
// import 'firebase/auth';
// import { getAuth, createUserWithEmailAndPassword } from 'firebase/auth';

const firebaseConfig = {
  apiKey: 'AIzaSyAr1KBBAkWFiUfW-We6WqaNQUnOLb_abHY',
  authDomain: 'music-app-c13b8.firebaseapp.com',
  projectId: 'music-app-c13b8',
  storageBucket: 'music-app-c13b8.appspot.com',
  messagingSenderId: '151127675408',
  appId: '1:151127675408:web:2d8122bf07607554077095',
};

const firebase = initializeApp(firebaseConfig);

export default firebase;
