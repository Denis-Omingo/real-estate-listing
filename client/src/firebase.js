// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: "real-estate-listing-299e3.firebaseapp.com",
  projectId: "real-estate-listing-299e3",
  storageBucket: "real-estate-listing-299e3.appspot.com",
  messagingSenderId: "63797540974",
  appId: "1:63797540974:web:9d83e7a9d574cc117c0e7f",
  measurementId: "G-ZZRS4JLYB8"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);