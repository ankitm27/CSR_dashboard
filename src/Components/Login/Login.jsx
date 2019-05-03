import React, { Component } from 'react';
import './Login.css';
import SideBanner from '../SideBanner/SideBanner';
import LoginForm from '../Forms/Login/Login';

class Login extends Component {
    render() {
        return (
            <div className="row login">
                <div className="col-md-12">
                    <div className="row">
                        <div className="col-md-6">
                            <SideBanner />
                        </div>
                        <div className="col-md-6 right">
                            <div className="row">
                                <div className="col-md-10 offset-md-1 form">
                                    <div className="row">
                                        <LoginForm />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default Login;
