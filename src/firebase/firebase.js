import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyCJ6xbt9tROzc55OgY4uZayVgcc7d2JmBE",
  authDomain: "learnlingo-32d7b.firebaseapp.com",
  projectId: "learnlingo-32d7b",
  storageBucket: "learnlingo-32d7b.appspot.com",
  messagingSenderId: "723673104408",
  appId: "1:723673104408:web:0980232f8f2fed6f96c36d",
  measurementId: "G-N65CDG47QK",
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

export { app, auth };
