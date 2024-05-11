import { createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut, updateProfile } from "firebase/auth";
import { createContext, useEffect, useState } from "react";
import { auth } from "../firebse/firebase.init";
import { GoogleAuthProvider } from "firebase/auth";

export const AuthContext = createContext(null)
const googleProvider = new GoogleAuthProvider();

const AuthProvider = ({children}) => {

    const [user, setUser] = useState()

    const signUpUser = (email, password) => {
        return createUserWithEmailAndPassword(auth, email, password)
    }

    const loginUser =(email, password) => {
        return signInWithEmailAndPassword(auth, email, password);
    }

    const loginWithGoogle =() =>{
        return signInWithPopup(auth, googleProvider)
    }

    const updateUser = (name, photoUrl) => {
        return updateProfile(auth.currentUser, {
            displayName: name, photoURL: photoUrl
          })
    } 

    const logOut = () => {
        setUser(null)
        return signOut(auth)
    }
    useEffect(()=> 
        {
            const unsubscribe = onAuthStateChanged(auth, (user) => {
                if (user) {
                  setUser(user)
                }
              });

              return () => unsubscribe()
        }, [])
    
      console.log(user)
      

    const Info = {
        signUpUser,
        user,
        logOut,
        updateUser,
        loginUser,
        loginWithGoogle
    }
    return (
        <AuthContext.Provider value={Info}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;