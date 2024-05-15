import { createContext, useEffect, useState } from "react";
import { 
    createUserWithEmailAndPassword, 
    onAuthStateChanged, 
    signInWithEmailAndPassword, 
    signInWithPopup, 
    signOut, 
    updateProfile 
} from "firebase/auth";
import { auth } from "../firebse/firebase.init"; // Corrected import
import { GoogleAuthProvider } from "firebase/auth";

export const AuthContext = createContext(null);
const googleProvider = new GoogleAuthProvider();

const AuthProvider = ({ children }) => {
    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true);

    const signUpUser = (email, password) => {
        setLoading(true)
        return createUserWithEmailAndPassword(auth, email, password)
    };

    const loginUser = (email, password) => {
        setLoading(true)
        return signInWithEmailAndPassword(auth, email, password)
    };

    const loginWithGoogle = () => {
        setLoading(true)
        return signInWithPopup(auth, googleProvider)
    };

    const updateUser = (name, photoUrl) => {
        return updateProfile(auth.currentUser, {
            displayName: name, photoURL: photoUrl
        })
    };

    const logOut = () => {
        setLoading(true)
        setUser(null)
        signOut(auth)
    }

    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, (user) => {
            setUser(user);
            setLoading(false);
        });

        return () => unsubscribe();
    }, []);

    const authInfo = {
        signUpUser,
        user,
        logOut,
        updateUser,
        loginUser,
        loginWithGoogle,
        loading
    };

    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;
