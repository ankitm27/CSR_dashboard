import React, { Component } from 'react';
import './Signup.css';

import { Button, Form, InputGroup } from 'react-bootstrap';

class Signup extends Component {
    constructor() {
        super();
        this.state = {
            Title: 'ImpactScout',
            Subheading: 'Welcome to ImpactScout ',
        };
    }

    render() {
        return (
            <div className="col-md-12 signupform">
                <div className="row">
                    <div className="col-md-12 heading">
                        <h1>Welcome to <span> {this.state.Title} </span></h1>
                        <p>Filling your detail to get Access</p>
                    </div>
                    <div className="col-md-12 text-left mbform">
                        <Form>
                            <div className="row">

                                <div className="col-md-6 ">
                                    <Form.Group controlId="formBasicEmail">
                                        <Form.Control type="text" placeholder="First Name" />
                                    </Form.Group>
                                </div>
                                <div className="col-md-6 ">
                                    <Form.Group controlId="formBasicEmail">
                                        <Form.Control type="text" placeholder="Last Name" />
                                    </Form.Group>
                                </div>
                                <div className="col-md-6 ">
                                    <Form.Group controlId="formBasicEmail">
                                        <Form.Control type="email" placeholder="Email" />
                                    </Form.Group>
                                </div>
                                <div className="col-md-6 ">
                                    <Form.Group controlId="formBasicEmail">
                                        <Form.Control type="number" placeholder="Mobile Number" />
                                    </Form.Group>
                                </div>

                                <div className="col-md-12 ">
                                    <Form.Group controlId="formBasicEmail">
                                        <Form.Control as="select">
                                            <option>Organisation Type</option>
                                            <option>Goverment</option>
                                            <option>NGO</option>
                                            <option>Philanthropist fund</option>
                                            <option>Non-Goverment Bodies</option>
                                        </Form.Control>
                                    </Form.Group>
                                </div>

                                <div className="col-md-6">
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
                                <div className="col-md-6">
                                    <InputGroup>
                                        <Form.Control
                                            type="password"
                                            placeholder="Confirm Password"
                                            aria-describedby="inputGroupPrepend"
                                            required />
                                        <InputGroup.Prepend>
                                            <InputGroup.Text id="inputGroupPrepend"><i className="fa fa-eye" aria-hidden="true"></i></InputGroup.Text>
                                        </InputGroup.Prepend>
                                    </InputGroup>
                                </div>
                                <div className="col-md-6 mb50">
                                    <Form.Check type="checkbox" label="Please keep me informed for any updates." />
                                </div>
                                <div className="col-md-6 text-right mb50">
                                    <Button variant="primary" type="submit" className="signupbtn">
                                        Sign Up Now
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

export default Signup;
