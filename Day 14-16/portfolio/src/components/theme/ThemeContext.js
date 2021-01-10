import { createContext, useState, useContext } from 'react'

const MediaQueries = {
    darkMode: "(prefers-color-scheme: dark)"
}
const Theme = { dark: 'dark', light: 'light' }


const ThemeContext = createContext()
export const ThemeProvider = ({ ...rest }) => {
        
    const mql = window.matchMedia(MediaQueries.darkMode)
    
    const [themeColor, setThemeColor] = useState(mql.matches ? Theme.dark : Theme.light)
    
    mql.addEventListener('change', ({ matches }) => setThemeColor(matches ? Theme.dark : Theme.light))

    const not = theme => theme === Theme.dark ? Theme.light : theme === Theme.light ? Theme.dark : theme
    
    return (
        <ThemeContext.Provider {...rest} value={{ Theme, themeColor, not, dark: themeColor === Theme.dark, light: themeColor === Theme.light }} />
    )
}
export const useTheme = () => useContext(ThemeContext)