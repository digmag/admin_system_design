import { createContext, PropsWithChildren, useContext, useState } from "react"
import { AuthContextProps } from "./data"

export const AuthContext = createContext<AuthContextProps | undefined> (undefined)

export const AuthProvider = ({children}: PropsWithChildren) => {
    const [isAuth, setAuth] = useState(false)
    const setIsAuth = (isAuth: boolean) => {
        setAuth(isAuth)
    }
    return (
        <AuthContext.Provider value={{isAuth: isAuth, setIsAuth: setIsAuth}}>
            {children}
        </AuthContext.Provider>
    )
}

export const useAuthProvider = () => {
    const context = useContext(AuthContext)
    if(!context){
        throw ''
    }
    return context
}