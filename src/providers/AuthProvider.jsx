import { createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword, signOut } from "firebase/auth";
import { useState } from "react";
import { createContext } from "react";
import auth from "../firebase/firebase.config";
import { useEffect } from "react";
import PropTypes from 'prop-types'
import axios from "axios";

export const AuthContext = createContext(null)

const AuthProvider = ({ children }) => {

    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true);

    const createUser = (email, password) => {
        setLoading(true)
        return createUserWithEmailAndPassword(auth, email, password)
    };

    const signIn = (email, password) => {
        setLoading(true)
        return signInWithEmailAndPassword(auth, email, password)
    };

    const logOut = () => {
        setLoading(true)
        return signOut(auth)
    }


    useEffect(() => {
        const unSubscribe = onAuthStateChanged(auth, currentUser => {
            const userEmail = currentUser?.email;
            const user = { email: userEmail }
            setUser(currentUser);
            setLoading(false);
            if (currentUser) {
                
                axios.post('https://car-doctor-server-tau-jet.vercel.app/jwt', user,{withCredentials:true})
                    .then(() => {
                        // console.log(res.data)
                    })
            }
            else{
                 
                axios.post('https://car-doctor-server-tau-jet.vercel.app/logout', user,{withCredentials:true})
                    .then(() => {
                        // console.log(res.data)
                    })
            }
        });
        return () => {
            unSubscribe();
        }
    }, [])


    const authInfo = {
        user,
        loading,
        createUser,
        signIn,
        logOut,


    }
    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;

AuthProvider.propTypes = {
    children: PropTypes.node,
}