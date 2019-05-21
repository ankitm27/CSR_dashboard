import React, { Component } from 'react';
import './CreateProject.css';
import Navbar from '../../Navbar/Navbar';

import Question from '../Question/Question';
import { Form, Button } from 'react-bootstrap';
import "react-datepicker/dist/react-datepicker.css";

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
            _id:null
        };
    }

    isFormValid() {
        if (true) {
            return { status: true }
        } else {
            return { status: false }
        }
    }

    onClick = (evt) => {
        evt.preventDefault();
        this.props.history.push({
            pathname: '/',
        });
    }

    async componentDidMount() {
        if (!localStorage.getItem("token")) {
            this.props.history.push({
                pathname: '/login',
            });
        }

        if(!this.props || !this.props.location || 
            !this.props.location.state || !this.props.location.state.step1){
            this.props.history.push({
                pathname:"/"
            });
        }else{
            await this.props.createProject({
                "title": this.props.location.state.step1.projectName,
                "description": this.props.location.state.step1.about,
                "status": "open",
                "goal": this.props.location.state.step1.target,
                "goalAchieved": "77",
                "startDate": "2019-06-25T12:00:00Z",
                "endDate": "2019-12-25T12:00:00Z",
                "funding": this.props.location.state.step1.totalFund,
                "targetBeneficiary": this.props.location.state.step1.totalUnit,
                "supervisors": [{
                    "employee_code": this.props.location.state.step3.code,
                    "role": "Product Manager",
                    "name": this.props.location.state.step3.productOwner,
                    "email": this.props.location.state.step3.email,
                    "mobile": this.props.location.state.step3.phone,
                    "country": "India",
                    "city": this.props.location.state.step3.city
                }],
                "rules": [{
                    "componentName": "file",
                    "rules": ["non-duplicate"]
                }],
                "ngo": {
                    "ngoName": this.props.location.state.step4.ngoName,
                    "managerFirstName": this.props.location.state.step4.managerName,
                    "managerLastName": "dummy",
                    "email":this.props.location.state.step4.email,
                    "mobile": this.props.location.state.step4.phone,
                    "country": "India",
                    "location": this.props.location.state.step4.city
                },
                mobiles:[this.props.location.state.step4.allowedUsers]
            });
            if(this.props.projects && this.props.projects._id){
                this.setState({
                    _id:this.props.projects._id
                }); 
            }
            await this.props.createVolunteerUser({
                phone:this.props.location.state.step4.allowedUsers
            })
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
                                    <h1>Add Questions</h1>
                                    <hr></hr>
                                    <br></br>
                                </div>

                                <div className="col-md-12 projectform">

                                    <Form>
                                        <Question projectId={this.state._id}/>

                                        <div className="row">
                                            <div className="col-md-12">
                                                <div className="row">
                                                    <div className="col-md-11 text-right">
                                                        <Button variant="primary" type="submit" className="submit" onClick={this.onClick}>
                                                            Submit
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

function mapStateToProps(state) {
    return {
        projects: state.Projects
    }
}

const mapDispatchToProps = dispatch => ({
    createProject: (v) => dispatch(actions.createProject(v)),
    createVolunteerUser: (v) => dispatch(actions.createVolunteerUser(v)),
    getQuestionsTypes:(v) => dispatch(actions.getQuestionsTypes(v))
});


export default withRouter(connect(mapStateToProps, mapDispatchToProps)(CreateProject));
