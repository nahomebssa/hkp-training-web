import { useTheme } from "./ThemeContext"

export function ThemeText({ as: As, className="", ...rest }) {
    const { dark } = useTheme()
    const cn = [className, dark ? 'text-light' : 'text-dark'].join(" ").trim()
    
    return (
        As ? <As className={cn} {...rest} /> : <span className={cn} {...rest} />
    )
}