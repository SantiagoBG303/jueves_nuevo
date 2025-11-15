import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyANUtPkBREEVfzgDEUb400pdx-OJsAMy9U",
  authDomain: "pokeapi-cbb08.firebaseapp.com",
  projectId: "pokeapi-cbb08",
  storageBucket: "pokeapi-cbb08.appspot.com",
  messagingSenderId: "649429869952",
  appId: "1:649429869952:web:9881ff5201344be7d78d65"
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore(app);

export { auth, db };
