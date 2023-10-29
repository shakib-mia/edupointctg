// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAoKn6mrBWYDruJqON5eqYTzOrwxOYH7w0",
  authDomain: "edupointctg-491f2.firebaseapp.com",
  projectId: "edupointctg-491f2",
  storageBucket: "edupointctg-491f2.appspot.com",
  messagingSenderId: "735134949371",
  appId: "1:735134949371:web:85588426616cee7b0e755e",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
