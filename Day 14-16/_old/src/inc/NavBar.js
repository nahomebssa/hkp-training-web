export default function NavBar() {
    return (
        <>
            <header className="p-4"></header>
            <nav id="navbar" className="navbar navbar-light bg-light px-3 fixed-top">
                <div className="container">
                    <a className="navbar-brand" href="/">Nahom Ebssa</a>
                    <ul className="nav nav-pills">
                        <li className="nav-item">
                            <a className="nav-link" href="#about">About</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#work">Work</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#contact">Contact</a>
                        </li>
                    </ul>
                </div>
            </nav>
        </>
    )
}