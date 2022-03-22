// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from 'firebase/firestore/lite';
import { getStorage } from "firebase/storage";
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyD_CN__9y-rb4lY8an54hiXEjaMRtyHi_k",
  authDomain: "milan-app-1b3c3.firebaseapp.com",
  projectId: "milan-app-1b3c3",
  storageBucket: "milan-app-1b3c3.appspot.com",
  messagingSenderId: "99542710896",
  appId: "1:99542710896:web:c6eb027b3353e9ca9f92b5",
  measurementId: "G-W2DRQM2WEH"
};

// Initialize Firebase
  const app = initializeApp(firebaseConfig);
 export const db = getFirestore(app);

 export const storage = getStorage(app);
