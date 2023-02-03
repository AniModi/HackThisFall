import { createContext, useContext, useState,useEffect } from "react";
import { auth } from "../adapters/firebase";


const AuthContext = createContext();

export const useAuth = () => {
    return useContext(AuthContext);
}

const AuthProvider = (props)=>{
    const [currentUser,setCurrentUser] = useState();
    const [loading,setLoading] = useState(true);
    const signup = (obj) => {
        let promise = new Promise((resolve,reject) => {
            auth.createUserWithEmailAndPassword(obj.email,obj.password).then(
            (ref) => {
                ref.user.updateProfile({
                    username:obj.username,
                    fullName:obj.fullName,
                    country:obj.country,
                    dob:obj.dob
                });
                resolve(ref);
            }
        ).catch((error)=>reject(error));
    });
        return promise;
    }  
    const signin = (email,password) => {
        let promise = new Promise((resolve,reject) => {
            auth.signInWithEmailAndPassword(email,password).then(
            (ref) => {
                resolve(ref);
            }
        ).catch((error)=>reject(error));
    });
    return promise;
    }
    const signout = ()=>{
        auth.signOut();
    }
    useEffect(() => {
        const unsubscribe = auth.onAuthStateChanged((user) => {
          setCurrentUser(user);
          setLoading(false);
        });
        return unsubscribe;
      }, [currentUser]);
    const value = {
        currentUser,
        signup,
        signin,
        signout};
      return (
        <AuthContext.Provider value={value}>
          {!loading && props.children}
        </AuthContext.Provider>
      );
}

export default AuthProvider;