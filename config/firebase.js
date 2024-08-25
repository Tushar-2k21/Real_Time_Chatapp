import { initializeApp } from "firebase/app";
import { getAuth, initializeAuth, getReactNativePersistence } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import AsyncStorage from '@react-native-async-storage/async-storage';

// Firebase config
const firebaseConfig = {
  apiKey: "AIzaSyD4Gd70vuo6WvrEX0Ju_QC0-UUDkl7-i4Y",
  authDomain: "authchat-a6cfb.firebaseapp.com",
  projectId: "authchat-a6cfb",
  storageBucket: "authchat-a6cfb.appspot.com",
  messagingSenderId: "1037567357913",
  appId: "1:1037567357913:web:789c64a5429f496c351fc8",
  measurementId: "G-3JXTBHB20V"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Auth with persistence
export const auth = initializeAuth(app, {
  persistence: getReactNativePersistence(AsyncStorage),
});

// Export Firestore
export const database = getFirestore(app);
