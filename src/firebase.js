import { initializeApp } from "firebase/app";
import { getFirestore, collection, getDocs } from "firebase/firestore";

import {
  getAuth,
  signInWithPopup,
  GoogleAuthProvider,
  signOut,
} from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyB5jy0dsmuGLct_O8ubKu-havbY1kT3NuQ",
  authDomain: "library-53d4f.firebaseapp.com",
  projectId: "library-53d4f",
  storageBucket: "library-53d4f.appspot.com",
  messagingSenderId: "1050645143474",
  appId: "1:1050645143474:web:a9541e348a9d1d79b54eab",
};

const app = initializeApp(firebaseConfig);

const auth = getAuth();

export default {};
