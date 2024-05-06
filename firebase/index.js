// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from 'firebase/firestore';
import { initializeAuth, getReactNativePersistence } from 'firebase/auth';
import ReactNativeAsyncStorage from '@react-native-async-storage/async-storage';

import { getAuth } from "firebase/auth";
import { getStorage } from "firebase/storage";
import { getDatabase } from "firebase/database";
// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBXkBSYD19cKZblC7l88hTW80WryNhWX68",
  authDomain: "womensecurity-c64c4.firebaseapp.com",
  projectId: "womensecurity-c64c4",
  storageBucket: "womensecurity-c64c4.appspot.com",
  messagingSenderId: "324651652499",
  appId: "1:324651652499:web:63b332e975de9800318466",
  measurementId: "G-PWH2NXRYW3"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Firebase Authentication and get a reference to the service
const auth = initializeAuth(app, {
  persistence: getReactNativePersistence(ReactNativeAsyncStorage),
});
const storage = getStorage(app)
const db = getFirestore(app);
const database = getDatabase(app)
export {auth}
export {db}
export {storage}
export {database}