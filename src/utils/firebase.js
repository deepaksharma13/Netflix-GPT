// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries
import { getAuth } from "firebase/auth";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCxeui20QPLCgSRGvJ5k7dCKLeQnbxwdbE",
  authDomain: "netfixgpt-d610a.firebaseapp.com",
  projectId: "netfixgpt-d610a",
  storageBucket: "netfixgpt-d610a.appspot.com",
  messagingSenderId: "938025350132",
  appId: "1:938025350132:web:36271f17222d4075ff3fa1"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth();