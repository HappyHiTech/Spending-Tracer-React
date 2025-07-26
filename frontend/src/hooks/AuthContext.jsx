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
    const [user, setUser] = useState(localStorage.getItem('user'));
    const isLoggedIn = useRef(!!token)


    useEffect(() => {
        const storedToken = localStorage.getItem('token')
        const storedUser = localStorage.getItem('user')
        if (storedToken) {
            console.log("Im logged in - useEffect");
            setToken(storedToken);
            setUser(storedUser);
            isLoggedIn.current= true;
        }
    }, [])

    const login = (newToken, user) => {
        localStorage.setItem('token', newToken);
        localStorage.setItem('user', user)
        setToken(newToken);
        setUser(user);
        isLoggedIn.current = true;
    };

    const logout = () => {
        localStorage.removeItem('token');
        localStorage.removeItem('user')
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