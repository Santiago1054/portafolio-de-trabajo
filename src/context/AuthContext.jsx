import { createContext, useState, useContext, useEffect } from "react";


export const AuthContext = createContext()

export const useAuth = () => {
    const context = useContext(AuthContext)
    if (!context) {
        throw new Error("useAuth must be used within an AuthProvider")
    }
    return context
}

export const AuthProvider = ({ children }) => {
    const [errors, setErrors] = useState([])
   
    

    
    
    useEffect(() => {
        if (errors.length > 0) {
            const timer = setTimeout(() => {
                setErrors([])
            }, 5000)
            return () => clearTimeout(timer)
        }

    }, [errors])

   


    return (
        <AuthContext.Provider value={{
            errors,
        }}>
            {children}
        </AuthContext.Provider>
    )
} 