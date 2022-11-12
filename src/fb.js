// Import the functions you need from the SDKs you need
/* eslint-disable */
import { getFirestore } from "firebase/firestore";
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDug7cjjrHQnH2kXpXXNNmfAcNWzfy524E",
  authDomain: "wad2test1.firebaseapp.com",
  databaseURL: "https://wad2test1-default-rtdb.asia-southeast1.firebasedatabase.app",
  projectId: "wad2test1",
  storageBucket: "wad2test1.appspot.com",
  messagingSenderId: "1079852291342",
  appId: "1:1079852291342:web:b9452aa94fc57c5ce2735f",
  measurementId: "G-43TS1XSPJ9"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore();
export default db ;