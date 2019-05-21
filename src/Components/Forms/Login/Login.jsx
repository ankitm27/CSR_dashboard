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

    onSubmit = async (evt) => {
        evt.preventDefault();
        // console.dir(this.state.email, this.state.password)
        if (this.state.email === "" || this.state.password === "") {
            document.getElementById("emailerror").innerHTML = "Email Required";
        }
        else {
            document.getElementById("emailerror").innerHTML = "";
            await this.props.verifyUser({ email: this.state.email, password: this.state.password })
            // return;
            console.log("this state", this.state);
            console.log("this.props", this.props);
            if (this.props.auth.token) {
                this.props.history.push({
                    pathname: '/',
                    state: {
                        token: this.props.auth.token,
                        userId: "1234",
                        userName: "check"
                    }
                });
            }
        }
    }


    eye = async (evt) => {
        if (document.getElementById("password").type === "password") {
            document.getElementById("password").type = "text";
            document.getElementById("eye").className = "fa fa-eye-slash";
        }
        else if (document.getElementById("password").type === "text") {
            document.getElementById("password").type = "password";
            document.getElementById("eye").className = "fa fa-eye";
        }
        else {

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
                                            }} id="password" />
                                        <InputGroup.Prepend>
                                            <InputGroup.Text id="inputGroupPrepend"><i className="fa fa-eye" aria-hidden="true" id="eye" onClick={this.eye}></i></InputGroup.Text>
                                        </InputGroup.Prepend>
                                    </InputGroup>
                                </div>

                                <div className="col-md-12">
                                    <p id="emailerror" className="text-danger"></p>
                                </div>


                                {/* <div className="col-md-6 mb50">
                                    <p className="forgot"><a href>Forgot Password?</a></p>
                                </div> */}
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



