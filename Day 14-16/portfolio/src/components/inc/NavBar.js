import { Link } from "react-router-dom";
import { useTheme } from "../theme/ThemeContext";
import { ThemeText } from "../theme/ThemeText";

const ThemeLink = ({...rest}) => <ThemeLink as={Link} {...rest} />

export function NavBar() {
    const { dark } = useTheme()
    const themeColor = dark ? 'dark' : 'light'
    const themeBackground = dark ? 'bg-dark' : 'bg-light'

    return (
        <nav id="navbar" className={`navbar navbar-${themeColor} ${themeBackground} fixed-top`}>
            <div className="container">
                <ThemeText as={Link} className="navbar-brand" to="/">Nahom Ebssa</ThemeText>
                <ul className="nav nav-pills">
                    <li className="nav-item">
                        <ThemeText as={Link} className="nav-link" to="/about">About</ThemeText>
                    </li>
                    <li className="nav-item">
                        <ThemeText as={Link} className="nav-link" to="/work">Work</ThemeText>
                    </li>
                    <li className="nav-item">
                        <ThemeText as={Link} className="nav-link" to="/contact">Contact</ThemeText>
                    </li>
                </ul>
            </div>
        </nav>
    )
}

export function NavBarRoof({...rest}) {
    return <div style={{paddingTop: '56px'}} {...rest} />
}