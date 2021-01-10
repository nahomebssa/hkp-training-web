import { h4, section } from '../html'
import { ThemeText } from "../theme/ThemeText"

export function Section({ id, title, component: Component, children, fullWidth, container = true }) {

    const className = { className: [!fullWidth && "container",].join(" ").trim() }
    return (
        <div as={section} {...className}>
            <div className="p-5">
                {id && title && <ThemeText as={h4} id={id}>{title}</ThemeText>}
                {Component ? <Component /> : children}
            </div>
        </div>
    )
}