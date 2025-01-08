// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCIBcFqmT89Twa9XmH2_Ae3x61c9lGeUws",
  authDomain: "netflixgpt-6f54c.firebaseapp.com",
  projectId: "netflixgpt-6f54c",
  storageBucket: "netflixgpt-6f54c.firebasestorage.app",
  messagingSenderId: "616948575481",
  appId: "1:616948575481:web:2027ac2228b095e07a8628",
  measurementId: "G-F4RJER11HY"
};


// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export const auth = getAuth();