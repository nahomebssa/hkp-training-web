import { Form } from "react-bootstrap";
import { Link } from "react-router-dom";
import { useTheme } from "../theme/ThemeContext";
import { ThemeText } from "../theme/ThemeText";

const ThemeLink = ({...rest}) => <ThemeLink as={Link} {...rest} />

export function NavBar() {
    const { dark, themeColor, setThemeColor, not } = useTheme()
    const color = dark ? 'dark' : 'light'
    const bg = dark ? 'bg-dark' : 'bg-light'

    return (
        <nav id="navbar" className={`navbar navbar-${color} ${bg} fixed-top`}>
            <div className="container">
                <ThemeText as={Link} className="navbar-brand" to="/">Nahom Ebssa</ThemeText>
                <ul className="nav nav-pills">
                    <li className="nav-item">
                        <div class="form-check form-switch">
                            <input class="form-check-input" type="checkbox" id="flexSwitchCheckDefault" value={dark} onChange={() => {setThemeColor(not(color)); document.body.classList.toggle('bg-dark')}} />
                            <label class="form-check-label" for="flexSwitchCheckDefault">{dark ? '🌛' : '🔆'}</label>
                        </div>
                    </li>
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