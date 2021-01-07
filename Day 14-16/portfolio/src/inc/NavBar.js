import { Link } from "react-router-dom";

export default function NavBar() {
    return (
        <>
            <header className="p-4"></header>
            <nav id="navbar" className="navbar navbar-light bg-light px-3 fixed-top">
                <div className="container">
                    {/* <a className="navbar-brand" href="/">Nahom Ebssa</a> */}
                    <Link className="navbar-brand" to="/">Nahom Ebssa</Link>
                    <ul className="nav nav-pills">
                        <li className="nav-item">
                            {/* <a className="nav-link" href="#about">About</a> */}
                            <Link className="nav-link" to="/about">About</Link>
                        </li>
                        <li className="nav-item">
                            {/* <a className="nav-link" href="#work">Work</a> */}
                            <Link className="nav-link" to="/work">Work</Link>
                        </li>
                        <li className="nav-item">
                            {/* <a className="nav-link" href="#contact">Contact</a> */}
                            <Link className="nav-link" to="/contact">Contact</Link>
                        </li>
                    </ul>
                </div>
            </nav>
        </>
    )
}