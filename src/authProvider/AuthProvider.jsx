import { createUserWithEmailAndPassword, onAuthStateChanged, signOut, updateProfile } from "firebase/auth";
import { createContext, useEffect, useState } from "react";
import { auth } from "../firebse/firebase.init";

export const AuthContext = createContext(null)

const AuthProvider = ({children}) => {

    const [user, setUser] = useState()

    const signInUser = (email, password) => {
        return createUserWithEmailAndPassword(auth, email, password)
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
        signInUser,
        user,
        logOut,
        updateUser
    }
    return (
        <AuthContext.Provider value={Info}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;