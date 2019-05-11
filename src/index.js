import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

import { Provider } from "react-redux";
import thunk from "redux-thunk";
import { createStore, applyMiddleware, compose } from "redux";
import Reducers from "./Store/Reducers";

import Home from './Components/Home/home';
import Signup from '../src/Components/Signup/Signup';
import Login from '../src/Components/Login/Login';
import Dashboard from '../src/Components/Dashboard/Dashboard';
import ProjectDetail from '../src/Components/ProjectDetails/ProjectDetails';
import CreateProject from '../src/Components/CreateProject/Step1/CreateProject';
import step2 from '../src/Components/CreateProject/Step2/CreateProject';
import step3 from '../src/Components/CreateProject/Step3/CreateProject';
import step4 from '../src/Components/CreateProject/Step4/CreateProject';
import step5 from '../src/Components/CreateProject/Step5/CreateProject';
import done from '../src/Components/CreateProject/DoneQuestion/DoneQuestion';

import * as serviceWorker from './serviceWorker';
import { Route, BrowserRouter as Router } from 'react-router-dom';


const composeEnhancers =
    (window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ &&
        window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({
            trace: true,
            traceLimit: 25
        })) ||
    compose;

const store = createStore(Reducers, composeEnhancers(applyMiddleware(thunk)));


const routing = (
    <Provider store={store}>
        <Router>
            <div>
                <Route exact path="/" component={Home} />
                <Route path="/login" component={Login} />
                <Route path="/signup" component={Signup} />
                <Route path="/home" component={Dashboard} />
                <Route path="/detail" component={ProjectDetail} />
                <Route path="/createproject" component={CreateProject} />
                <Route path="/createproject2" component={step2} />
                <Route path="/createproject3" component={step3} />
                <Route path="/createproject4" component={step4} />
                <Route path="/createproject5" component={step5} />
                <Route path="/done" component={done} />
            </div>
        </Router>
    </Provider>
)

ReactDOM.render(routing, document.getElementById('root'));

serviceWorker.unregister();
