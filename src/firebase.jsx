// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCig6iFK3GmVq2wlLc-Rv0bI4Wg4JA5GRQ",
  authDomain: "voluncore-76a77.firebaseapp.com",
  projectId: "voluncore-76a77",
  storageBucket: "voluncore-76a77.firebasestorage.app",
  messagingSenderId: "627212354225",
  appId: "1:627212354225:web:c98cd2b61b839fdd481890",
  measurementId: "G-D4K1TT7N41"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

export { auth };