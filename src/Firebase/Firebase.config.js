// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyALXw4H-Pm8MgWBCexoc4ccW26DmA8euQ4",
  authDomain: "dragon-news-4954a.firebaseapp.com",
  projectId: "dragon-news-4954a",
  storageBucket: "dragon-news-4954a.firebasestorage.app",
  messagingSenderId: "542550707558",
  appId: "1:542550707558:web:3e70cb07f3f8c7746c8ca7"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default app