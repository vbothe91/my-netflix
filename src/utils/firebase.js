// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBkGtcyMR2PaAsAAwVnIBYBfEdiJnsjFew",
  authDomain: "mynetflix-de44e.firebaseapp.com",
  projectId: "mynetflix-de44e",
  storageBucket: "mynetflix-de44e.appspot.com",
  messagingSenderId: "992041610690",
  appId: "1:992041610690:web:f22c63651ea167857a3a5b",
  measurementId: "G-85TKW5JQFV"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const analytics = getAnalytics(app);
export const auth = getAuth();
