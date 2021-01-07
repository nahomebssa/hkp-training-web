import { BrowserRouter, Route, Switch } from 'react-router-dom'
import IndexPage from './pages/index.html'
import WorkPage from './pages/work.html'

export default function App() {
    return (
        <BrowserRouter>
            <Switch>
                <Route path="/work" component={WorkPage} />
                <Route exact path="/" component={IndexPage} />
                <Route component={() => <code>ERROR 404 NOT FOUND</code>} />
            </Switch>
        </BrowserRouter>
    )
}