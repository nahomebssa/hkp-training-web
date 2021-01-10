import { div } from "../html"
import { useTheme } from "./ThemeContext"

export function ThemeContainer({ as: As = div, className, ...rest }) {
    const { dark } = useTheme()
    const background = ''
    // const background = dark ? 'bg-dark' : 'bg-light'
    // const background = 'bg-light'

    return (
        <As {...rest} className={[className, background].join(" ").trim()} />
    )
}