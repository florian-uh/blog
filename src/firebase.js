// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyCLO-dl4M7IIioktg7TKrKOOB38-eHZcYU",
    authDomain: "blog-project-92404.firebaseapp.com",
    projectId: "blog-project-92404",
    storageBucket: "blog-project-92404.firebasestorage.app",
    messagingSenderId: "198077257527",
    appId: "1:198077257527:web:a064a3feda1fe3584facb2",
    measurementId: "G-4JPR4JDEWZ"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);