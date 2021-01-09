import { h4 } from '../html'
import { ThemeText } from "../ThemeText"

export function Section({ id, title, component: Component, children, container = true }) {
    const className = container ? { className: "container" } : ""
    return (
        <section {...className}>
            <div className="p-5">
                {id && title && <ThemeText as={h4} id={id}>{title}</ThemeText>}
                {Component ? <Component /> : children}
            </div>
        </section>

    )
}