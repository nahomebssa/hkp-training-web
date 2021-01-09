import { useContext } from "react";
import { useState } from "react";
import { createContext } from "react";

const ScrollContext = createContext()
export const ScrollProvider = ({...rest}) => {
    const [scroll, setScroll] = useState(0)
    document.body.addEventListener('scroll', () => setScroll(window.scrollY))
    const value = { scroll }
    return (
        <ScrollContext.Provider {...rest} value={value} />
    )
}
export const useScroll = () => useContext(ScrollContext)