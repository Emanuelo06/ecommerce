// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getFirestore} from 'firebase/firestore'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBiBJhByS9gfBBcDQKpY6i6xe0yBVYQFf8",
  authDomain: "ecommerce-e6e5f.firebaseapp.com",
  projectId: "ecommerce-e6e5f",
  storageBucket: "ecommerce-e6e5f.firebasestorage.app",
  messagingSenderId: "769740627782",
  appId: "1:769740627782:web:9a571dbd9c54084c988f47"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app)