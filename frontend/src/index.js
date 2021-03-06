import React from 'react';
import ReactDOM from 'react-dom';
import { Route, Switch, BrowserRouter as Router } from 'react-router-dom'
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import DashBoard from './components/DashBoard'
import NotFound from './components/NotFound'

const routing = (
    <Router>
        <Switch>
            <Route exact path="/" component={App} />
            <Route path="/dashboard/:shopId" component={DashBoard} />
            <Route component={NotFound} />
        </Switch>
    </Router>
);
ReactDOM.render(routing, document.getElementById('root'));

// ReactDOM.render(<App />, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
