// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";

import { getFirestore } from "firebase/firestore";
//import {getstorage} from "firebase/storage";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional

const firebaseConfig = {
  apiKey: "AIzaSyC0qyPFk8pGN9lY0PWykWb11R0-U5P8PbM",
  authDomain: "p1nabo.firebaseapp.com",
  projectId: "p1nabo",
  storageBucket: "p1nabo.appspot.com",
  messagingSenderId: "1023638209593",
  appId: "1:1023638209593:web:bb208286c3ec9f74db79e8",
  measurementId: "G-HS68ED752B"
};

// Initialize Firebase

const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export const db = getFirestore(app);
//export const storage = getstorage();