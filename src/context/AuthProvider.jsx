import React, { useEffect, useState } from "react";
import { AuthContext } from "./AuthContext";
import {
  createUserWithEmailAndPassword,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signOut,
} from "firebase/auth";
import { auth } from "./../Firebase/Firebase.init";
const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);

  const createUser = (email, password) => {
    return createUserWithEmailAndPassword(auth, email, password);
  };

  const signInUser = (email, password) => {
    return signInWithEmailAndPassword(auth, email, password);
  };

  const singOutUser = () => {
    return signOut(auth)
  };

  const userInfo = {
    user,
    createUser,
    signInUser,
    singOutUser
  };

  //   onAuthStateChanged(auth, (user) => {
  //   if (user) {
  //     console.log('has current user',user);
  //   } else {
  //     console.log('current',user);
  //   }
  // });

  useEffect(() => {
    const unSubscribe = onAuthStateChanged(auth, (currentUser) => {
      console.log(
        "current User inside useEffect on auth state change",
        currentUser
      );
      setUser(currentUser);
    });
    return () => {
      unSubscribe();
    };
  }, []);

  return <AuthContext value={userInfo}>{children}</AuthContext>;
};

export default AuthProvider;
