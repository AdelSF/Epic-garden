// Import the functions you need from the SDKs you need
// import { getAnalytics } from "firebase/analytics";

import firebase from 'firebase/compat/app';
import { initializeApp } from 'firebase/app';

import 'firebase/compat/firestore';
import 'firebase/compat/storage';


// import 'firebase/storage';
// import 'firebase/firestore';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCNhyfZ1gT1GFhhgGd2PuVtNBVMmC1dbiw",
  authDomain: "epicurious-garden.firebaseapp.com",
  projectId: "epicurious-garden",
  storageBucket: "epicurious-garden.appspot.com",
  messagingSenderId: "331591032928",
  appId: "1:331591032928:web:a26bfecf7542acaaa1e305",
  measurementId: "G-S07TG4RGWY"
};

// Initialize Firebase
// const app = initializeApp(firebaseConfig);
// const analytics = getAnalytics(app);
firebase.initializeApp(firebaseConfig);




const projectStorage = firebase.storage();
const projectFirestore = firebase.firestore();
const timestamp = firebase.firestore.FieldValue.serverTimestamp;

export { projectStorage, projectFirestore, timestamp };