import React, { Component } from 'react';
import './SideBanner.css';
import Button from 'react-bootstrap/Button';


class SideBanner extends Component {
    constructor() {
        super();
        this.state = {
            Title: 'ImpactScout',
            Heading: 'is Secure, Easy Way to Track your data at Right Time. ',
            Subheading: "Already have an Account?",
        };
    }

    render() {
        return (
            <div className="sidebanner">
                <div className="col-md-6 left">
                    <h1><span>{this.state.Title}</span> {this.state.Heading}</h1>
                    <p className="mb50">{this.state.Subheading}</p>
                    <Button variant="outline-primary" className="signup">SignUp</Button>
                </div>
            </div>
        );
    }
}

export default SideBanner;
