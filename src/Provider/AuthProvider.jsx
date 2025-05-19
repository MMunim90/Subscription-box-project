import React, { createContext, useEffect, useState } from 'react';
export const AuthContext = createContext()
import { createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signOut, updateProfile, signInWithPopup, GoogleAuthProvider} from "firebase/auth";
import app from '../firebase/firebase.config';

export const auth = getAuth(app);
const AuthProvider = ({children}) => {
    const googleProvider = new GoogleAuthProvider();
    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true)
    //console.log(loading, user);

    const createUser = (email, password) => {
        setLoading(true)
        return createUserWithEmailAndPassword(auth, email, password)
    };

    const signInWithGoogle = () => {
        setLoading(true);
        return signInWithPopup(auth, googleProvider)
    }

    const signIn = (email, password) => {
        setLoading(true)
        return signInWithEmailAndPassword(auth, email, password);
    }

    const updateUserProfile = (updatedData) => {
        return updateProfile(auth.currentUser, updatedData);
    };

    const logOut = () => {
        setLoading(true)
        return signOut(auth);
    }

    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, (currentUser)=>{

            setUser(currentUser);
            setLoading(false);

        });
        return () => {
            unsubscribe();
        }
    },[])

    const authData = {
        user,
        setUser,
        createUser,
        logOut,
        signIn,
        loading,
        setLoading,
        updateUserProfile,
        signInWithGoogle,
    }
    return <AuthContext value={authData}>
        {children}
    </AuthContext>
};

export default AuthProvider;