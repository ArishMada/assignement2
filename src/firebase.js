// Import the functions you need from the SDKs you need

import {useState, useEffect} from "react"
import { initializeApp } from "firebase/app";
import {getFirestore} from "firebase/firestore"
import { getAnalytics } from "firebase/analytics";
import {getAuth, createUserWithEmailAndPassword, onAuthStateChanged, signOut, signInWithEmailAndPassword} from "firebase/auth"
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyD8ziKYx4ngeZQh51Bgo157L54iTZ9OM5c",
  authDomain: "todo-app-8f0b8.firebaseapp.com",
  projectId: "todo-app-8f0b8",
  storageBucket: "todo-app-8f0b8.appspot.com",
  messagingSenderId: "808446139940",
  appId: "1:808446139940:web:a0f56bacf60bbf6f2702b1",
  measurementId: "G-X0F0B40SMP"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const db = getFirestore(app)
const auth = getAuth();

export function signup(email, password){
  return createUserWithEmailAndPassword(auth, email, password);
}

export function logout() {
  return signOut(auth);
}

export function login(email, password) {
  return signInWithEmailAndPassword(auth, email, password)

}

//Custom hook
export function useAuth() {
  const [currentUser, setCurrentUser] = useState();

  useEffect(() => {
    const unsub = onAuthStateChanged(auth, user => setCurrentUser(user));
    return unsub;
  }, []) 

  return currentUser;

}

