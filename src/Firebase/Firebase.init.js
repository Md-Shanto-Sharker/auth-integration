// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBXm2OgJTSYkag_7C4kXeH6Yt07qYiB-VU",
  authDomain: "auth-integration-a3a92.firebaseapp.com",
  projectId: "auth-integration-a3a92",
  storageBucket: "auth-integration-a3a92.firebasestorage.app",
  messagingSenderId: "236518477196",
  appId: "1:236518477196:web:58d6e9585598622cfb9aa9"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Firebase Authentication and get a reference to the service
export const auth = getAuth(app);