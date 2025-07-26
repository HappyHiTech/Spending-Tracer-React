import React, {createContext, useContext, useState, useEffect, useRef} from 'react';

const AuthContext = createContext();

export const useAuth = () => {
    const context = useContext(AuthContext)
    if (!context) {
        throw new Error("useAuth must be used within an AuthProvider")
    }

    return context;
}

export function AuthProvider({children}){
    const [token, setToken] = useState(localStorage.getItem('token'));
    const [user, setUser] = useState(null);
    const isLoggedIn = useRef(!!token)


    useEffect(() => {
        const storedToken = localStorage.getItem('token')
        if (storedToken) {
            console.log("Im logged in - useEffect")
            setToken(storedToken)
            isLoggedIn.current= true
        }
        console.log(isLoggedIn)
    }, [])

    const login = (newToken) => {
        localStorage.setItem('token', newToken);
        setToken(newToken);
        isLoggedIn.current = true;
    };

    const logout = () => {
        localStorage.removeItem('token');
        setToken(null);
        setUser(null);
        isLoggedIn.current = false;
    };

    const value = {
        token,
        user,
        login,
        logout,
        isLoggedIn
    };

    return (
        <AuthContext.Provider value={value}>
            {children}
        </AuthContext.Provider>
    );

}