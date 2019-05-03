import React from 'react';
import './home.css';

import Login from '../Login/Login';
import Signup from '../Signup/Signup';

function Main() {
    return (
        <div className="Home">
            {/* <Login /> */}
            <Signup />
        </div>
    );
}

export default Main;
