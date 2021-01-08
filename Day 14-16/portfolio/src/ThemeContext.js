import { createContext, useState, useContext } from 'react'

const MediaQueries = {
    darkMode: "(prefers-color-scheme: dark)"
}

const ThemeContext = createContext()
export const ThemeProvider = ({ ...rest }) => {
    const Theme = { dark: 'dark', light: 'light' }
    const [themeColor, setThemeColor] = useState("light")
    const mql = window.matchMedia(MediaQueries.darkMode)
    mql.addEventListener('change', ({ matches }) => setThemeColor(matches ? Theme.dark : Theme.light))
    const not = theme => theme === Theme.dark ? Theme.light : theme === Theme.light ? Theme.dark : theme
    const value = { Theme, themeColor, not, }
    return (
        <ThemeContext.Provider value={value} {...rest} />
    )
}
export const useTheme = () => useContext(ThemeContext)