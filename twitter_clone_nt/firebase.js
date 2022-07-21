// Import the functions you need from the SDKs you need
import { initializeApp, getApp, getApps } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyC9GlkNa0DDMuNYlAKdDnni-MWMAwnCtNg",
  authDomain: "twitter-clone-nt.firebaseapp.com",
  projectId: "twitter-clone-nt",
  storageBucket: "twitter-clone-nt.appspot.com",
  messagingSenderId: "216890090178",
  appId: "1:216890090178:web:808bbb1c2b29a7c543915b"
};

// Initialize Firebase
const app = !getApps().length ? initializeApp(firebaseConfig) : getApp();
const db = getFirestore();
const storage = getStorage();

export default app;
export { db, storage };