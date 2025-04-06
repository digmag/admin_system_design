import { createContext, PropsWithChildren, useContext, useState } from "react"

interface ThemeContextProps { 
    checked: boolean
    setChecked: (checked: boolean) => void
}

export const ThemeContext = createContext<ThemeContextProps | undefined> (undefined)

export const ThemeProvider = ({children}: PropsWithChildren) => {
    const [checked, setChecked] = useState(false)
    const setIsChecked = (checked: boolean) => {
        setChecked(checked)
    }
    return (
        <ThemeContext.Provider value={{checked: checked, setChecked: setIsChecked}}>
            {children}
        </ThemeContext.Provider>
    )
}

export const useThemeProvider = () => {
    const context = useContext(ThemeContext)
    if(!context){
        throw ''
    }
    return context
}