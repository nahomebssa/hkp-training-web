import { Link } from "react-router-dom";
import { useTheme } from "../ThemeContext";
import { ThemeText } from "../ThemeText";

export function Footer({ currentPage }) {
    const { themeColor, not } = useTheme()
    const themeBackground = `bg-${themeColor}`
    const themeForeground = `text-${not(themeColor)}`

    const _ = (icon, title, link, className="", active=false) => ({icon, title, link, className, active})
    const footerLeft = [
        _(null, 'Nahom Ebssa', '/'),
        _(null, 'About', '/about'),
        _(null, 'Work', '/work'),
        _(null, 'Contact', '/contact'),
    ]

    return (
        <footer className={`${themeBackground} ${themeForeground} p-5`}>
            <div className="container">
                <div className="d-flex">
                    <div>
                        <ul className="nav flex-column">
                            {
                                footerLeft.map(({title, link, className, active}, i) => {
                                    const c = `nav-link ${active ? 'active' : ''} ${i > 1 ? '' : 'navbar-brand fw-bold'} ${className}`
                                    const aria = active ? {ariaCurrent: 'page'} : {}
                                    return (
                                        <li className="nav-item">
                                            <Link className={c} {...aria} to={link}>
                                                <ThemeText>{title}</ThemeText>
                                            </Link>
                                        </li>
                                    )}
                                )
                            }
                        </ul>
                    </div>
                    <div>
                        <ul className="nav flex-column">
                            <li className="nav-item">
                                <span className="nav-link fw-bold" id="/socials">Socials</span>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" to="/github">Github</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" to="/linkedIn">LinkedIn</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" to="https://codepen.io/enahom99">Codepen</Link>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </footer>
    )
}