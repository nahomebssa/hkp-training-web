import { BrowserRouter, Route, Switch } from 'react-router-dom'
import IndexPage from './pages/index.html'
import WorkPage from './pages/work.html'

import NavBar from "./components/inc/NavBar";
import Main from "./components/inc/Main";
import Footer from "./components/inc/Footer";

import { ThemeProvider } from './ThemeContext'

function AppLayout({ children }) {
    return (
        <ThemeProvider>
            <div className="wrapper p-navbar">
                <NavBar />
                <Main>
                    {children}
                </Main>
                <Footer className="d-none" />
            </div>
        </ThemeProvider>
    )
}

export default function App() {
    // const ErrorPage = () => <code>ERROR 404 NOT FOUND</code>
    const AreYouLostPage = () => (
        <div className="container d-flex justify-content-center m-5 p-5 shadow">
            <div>
                <h1>Are you lost?</h1>
                <p>Try one of these pages:</p>
                <ul>
                    <li>
                        <a href="/">Home</a>
                    </li>
                    <li>
                        <a href="/about">About</a>
                    </li>
                    <li>
                        <a href="/work">Work</a>
                    </li>
                    <li>
                        <a href="/contact">Contact</a>
                    </li>
                </ul>
            </div>
        </div>
    )
    return (
        <BrowserRouter basename="hkp-training-web">
            <AppLayout>
                <Switch>
                    <Route path="/work" component={WorkPage} />
                    <Route exact path="/" component={IndexPage} />
                    <Route component={AreYouLostPage} />
                </Switch>
            </AppLayout>
        </BrowserRouter>
    )
}