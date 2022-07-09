import { useState, useEffect } from "react";
import {
  getAuth,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signOut,
} from "firebase/auth";
import app from "../firebase";
import { doc, setDoc } from "firebase/firestore";
import { db } from "../firebase";

const auth = getAuth(app);

const formatAuthUser = (user) => ({
  uid: user.uid,
  email: user.email,
});

export default function useFirebaseAuth() {
  const [authUser, setAuthUser] = useState(null);
  const [loading, setLoading] = useState(true);

  const authStateChanged = async (authState) => {
    if (!authState) {
      setAuthUser(null);
      setLoading(false);
      return;
    }

    setLoading(true);
    var formattedUser = formatAuthUser(authState);
    setAuthUser(formattedUser);
    setLoading(false);
  };

  // listen for Firebase state change
  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged(authStateChanged);
    return () => unsubscribe();
  }, []);

  // sign in
  const signIn = (email, password) => {
    signInWithEmailAndPassword(auth, email, password);
  };

  // sign up
  const signUp = async (email, password) => {
    try {
      const result = await createUserWithEmailAndPassword(
        auth,
        email,
        password
      );

      const user = formatAuthUser(result.user);

      const docRef = await setDoc(doc(db, "User", user.uid), user);
    } catch (e) {
      console.error("Error adding document: ", e);
    }
  };

  // sign out
  const logOut = () => {
    signOut(auth);
  };

  return {
    authUser,
    loading,
    signIn,
    signUp,
    logOut,
  };
}
