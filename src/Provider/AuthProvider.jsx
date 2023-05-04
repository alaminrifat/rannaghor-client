import React, { createContext, useEffect, useState } from "react";
import {
    createUserWithEmailAndPassword,
    getAuth,
    GoogleAuthProvider,
    onAuthStateChanged,
    signInWithEmailAndPassword,
    signOut,
    updateProfile,
    signInWithPopup,
    GithubAuthProvider,
} from "firebase/auth";
import app from "../Firebase/firebase.config";

export const AuthContext = createContext();

const auth = getAuth(app);

const google_provider = new GoogleAuthProvider();
const github_provider = new GithubAuthProvider();

const AuthProvider = ({ children }) => {
    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true);
    const [photo, setPhoto] = useState(null);
    const [name, setName] = useState(null);

    const createUser = (email, password) => {
        // setLoading(true);
        return createUserWithEmailAndPassword(auth, email, password);
    };
    const googleSignIn = () => {
        return signInWithPopup(auth, google_provider);
    };
    const loginWithEmail = (email, password) => {
        return signInWithEmailAndPassword(auth, email, password);
    };
    const githubSignIn = () => {
        return signInWithPopup(auth, github_provider);
    };
    const updateInfo = (name, url) => {
        return updateProfile(auth.currentUser, {
            displayName: name,
            photoURL: url,
        });
    };
    const logOut = () => {
        setLoading(true);
        return signOut(auth);
    };
    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, (loggedUser) => {
            console.log(
                "logged in user inside auth state observer",
                loggedUser
            );
            setUser(loggedUser);
            setPhoto(loggedUser?.photoURL);
            setName(loggedUser?.displayName);
            setLoading(false);
        });
        return () => {
            unsubscribe();
        };
    }, []);

    const authInfo = {
        user,
        setUser,
        createUser,
        updateInfo,
        googleSignIn,
        loginWithEmail,
        githubSignIn,
        logOut,
        loading,
        photo,
        name,
    };

    return (
        <AuthContext.Provider value={authInfo}>{children}</AuthContext.Provider>
    );
};

export default AuthProvider;
