import React, { Component } from 'react';
import './Login.css';

import { Button, Form, Group, Label, Control, Text, InputGroup } from 'react-bootstrap';

class Login extends Component {
    constructor() {
        super();
        this.state = {
            Title: 'ImpactScout',
            Subheading: 'Welcome to ImpactScout ',
        };
    }

    render() {
        return (
            <div className="col-md-12 loginform">
                <div className="row">
                    <div className="col-md-12 heading">
                        <h1>Welcome to <span> {this.state.Title} </span></h1>
                        <p>Filling your detail to get Access</p>
                    </div>
                    <div className="col-md-12 text-left mbform">
                        <Form>
                            <div className="row">

                                <div className="col-md-12 ">
                                    <Form.Group controlId="formBasicEmail">
                                        <Form.Control type="email" placeholder="Email" />
                                    </Form.Group>
                                </div>
                                <div className="col-md-12">
                                    <InputGroup>
                                        <Form.Control
                                            type="password"
                                            placeholder="Password"
                                            aria-describedby="inputGroupPrepend"
                                            required />
                                        <InputGroup.Prepend>
                                            <InputGroup.Text id="inputGroupPrepend"><i className="fa fa-eye" aria-hidden="true"></i></InputGroup.Text>
                                        </InputGroup.Prepend>
                                    </InputGroup>
                                </div>
                                <div className="col-md-6 mb50">
                                    <p className="forgot"><a>Forgot Password?</a></p>
                                </div>
                                <div className="col-md-6 text-right mb50">
                                    <Button variant="primary" type="submit" className="loginbtn">
                                        Log In
                                    </Button>
                                </div>
                            </div>
                        </Form>
                    </div>
                </div>

            </div>
        );
    }
}

export default Login;
