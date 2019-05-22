import React, { Component } from 'react';
import './SideBanner.css';
import Button from 'react-bootstrap/Button';
import { exportDefaultSpecifier } from '@babel/types';
import { connect } from "react-redux";
import actions from "../../Store/Actions/Index";
import { withRouter } from "react-router";


class SideBanner extends Component {
    constructor() {
        super();
        this.state = {
            Title: 'ImpactScout',
            Heading: 'is Secure, Easy Way to Track your data at Right Time. ',
            SubheadingSignUpPage: "Already have an Account?",
            ButtonSignUpPage:"Login",
            SubheadingLoginPage:"Don't have any Account",
            ButtonLoginPage:"SignUp",
            subHeading:null,
            button:null
        };
        this.onClick= this.onClick.bind(this);
    }

    subHeading(url){
        if(url.includes("signup")){
            this.setState({subHeading:this.state.SubheadingSignUpPage})
        }else{
            this.setState({subHeading:this.state.SubheadingLoginPage})
        }
    }

    buttonName(url){
        if(url.includes("signup")){
            this.setState({button:this.state.ButtonSignUpPage})
        }else{
            this.setState({button:this.state.ButtonLoginPage})
        }
    }

    componentDidMount(){
        this.subHeading(window.location.href);
        this.buttonName(window.location.href);
    }

    onClick(){
        const url = window.location.href;
        if(url.includes("signup")){
            this.props.history.push({
                pathname:"/login"
            })
        }else{
            this.props.history.push({
                pathname:"/signup"
            })
        }
    }

    render() {
        return (
            <div className="sidebanner">
                <div className="col-md-6 left">
                    <h1><span>{this.state.Title}</span> {this.state.Heading}</h1>
                    <p className="mb50">{this.state.subHeading}</p>
                    <Button variant="outline-primary" className="signup" onClick={this.onClick}>{this.state.button}</Button>
                </div>
            </div>
        );
    }
}


const mapStateToProps = state => ({
    auth: state.auth,
})
const mapDispatchToProps = dispatch => ({
    
})

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(SideBanner));