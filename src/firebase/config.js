import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyB08Yq7xyiTXDa8H3qGw5p8PRSGtm02exo",
  authDomain: "evs-mock-test.firebaseapp.com",
  projectId: "evs-mock-test",
  storageBucket: "evs-mock-test.firebasestorage.app",
  messagingSenderId: "285237392024",
  appId: "1:285237392024:web:94a952a99d8097370cd6ed",
  measurementId: "G-W59V0DKNN2"
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app);
