import { initializeApp } from "firebase/app";
import {getFirestore} from 'firebase/firestore'

const firebaseConfig = {
  apiKey: "AIzaSyBiBJhByS9gfBBcDQKpY6i6xe0yBVYQFf8",
  authDomain: "ecommerce-e6e5f.firebaseapp.com",
  projectId: "ecommerce-e6e5f",
  storageBucket: "ecommerce-e6e5f.firebasestorage.app",
  messagingSenderId: "769740627782",
  appId: "1:769740627782:web:9a571dbd9c54084c988f47"
};

const app = initializeApp(firebaseConfig);
export const db = getFirestore(app)