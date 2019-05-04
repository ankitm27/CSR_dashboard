import React, { Component } from 'react';
import './CreateProject.css';
import Navbar from '../Navbar/Navbar';
import { Form, Button, InputGroup } from 'react-bootstrap';
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

class CreateProject extends Component {
    constructor() {
        super();
        this.state = {
            Step1: 'Configure your Project',
            Step2: 'Set up Rules',
            Step3: 'Add Project Owner Information',
            Step4: 'Set NGO Information',
            Step5: 'Create Questionnair',
            startDate: new Date()
        };
        this.handleChange = this.handleChange.bind(this);
    }

    handleChange(date) {
        this.setState({
            startDate: date
        });
    }

    render() {
        return (
            <div className="row Project">
                <div className="col-md-12 topbar">
                    <Navbar />
                </div>
                <div className="col-md-7 left">
                    <div className="row">
                        <div className="col-md-12 project">
                            <div className="row">
                                <div className="col-md-12 projecttitle">
                                    <h1>Configure your Project</h1>
                                    <hr></hr>
                                </div>

                                <div className="col-md-12 projectform">
                                    <Form>
                                        <div className="row">
                                            <div className="col-md-12">
                                                <Form.Group controlId="formBasicName">
                                                    <Form.Control type="text" placeholder="Name" />
                                                </Form.Group>
                                            </div>
                                            <div className="col-md-12">
                                                <Form.Group controlId="formBasicProject">
                                                    <Form.Control type="text" placeholder="About Project" />
                                                </Form.Group>
                                            </div>

                                            <div className="col-md-6">
                                                <Form.Group controlId="formBasicTarget">
                                                    <Form.Control type="text" placeholder="Project Target" />
                                                </Form.Group>
                                            </div>
                                            <div className="col-md-6">
                                                <InputGroup>
                                                    <InputGroup.Prepend>
                                                        <InputGroup.Text id="inputGroupPrepend">$</InputGroup.Text>
                                                    </InputGroup.Prepend>
                                                    <Form.Control
                                                        type="text"
                                                        placeholder="Total Fund" />
                                                </InputGroup>
                                            </div>



                                            <div className="col-md-6">
                                                <Form.Group controlId="formBasicTarget">
                                                    <Form.Control type="text" placeholder="Add Total Unit" />
                                                </Form.Group>
                                            </div>
                                            <div className="col-md-6">
                                                <InputGroup>

                                                    <Form.Control
                                                        type="text"
                                                        placeholder="Set Project Date" />
                                                    <InputGroup.Prepend>
                                                        <InputGroup.Text id="inputGroupPrepend" selected={this.state.startDate}
                                                            onChange={this.handleChange} >  <i className="fa fa-calendar" aria-hidden="true"></i> </InputGroup.Text>
                                                    </InputGroup.Prepend>
                                                </InputGroup>
                                            </div>

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
                        <div className="col-md-12 projectsection active">
                            <div className="row">
                                <div className="col-md-4 text-right stepparent">
                                    <h1 className="stepnumber active">1</h1>
                                </div>
                                <div className="col-md-8">
                                    <h1>{this.state.Step1}</h1>
                                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. </p>
                                </div>
                            </div>
                        </div>


                        <div className="col-md-12 projectsection">
                            <div className="row">
                                <div className="col-md-4 text-right stepparent">
                                    <h1 className="stepnumber">2</h1>
                                </div>
                                <div className="col-md-8">
                                    <h1>{this.state.Step2}</h1>
                                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. </p>
                                </div>
                            </div>
                        </div>

                        <div className="col-md-12 projectsection">
                            <div className="row">
                                <div className="col-md-4 text-right stepparent">
                                    <h1 className="stepnumber">3</h1>
                                </div>
                                <div className="col-md-8">
                                    <h1>{this.state.Step3}</h1>
                                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. </p>
                                </div>
                            </div>
                        </div>

                        <div className="col-md-12 projectsection">
                            <div className="row">
                                <div className="col-md-4 text-right stepparent">
                                    <h1 className="stepnumber">4</h1>
                                </div>
                                <div className="col-md-8">
                                    <h1>{this.state.Step4}</h1>
                                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. </p>
                                </div>
                            </div>
                        </div>

                        <div className="col-md-12 projectsection">
                            <div className="row">
                                <div className="col-md-4 text-right stepparent">
                                    <h1 className="stepnumber">5</h1>
                                </div>
                                <div className="col-md-8">
                                    <h1>{this.state.Step5}</h1>
                                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. </p>
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