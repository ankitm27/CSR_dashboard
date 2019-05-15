import React, { Component } from 'react';
import './CreateProject.css';
import Navbar from '../../Navbar/Navbar';
import { Form, Button, InputGroup } from 'react-bootstrap';
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
            code:'',
            role:'',
            productOwner:'',
            lastName:'',
            country:'',
            city:'',
            email:"",
            phone:""
        };
        this.handleChange = this.handleChange.bind(this);
    }

    handleChange(date) {
        this.setState({
            startDate: date
        });
    }

    isFormValid(){
        if(!this.state.code || 
            !this.state.role || 
            !this.state.productOwner || 
            !this.state.lastName ||
            !this.state.country || 
            !this.state.city
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
                pathname:'/createproject4',
                state:{
                    step1:this.props.location.state.step1,
                    step2:this.props.location.state.step2,
                    step3:{
                        code:this.state.code,
                        role:this.state.role,
                        productOwner:this.state.productOwner,
                        lastName:this.state.lastName,
                        country:this.state.country,
                        city:this.state.city,
                        email:this.state.email,
                        phone:this.state.phone
                    }
                }      
            });
        }else{
            alert('Please provide all the required fields');
        }
    }

    async componentDidMount(){
        if(!localStorage.getItem("token")){
            this.props.history.push({
                pathname:'/login',
            });
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
                                    <h1>Add Project Owner Information</h1>
                                    <hr></hr>
                                </div>

                                <div className="col-md-12 projectform">
                                    <Form onSubmit={this.onSubmit}>
                                        <div className="row">
                                            <div className="col-md-6">
                                                <Form.Group controlId="formBasicName">
                                                    <Form.Control type="text" placeholder="Employee Code" value={this.state.code} onChange={(evt) => {
                                                        this.setState({ code: evt.target.value })
                                                    }}/>
                                                </Form.Group>
                                            </div>
                                            <div className="col-md-6">
                                                <Form.Control as="select" value={this.state.role} onChange={(evt) => {
                                                        this.setState({ role: evt.target.value })
                                                    }}>
                                                    <option>Role</option>
                                                    <option>Product Manager</option>
                                                </Form.Control>
                                            </div>

                                            <div className="col-md-6">
                                                <Form.Group controlId="formBasicTarget">
                                                    <Form.Control type="text" placeholder="First Name" value={this.state.productOwner} onChange={(evt) => {
                                                        this.setState({ productOwner: evt.target.value })
                                                    }}/>
                                                </Form.Group>
                                            </div>
                                            <div className="col-md-6">
                                                <InputGroup>
                                                    <Form.Control
                                                        type="text"
                                                        placeholder="Last Name" value={this.state.lastName} onChange={(evt) => {
                                                            this.setState({ lastName: evt.target.value })
                                                        }}/>
                                                </InputGroup>
                                            </div>

                                            <div className="col-md-6">
                                                <Form.Group controlId="formBasicName">
                                                    <Form.Control type="text" placeholder="Email" value={this.state.email} onChange={(evt) => {
                                                        this.setState({ email: evt.target.value })
                                                    }}/>
                                                </Form.Group>
                                            </div>

                                            <div className="col-md-6">
                                                <Form.Group controlId="formBasicName">
                                                    <Form.Control type="text" placeholder="Phone" value={this.state.phone} onChange={(evt) => {
                                                        this.setState({ phone: evt.target.value })
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
                                                <Form.Control as="select" value={this.state.city} onChange={(evt) => {
                                                        this.setState({ city: evt.target.value })
                                                    }}>
                                                    <option>City</option>
                                                    <option>Delhi</option>
                                                </Form.Control>
                                            </div>
                                            
                                            {/* <div className="col-md-6 text-left back1">
                                                <a>Back</a>
                                            </div> */}
                                            <div className="col-md-11 text-right">
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

                        <div className="col-md-12 projectsection active">
                            <div className="row">
                                <div className="col-md-4 text-right stepparent">
                                    <h1 className="stepnumber active">3</h1>
                                </div>
                                <div className="col-md-7">
                                    <h1>{this.state.Step3}</h1>
                                    <p>Add project owner details</p>
                                </div>
                            </div>
                        </div>

                        <div className="col-md-12 projectsection">
                            <div className="row">
                                <div className="col-md-4 text-right stepparent">
                                    <h1 className="stepnumber">4</h1>
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
                                    <p>Add questionnaire of project</p>
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