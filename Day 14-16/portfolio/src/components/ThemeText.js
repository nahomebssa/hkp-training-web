import { useTheme } from "./ThemeContext"

export function ThemeText({ as: As, className="", ...rest }) {
    const { dark } = useTheme()
    const text = dark ? 'text-light' : 'text-dark'
    const cn = `${className} ${text}`

    return (
        As ? <As className={cn} {...rest} /> : <span className={cn} {...rest} />
    )
}