// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from 'firebase/auth';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCyMXRKXr3sv2uO6IUyB3KgI9RhsnabYO0",
  authDomain: "obwirebastos.firebaseapp.com",
  projectId: "obwirebastos",
  storageBucket: "obwirebastos.appspot.com",
  messagingSenderId: "138379097494",
  appId: "1:138379097494:web:d4ee44d4de6e868b3f99b7"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const firebaseAuth = getAuth(app)

