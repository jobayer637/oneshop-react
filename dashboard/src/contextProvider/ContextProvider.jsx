import React, { createContext, useState } from 'react'

export const AuthContext = createContext()

export const ContextProvider = ({ children }) => {
    const [auth, setAuth] = useState({
        isAuth: false,
        user: {}
    })
    return (
        <AuthContext.Provider value={{
            o_auth: [auth, setAuth]
        }}>
            {children}
        </AuthContext.Provider>
    )
}

