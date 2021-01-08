import { useTheme } from "../../ThemeContext"

export default function PageHeader({ title, subtitle }) {
    const { Theme, themeColor, not } = useTheme()
    const dark = themeColor === Theme.dark
    const themeBackground = `bg-${themeColor}`
    const themeForeground = `text-${not(themeColor)}`
    console.log({ themeColor })
    const classNameDarkText = (cN = "") => dark ? { className: `${cN} ${themeForeground}` } : { className: cN }
    return (
        <section className={`shadow-sm ${themeBackground} mb-5 p-5`}>
            <div className="container p-5">
                <h1 {...classNameDarkText()}>{title}</h1>
                <p {...classNameDarkText()}>{subtitle}</p>
            </div>
        </section>
    )
}