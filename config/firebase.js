import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import Constants from "expo-constants";
import 'firebase/auth';
// Firebase config
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyD4Gd70vuo6WvrEX0Ju_QC0-UUDkl7-i4Y",
  authDomain: "authchat-a6cfb.firebaseapp.com",
  projectId: "authchat-a6cfb",
  storageBucket: "authchat-a6cfb.appspot.com",
  messaginenderId: "1037567357913",
  appId: "1:1037567357913:web:7e8ff5c7dc1866a4351fc8",
  measurementId: "G-SH4TCPXGHD"
};
// initialize firebase
initializeApp(firebaseConfig);
export const auth = getAuth();
export const database = getFirestore();
