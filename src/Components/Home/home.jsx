import React from 'react';
import './home.css';

import Login from '../Login/Login';
import Signup from '../Signup/Signup';
import Dashboard from '../Dashboard/Dashboard';

function Main() {
    return (
        <div className="Home">
            <Login />
            {/* <Signup />
            <Dashboard /> */}
        </div>
    );
}

export default Main;
