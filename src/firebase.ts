import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getStorage } from "firebase/storage";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyAKEAuPHcGokdWr3pLdyGn1Zc1zgkUD5y0",
  authDomain: "chatifeye.firebaseapp.com",
  projectId: "chatifeye",
  storageBucket: "chatifeye.appspot.com",
  messagingSenderId: "308952860419",
  appId: "1:308952860419:web:f4090491103043ff7a8b36",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const storage = getStorage(app);
const db = getFirestore(app);

export { app, auth, storage, db };
