import {
  createUserWithEmailAndPassword,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signOut,
} from "firebase/auth";
import { createContext, useEffect, useState } from "react";
import { updateProfile } from "firebase/auth";
import { auth } from "../firebase.init";

export const AuthContext = createContext(null);
export default function AuthProvider({ children }) {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  const userRegister = (email, password) => {
    return createUserWithEmailAndPassword(auth, email, password);
  };

  const userLogin = (email, password) => {
    return signInWithEmailAndPassword(auth, email, password);
  };

  const userLogOut = () => {
    return signOut(auth);
  };


  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
      setLoading(false);
    });
    return () => {
      unsubscribe();
    };
  }, []);

  const authInfo = {
    userRegister,
    userLogin,
    user,
    setUser,
    userLogOut,
    loading,
  };
  return (
    <AuthContext.Provider value={authInfo}>{children}</AuthContext.Provider>
  );
}
