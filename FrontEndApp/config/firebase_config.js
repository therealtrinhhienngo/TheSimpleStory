// Import the functions you need from the SDKs you need
import { getAnalytics } from "firebase/analytics";
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyARbC3Blm_2hs0uQbIbebdeG2BkG2iDR0g",
    authDomain: "upload-file-demo-f256d.firebaseapp.com",
    projectId: "upload-file-demo-f256d",
    storageBucket: "upload-file-demo-f256d.appspot.com",
    messagingSenderId: "290366675598",
    appId: "1:290366675598:web:2a2b4e46ca8b63f0b607df",
    measurementId: "G-HWP9RSL02S"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);