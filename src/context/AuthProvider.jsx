import React from "react";
import { AuthContext } from "./AuthContext";
import { createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "./../Firebase/Firebase.init";
const AuthProvider = ({ children }) => {
  const createUser = (email, password) => {
    return createUserWithEmailAndPassword(auth, email, password);
  };

  const signInUser = (email,password)=>{
    return signInWithEmailAndPassword(auth, email, password)
  }

  const userInfo = {
    createUser,
    signInUser
  };


  onAuthStateChanged(auth, (user) => {
  if (user) {
    console.log('has current user',user);
  } else {
    console.log('current',user);
  }
});


  return <AuthContext value={userInfo}>{children}</AuthContext>;
};

export default AuthProvider;
