import React, { createContext, useEffect, useState } from "react";
import { createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signOut } from "firebase/auth";
import app from "../../../firebase.config";


const auth = getAuth(app);

export const authContext = createContext(null);


const AuthPRovider = ({ children }) => {
    const [user,setUser] = useState("")
    const{loading,setLoading} = useState(true)
    
  

    // sign up

    const createUser= (email,password)=>{
      // setLoading(true);
        return createUserWithEmailAndPassword(auth,email,password)
    }
    // sign in

    const login = (email , password)=>{
      // setLoading(true)
        return signInWithEmailAndPassword(auth,email,password)
    }

    // sign Out
const logOut =()=>{
    return signOut(auth)
} 

// observe user auth state : 

useEffect( ()=>{
   const unsubscribe =  onAuthStateChanged(auth,currentUser=>{
        setUser(currentUser);
        setLoading(false)
    });
    // stop observing 
    return ()=>{
        return unsubscribe()
    }
},[])

    
 

  const authInfo = {
    user,
    loading,
    createUser,
    login,
    logOut
   
  };
  return (
    <authContext.Provider value={authInfo}>{children}</authContext.Provider>
  );
};

export default AuthPRovider;
