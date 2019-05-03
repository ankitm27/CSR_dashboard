import React, { Component } from 'react';
import './signup.css';
import SideBanner from '../SideBanner/SideBanner';
import Signupform from '../Forms/Signup/Signup';

class Signup extends Component {
    render() {
        return (
            <div className="row Signup1">
                <div className="col-md-12">
                    <div className="row">
                        <div className="col-md-6">
                            <SideBanner />
                        </div>
                        <div className="col-md-6 right">
                            <div className="row form">
                                <Signupform />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default Signup;
