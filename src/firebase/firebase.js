import { initializeApp } from "firebase/app";
import { getDatabase } from "firebase/database";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyCJ6xbt9tROzc55OgY4uZayVgcc7d2JmBE",
  authDomain: "learnlingo-32d7b.firebaseapp.com",
  databaseURL: "https://learnlingo-32d7b-default-rtdb.europe-west1.firebasedatabase.app/",
  projectId: "learnlingo-32d7b",
  storageBucket: "learnlingo-32d7b.appspot.com",
  messagingSenderId: "723673104408",
  appId: "1:723673104408:web:0980232f8f2fed6f96c36d",
  measurementId: "G-N65CDG47QK",
};

const app = initializeApp(firebaseConfig);
const database = getDatabase(app);
const auth = getAuth(app);

export { app, auth, database };
