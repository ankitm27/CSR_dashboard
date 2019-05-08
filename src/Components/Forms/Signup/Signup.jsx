import React, { Component } from 'react';
import './Signup.css';

import { connect } from "react-redux";
import actions from "../../../Store/Actions/Index";
import { withRouter } from "react-router";

import { Button, Form, InputGroup } from 'react-bootstrap';

class Signup extends Component {
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
        firstname: "",
        lastname: "",
        mobile: "",
        password: '',
        organizationType: "",
        confirmPassword: ""
    }


    onSubmit = async (evt) => {
        evt.preventDefault();
        // console.dir(this.state.email, this.state.password)
        if (this.state.firstname === "" || this.state.password === "" || this.state.confirmPassword === "" || this.state.lastname === "" || this.state.mobile === "" || this.state.organizationType === "") {
            document.getElementById("emailerror").innerHTML = "Enter All Values";
        }
        else {
            document.getElementById("emailerror").innerHTML = "";
            await this.props.registerUser({ email: this.state.email, password: this.state.password, confirmPassword: this.state.confirmPassword, firstname: this.state.firstname, lastname: this.state.lastname, mobile: this.state.mobile, organizationType: this.state.organizationType })
            console.log("this.state",this.state);
            console.log("this props",this.props);
            if(this.props.auth.success){
                this.props.history.push({
                    pathname:'/login',
                });
            }
        }
    }

    render() {
        return (
            <div className="col-md-11 signupform">
                <div className="row">
                    <div className="col-md-12 heading">
                        <h1>Welcome to <span> {this.state.Title} </span></h1>
                        <p>Filling your detail to get Access</p>
                    </div>
                    <div className="col-md-12 text-left mbform">
                        <Form onSubmit={this.onSubmit}>
                            <div className="row">

                                <div className="col-md-6 ">
                                    <Form.Group controlId="formBasicEmail">
                                        <Form.Control type="text" placeholder="First Name" value={this.state.firstname} onChange={(evt) => {
                                            this.setState({ firstname: evt.target.value })
                                        }} />
                                    </Form.Group>
                                </div>
                                <div className="col-md-6 ">
                                    <Form.Group controlId="formBasicEmail">
                                        <Form.Control type="text" placeholder="Last Name" value={this.state.lastname} onChange={(evt) => {
                                            this.setState({ lastname: evt.target.value })
                                        }} />
                                    </Form.Group>
                                </div>
                                <div className="col-md-6 ">
                                    <Form.Group controlId="formBasicEmail">
                                        <Form.Control type="email" placeholder="Email" value={this.state.email} onChange={(evt) => {
                                            this.setState({ email: evt.target.value })
                                        }} />
                                    </Form.Group>
                                </div>
                                <div className="col-md-6 ">
                                    <Form.Group controlId="formBasicEmail">
                                        <Form.Control type="number" placeholder="Mobile Number" value={this.state.mobile} onChange={(evt) => {
                                            this.setState({ mobile: evt.target.value })
                                        }} />
                                    </Form.Group>
                                </div>

                                <div className="col-md-12 ">
                                    <Form.Group controlId="formBasicEmail">
                                        <Form.Control as="select" value={this.state.organizationType} onChange={(evt) => {
                                            this.setState({ organizationType: evt.target.value })
                                        }}  >
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
                                            required value={this.state.password} onChange={(evt) => {
                                                this.setState({ password: evt.target.value })
                                            }} />
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
                                            required value={this.state.confirmPassword} onChange={(evt) => {
                                                this.setState({ confirmPassword: evt.target.value })
                                            }} />
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

                                <div className="col-md-6 text-right mb50">
                                    <p id="emailerror" className="text-danger"></p>
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
    registerUser: (v) => dispatch(actions.registerUser(v)),
})

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Signup));