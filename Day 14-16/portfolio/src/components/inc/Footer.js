import { Link } from "react-router-dom";

export default function Footer({ currentPage }) {
    return (
        <footer className="bg-dark text-light p-5">
            <div className="container">
                <div className="d-flex">
                    <div>
                        <ul className="nav flex-column">
                            <li className="nav-item">
                                <Link className="nav-link active navbar-brand fw-bold" aria-current="page" to="/nahom">Nahom Ebssa</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" to="/about">About</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" to="/work">Work</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" to="/contact">Contact</Link>
                            </li>
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
                                <Link className="nav-link" to="/codepen">Codepen</Link>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </footer>
    )
}