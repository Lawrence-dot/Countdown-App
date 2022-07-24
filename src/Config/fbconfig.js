// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import 'firebase/firestore';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyC0x75VSstx9TWiKDQ2OI5Z_ouJbNvBBjw",
  authDomain: "notepad-5c828.firebaseapp.com",
  projectId: "notepad-5c828",
  storageBucket: "notepad-5c828.appspot.com",
  messagingSenderId: "64728763486",
  appId: "1:64728763486:web:94c754cf4af7df1fa178cf",
  measurementId: "G-Q06BCDJ0SY"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);