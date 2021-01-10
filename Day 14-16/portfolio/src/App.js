import {Fragment as ReactFragment} from 'react'
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import IndexPage from './pages/index.html'
import AboutPage from './pages/about.html'
import WorkPage from './pages/work.html'
import ContactPage from './pages/contact.html'

import { NavBar } from "./components/inc/NavBar";
import { Main } from "./components/inc/Main";
import { Footer } from "./components/inc/Footer";

import { ThemeProvider } from './components/theme/ThemeContext'
import { ScrollProvider } from './components/ScrollContext'
import { ThemeContainer } from './components/theme/ThemeContainer'

function AppLayout({ children }) {
    const Wrapper = !true ? ThemeContainer : ReactFragment
    return (
        <ScrollProvider>
            <ThemeProvider>
                <Wrapper>
                    <NavBar />
                    <Main>
                        {children}
                    </Main>
                    {false && <Footer />}
                </Wrapper>
            </ThemeProvider>
        </ScrollProvider>
    )
}

export default function App() {
    // const ErrorPage = () => <code>ERROR 404 NOT FOUND</code>
    const AreYouLostPage = () => (
        <div className="container d-flex justify-content-center m-5 p-5 shadow-sm">
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
                    <Route path="/about" component={AboutPage} />
                    <Route path="/work" component={WorkPage} />
                    <Route path="/contact" component={ContactPage} />
                    <Route exact path="/" component={IndexPage} />
                    <Route component={AreYouLostPage} />
                </Switch>
            </AppLayout>
        </BrowserRouter>
    )
}