import React, { Component } from 'react';
import './Login.css';

import { connect } from "react-redux";
import actions from "../../../Store/Actions/Index";
import { withRouter } from "react-router";

import { Button, Form, InputGroup } from 'react-bootstrap';

class Login extends Component {
    constructor() {
        super();
        this.state = {
            Title: 'ImpactScout',
            Subheading: 'Welcome to ImpactScout ',
        };
    }
    state = {
        email: "",
        password: "",
    }

    onSubmit = (evt) => {
        evt.preventDefault();
        console.dir(this.state.email, this.state.password)
        if (this.state.email === "" || this.state.password === "") {
            document.getElementById("emailerror").innerHTML = "Email Required";
        }
        else {
            document.getElementById("emailerror").innerHTML = "";
            this.props.verifyUser({ email: this.state.email, password: this.state.password })
            return;
        }
    }
    render() {
        return (
            <div className="col-md-12 loginform">
                <div className="row">
                    <div className="col-md-12 heading">
                        <h1>Welcome to <span> {this.state.Title} </span></h1>
                        <p>Filling your details to get Access</p>
                    </div>
                    <div className="col-md-12 text-left mbform">
                        <Form onSubmit={this.onSubmit}>
                            <div className="row">

                                <div className="col-md-12 ">
                                    <Form.Group controlId="formBasicEmail">
                                        <Form.Control type="email" placeholder="Email" value={this.state.email} onChange={(evt) => {
                                            this.setState({ email: evt.target.value })
                                        }} />
                                    </Form.Group>

                                </div>
                                <div className="col-md-12">
                                    <InputGroup>
                                        <Form.Control
                                            type="password"
                                            placeholder="Password"
                                            aria-describedby="inputGroupPrepend"
                                            required value={this.state.password} onChange={(evt) => {
                                                this.setState({ password: evt.target.value })
                                            }} />
                                        <InputGroup.Prepend>
                                            <InputGroup.Text id="inputGroupPrepend"><i className="fa fa-eye" aria-hidden="true"></i></InputGroup.Text>
                                        </InputGroup.Prepend>
                                    </InputGroup>
                                </div>

                                <div className="col-md-12">
                                    <p id="emailerror" className="text-danger"></p>
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

const mapStateToProps = state => ({
    auth: state.auth,
})
const mapDispatchToProps = dispatch => ({
    verifyUser: (v) => dispatch(actions.verifyUser(v)),
})

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Login));



