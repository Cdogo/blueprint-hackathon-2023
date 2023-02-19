
import firebase from 'firebase/compat/app';
import 'firebase/compat/firestore';
import 'firebase/compat/auth';
import 'firebase/compat/analytics';
import 'firebase/compat/storage';

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
export const app = firebase.initializeApp({
  apiKey: "AIzaSyByBll-QUBnobVUQL169nkNg8eaVAmFNg0",
  authDomain: "blueprint-hackathon-2023.firebaseapp.com",
  projectId: "blueprint-hackathon-2023",
  storageBucket: "blueprint-hackathon-2023.appspot.com",
  messagingSenderId: "765034965570",
  appId: "1:765034965570:web:e394bd990080e860a1dbdb",
  measurementId: "G-RQYW4V1GH9"
});

// Initialize Firebase
export const auth = firebase.auth();
export const storage = firebase.storage();
export const firestore = firebase.firestore();
export const db = firebase.firestore();