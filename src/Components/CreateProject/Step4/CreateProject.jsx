import React, { Component } from 'react';
import './CreateProject.css';
import Navbar from '../../Navbar/Navbar';
import { Form, Button } from 'react-bootstrap';
import "react-datepicker/dist/react-datepicker.css";
import Navigation from '../../Navigation/Navigation.jsx';


class CreateProject extends Component {
    constructor() {
        super();
        this.state = {
            Step1: 'Configure your Project',
            Step2: 'Set up Rules',
            Step3: 'Add Project Owner Information',
            Step4: 'Set NGO Information',
            Step5: 'Create Questionnair',
            startDate: new Date(),
            ngoName:"",
            location:"",
            managerName:"",
            lastName:"",
            email:"",
            phone:"",
            allowedUsers:""
        };
        this.handleChange = this.handleChange.bind(this);
    }

    handleChange(date) {
        this.setState({
            startDate: date
        });
    }

    async componentDidMount(){
        if(!localStorage.getItem("token")){
            this.props.history.push({
                pathname:'/login',
            });
        }
    }

    isFormValid(){
        if(!this.state.ngoName || 
            !this.state.location || 
            !this.state.managerName || 
            !this.state.email || 
            !this.state.phone || 
            !this.state.location
            ){
                return {status:false}
            }else{
                return {status:true}
            }
    }

    onSubmit = (evt) => {
        evt.preventDefault();
        const isValid = this.isFormValid();
        if(isValid.status){
            this.props.history.push({
                pathname:'/createproject5',
                state:{
                    step1:this.props.location.state.step1,
                    step2:this.props.location.state.step2,
                    step3:this.props.location.state.step3,
                    step4:{
                        ngoName:this.state.ngoName,
                        location:this.state.location,
                        managerName:this.state.managerName,
                        email:this.state.email,
                        phone:this.state.phone,
                        allowedUsers:this.state.allowedUsers
                    }

                }      
            });
        }else{
            alert('error');
        }
    }


    render() {
        return (
            <div className="row Project">
                <div className="col-md-12 topbar">
                    <Navbar />
                    <Navigation />
                </div>
                <div className="col-md-7 left">
                    <div className="row">
                        <div className="col-md-12 project">
                            <div className="row">
                                <div className="col-md-12 projecttitle">
                                    <h1>Set NGO Information</h1>
                                    <hr></hr>
                                </div>

                                <div className="col-md-12 projectform">
                                    <Form onSubmit={this.onSubmit}>
                                        <div className="row">
                                            <div className="col-md-6">
                                                <Form.Group controlId="formBasicName">
                                                    <Form.Control type="text" placeholder="NGO Name" value={this.state.ngoName} onChange={(evt) => {
                                                        this.setState({ ngoName: evt.target.value })
                                                    }}/>
                                                </Form.Group>
                                            </div>
                                            <div className="col-md-6">
                                                <Form.Group controlId="formBasicName">
                                                    <Form.Control type="text" placeholder="Location" value={this.state.location} onChange={(evt) => {
                                                        this.setState({ location: evt.target.value })
                                                    }}/>
                                                </Form.Group>
                                            </div>
                                            <div className="col-md-6">
                                                <Form.Group controlId="formBasicProject">
                                                    <Form.Control type="text" placeholder="Manager Name" value={this.state.managerName} onChange={(evt) => {
                                                        this.setState({ managerName: evt.target.value })
                                                    }}/>
                                                </Form.Group>
                                            </div>

                                            <div className="col-md-6">
                                                <Form.Group controlId="formBasicTarget">
                                                    <Form.Control type="email" placeholder="Email" value={this.state.email} onChange={(evt) => {
                                                        this.setState({ email: evt.target.value })
                                                    }}/>
                                                </Form.Group>
                                            </div>
                                            <div className="col-md-6">
                                                <Form.Group controlId="formBasicTarget">
                                                    <Form.Control type="number" placeholder="Mobile Number" value={this.state.phone} onChange={(evt) => {
                                                        this.setState({ phone: evt.target.value })
                                                    }}/>
                                                </Form.Group>
                                            </div>



                                            <div className="col-md-6">
                                                <Form.Group controlId="formBasicTarget">
                                                    <Form.Control type="text" placeholder="Allowed User" value={this.state.allowedUsers} onChange={(evt) => {
                                                        this.setState({ allowedUsers: evt.target.value })
                                                    }}/>
                                                </Form.Group>
                                            </div>



                                            <div className="col-md-6">
                                                <Form.Control as="select" value={this.state.country} onChange={(evt) => {
                                                        this.setState({ country: evt.target.value })
                                                    }}>
                                                    <option>Country</option>
                                                    <option>India</option>
                                                </Form.Control>
                                            </div>


                                            <div className="col-md-6">

                                            </div>

                                            {/* <div className="col-md-6 text-left back1">
                                                <a>Back</a>
                                            </div> */}
                                            <div className="col-md-12 text-right">
                                                <Button variant="primary" type="submit" className="submit">
                                                    Next
                                                 </Button>
                                            </div>

                                        </div>
                                    </Form>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="col-md-5 right ">
                    <div className="row section">
                        <div className="col-md-12 projectsection ">
                            <div className="row">
                                <div className="col-md-4 text-right stepparent">
                                    <h1 className="stepnumber check"><i className="fa fa-check" /></h1>
                                </div>
                                <div className="col-md-7">
                                    <h1>{this.state.Step1}</h1>
                                    <p>Please fill the basic details.</p>
                                </div>
                            </div>
                        </div>


                        <div className="col-md-12 projectsection">
                            <div className="row">
                                <div className="col-md-4 text-right stepparent">
                                    <h1 className="stepnumber check"><i className="fa fa-check" /></h1>
                                </div>
                                <div className="col-md-7">
                                    <h1>{this.state.Step2}</h1>
                                    <p>Set up rules of the project. </p>
                                </div>
                            </div>
                        </div>

                        <div className="col-md-12 projectsection">
                            <div className="row">
                                <div className="col-md-4 text-right stepparent">
                                    <h1 className="stepnumber check"><i className="fa fa-check" /></h1>
                                </div>
                                <div className="col-md-7">
                                    <h1>{this.state.Step3}</h1>
                                    <p>Add project owner details</p>
                                </div>
                            </div>
                        </div>

                        <div className="col-md-12 projectsection active">
                            <div className="row">
                                <div className="col-md-4 text-right stepparent">
                                    <h1 className="stepnumber active">4</h1>
                                </div>
                                <div className="col-md-7">
                                    <h1>{this.state.Step4}</h1>
                                    <p>Add NGO details</p>
                                </div>
                            </div>
                        </div>

                        <div className="col-md-12 projectsection">
                            <div className="row">
                                <div className="col-md-4 text-right stepparent">
                                    <h1 className="stepnumber">5</h1>
                                </div>
                                <div className="col-md-7">
                                    <h1>{this.state.Step5}</h1>
                                    <p>Add questionair of project</p>
                                </div>
                            </div>
                        </div>

                    </div>
                </div>

            </div>
        );
    }
}

export default CreateProject;