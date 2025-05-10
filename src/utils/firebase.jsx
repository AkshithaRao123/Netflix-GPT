// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAEWQgjsxkFnme4IZktnIp6knWn_BPlTHk",
  authDomain: "netflixgpt2-1ef1a.firebaseapp.com",
  projectId: "netflixgpt2-1ef1a",
  storageBucket: "netflixgpt2-1ef1a.firebasestorage.app",
  messagingSenderId: "57412293223",
  appId: "1:57412293223:web:43d6c7cb5ddc8a4bb87ac2",
  measurementId: "G-81RHV3YETR"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export const auth = getAuth();