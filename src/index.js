import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';

import Home from './Components/Home/home';
import Signup from '../src/Components/Signup/Signup';
import Login from '../src/Components/Login/Login';

import * as serviceWorker from './serviceWorker';
import { Route, BrowserRouter as Router } from 'react-router-dom';

const routing = (
    <Router>
        <div>
            <Route exact path="/" component={Home} />
            <Route path="/login" component={Login} />
            <Route path="/signup" component={Signup} />
        </div>
    </Router>
)

ReactDOM.render(<App />, document.getElementById('root'));

serviceWorker.unregister();
