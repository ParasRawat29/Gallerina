// Import the functions you need from the SDKs you need
import firebase from "firebase/app";
import "firebase/auth";
import "firebase/database";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration

const firebaseConfig = {
  apiKey: "AIzaSyCDUgiZGroppEs3mI_HuLLRgqLxAK45Zjk",
  authDomain: "gallerina-2e701.firebaseapp.com",
  databaseURL:
    "https://gallerina-2e701-default-rtdb.asia-southeast1.firebasedatabase.app",
  projectId: "gallerina-2e701",
  storageBucket: "gallerina-2e701.appspot.com",
  messagingSenderId: "1088933756678",
  appId: "1:1088933756678:web:d6a9b6e49705a0d4eba887",
};

// Initialize Firebase
const app = firebase.initializeApp(firebaseConfig);
export const auth = app.auth();
export const database = app.database();
