// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyC8cf84eP2NReze_iQE8ECGxOxaFYsFbRE",
  authDomain: "paradoxpoint-store.firebaseapp.com",
  projectId: "paradoxpoint-store",
  storageBucket: "paradoxpoint-store.firebasestorage.app",
  messagingSenderId: "371202412916",
  appId: "1:371202412916:web:f61a1dc92c3444f2ef9c21",
  measurementId: "G-SPXDCSQJB5"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
export const auth = getAuth(app);