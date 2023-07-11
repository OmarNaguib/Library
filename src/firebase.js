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
const provider = new GoogleAuthProvider();
provider.setCustomParameters({
  prompt: "select_account",
});
console.log("here");
const signInFire = () =>
  signInWithPopup(auth, provider)
    .then((result) => {
      const credential = GoogleAuthProvider.credentialFromResult(result);
      const token = credential.accessToken;
      const { user } = result;

      console.log({ credential, token, user });

      return user.displayName;
    })
    .catch((error) => {
      // Handle Errors here.
      const errorCode = error.code;
      const errorMessage = error.message;
      // The email of the user's account used.
      const { email } = error.customData;
      // The AuthCredential type that was used.
      const credential = GoogleAuthProvider.credentialFromError(error);
      // ...
    });

const signOutFire = () =>
  signOut(auth)
    .then(() => true)
    .catch((error) => false);
const getUser = () => auth.currentUser;

export default { signInFire, signOutFire, getUser };
