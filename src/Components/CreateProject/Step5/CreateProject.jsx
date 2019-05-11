import React, { Component } from 'react';
import './CreateProject.css';
import Navbar from '../../Navbar/Navbar';

import Question from '../Question/Question';
import { Form, Button, InputGroup } from 'react-bootstrap';
import "react-datepicker/dist/react-datepicker.css";
import DoneQuestion from '../../CreateProject/DoneQuestion/DoneQuestion';

import { connect } from "react-redux";
import actions from "../../../Store/Actions/Index";
import { withRouter } from "react-router";
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
            ProjectName: "Utsaav"

        };
    }


    async componentDidMount() {
        if (!localStorage.getItem("token")) {
            this.props.history.push({
                pathname: '/login',
            });
        }
    }

    isFormValid() {
        if (true) {
            return { status: true }
        } else {
            return { status: false }
        }
    }

    onSubmit = async (evt) => {
        evt.preventDefault();
        const isValid = this.isFormValid();
        if (isValid.status) {
            await this.props.createProject({
                step1: this.props.location.state.step1,
                step2: this.props.location.state.step2,
                step3: this.props.location.state.step3,
                step4: this.props.location.state.step4
            });
            if (this.props.projects.success) {
                this.props.history.push({
                    pathname: "/"
                });
            }
        } else {
            alert("error");
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
                                    <h1>Create Form</h1>
                                    <hr></hr>
                                    <br></br>
                                    <p><strong>Project Name: {this.state.ProjectName}</strong></p>
                                </div>

                                <div className="col-md-12 projectform">

                                    <Form>
                                        <DoneQuestion />
                                        <Question />

                                        <div className="row">
                                            <div className="col-md-12">
                                                <div className="row">
                                                    <div className="col-md-6 text-left back1">
                                                        <a>Back</a>
                                                    </div>
                                                    <div className="col-md-6 text-right">

                                                        <Button variant="primary" type="submit" className="submit" >
                                                            NEXT
                                                    </Button>
                                                    </div>
                                                </div>
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
