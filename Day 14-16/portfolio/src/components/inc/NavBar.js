import { Link } from "react-router-dom";
import { useTheme } from "../../ThemeContext";

export default function NavBar() {
    const { themeColor, not } = useTheme()
    const themeBackground = `bg-${themeColor}`
    const themeText = `text-${not(themeColor)}`

    return (
        <nav id="navbar" className={`navbar navbar-${themeColor} ${themeBackground} px-3 fixed-top`}>
            <div className="container">
                <Link className="navbar-brand" to="/">Nahom Ebssa</Link>
                <ul className="nav nav-pills">
                    <li className="nav-item">
                        <Link className={`nav-link ${themeText}`} to="/about">About</Link>
                    </li>
                    <li className="nav-item">
                        <Link className={`nav-link ${themeText}`} to="/work">Work</Link>
                    </li>
                    <li className="nav-item">
                        <Link className={`nav-link ${themeText}`} to="/contact">Contact</Link>
                    </li>
                </ul>
            </div>
        </nav>
    )
}