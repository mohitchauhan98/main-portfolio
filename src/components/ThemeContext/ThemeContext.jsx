import { createContext , useContext, useEffect, useState } from "react";

const ThemeContext = createContext();

const ThemeProvider = ({children}) => {
    const [isDarkMode, setIsDarkMode] = useState(false);

    const toggleTheme = () => {
        setIsDarkMode((prevTheme) => !prevTheme)
    }

    const theme = isDarkMode ? "dark" : "light";

    useEffect(() => {
        document.documentElement.setAttribute("data-theme" , theme)
    } , [isDarkMode])

    return (
        <ThemeContext.Provider value = {{isDarkMode , toggleTheme}}>
            {children}
        </ThemeContext.Provider>
    )
}

export default ThemeProvider;

export const useTheme = () => {
    return useContext(ThemeContext)
}