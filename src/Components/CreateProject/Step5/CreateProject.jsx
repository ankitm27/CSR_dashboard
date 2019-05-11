import React, { Component } from 'react';
import './CreateProject.css';
import Navbar from '../../Navbar/Navbar';

import Question from '../CreateQuestion/CreateQuestion';
import { Form, Button, InputGroup } from 'react-bootstrap';
import "react-datepicker/dist/react-datepicker.css";

import { connect } from "react-redux";
import actions from "../../../Store/Actions/Index";
import { withRouter } from "react-router";


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
            ProjectName: "Utsaav"

        };
        this.handleChange = this.handleChange.bind(this);
    }

    handleChange(date) {
        this.setState({
            startDate: date
        });
    }

    async componentDidMount() {
        if (!localStorage.getItem("token")) {
            this.props.history.push({
                pathname: '/login',
            });
        }
    }

    isFormValid(){
        if(true){
            return {status:true}
        }else{
            return {status:false}
        }
    }

    onSubmit = async(evt) => {
        evt.preventDefault();
        const isValid = this.isFormValid();
        if(isValid.status){
            await this.props.createProject({
                step1:this.props.location.state.step1,
                step2:this.props.location.state.step2,
                step3:this.props.location.state.step3,
                step4:this.props.location.state.step4
            });
            if(this.props.projects.success){
                this.props.history.push({
                    pathname:"/"
                });
            }
        }else{
            alert("error");
        }
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
<<<<<<< HEAD
                                    <h1>Create Form</h1>
=======
                                    <h1>Add Question</h1>
>>>>>>> 4d125949e7ead95a161dcbf58c352665cd31352b
                                    <hr></hr>
                                    <br></br>
                                    <p><strong>Project Name: {this.state.ProjectName}</strong></p>
                                </div>

                                <div className="col-md-12 projectform">
<<<<<<< HEAD
                                    <Question />
=======
                                    <Form onSubmit={this.onSubmit}>
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
>>>>>>> 4d125949e7ead95a161dcbf58c352665cd31352b
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

                        <div className="col-md-12 projectsection">
                            <div className="row">
                                <div className="col-md-4 text-right stepparent">
                                    <h1 className="stepnumber check"><i className="fa fa-check" /></h1>
                                </div>
                                <div className="col-md-7">
                                    <h1>{this.state.Step4}</h1>
                                    <p>Add NGO details</p>
                                </div>
                            </div>
                        </div>

                        <div className="col-md-12 projectsection active">
                            <div className="row">
                                <div className="col-md-4 text-right stepparent">
                                    <h1 className="stepnumber active">5</h1>
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

function mapStateToProps(state) {
    return {
        projects: state.Projects
    }
}

const mapDispatchToProps = dispatch => ({
    createProject: (v) => dispatch(actions.createProject(v)),
});


export default withRouter(connect(mapStateToProps, mapDispatchToProps)(CreateProject));
