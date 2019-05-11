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
            startDate: "",
            projectName:"",
            about:"",
            target:"",
            totalFund:"",
            totalUnit:"",
        };
        this.handleChange = this.handleChange.bind(this);
    }

    handleChange(date) {
        this.setState({
            startDate: date
        });
    }
    
    isFormValid(){
        if(!this.state.projectName || 
            !this.state.about || 
            !this.state.totalFund || 
            !this.state.totalUnit
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
                pathname:'/createproject2',
                state:{
                    step1:{
                        projectName:this.state.projectName,
                        about:this.state.about,
                        target:this.state.target,
                        totalFund:this.state.totalFund,
                        totalUnit:this.state.totalUnit,
                        startDate:this.state.startDate
                    }
                }      
            });
        }else{
            alert("error");
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
                                    <h1>Configure your Project</h1>
                                    <hr></hr>
                                </div>

                                <div className="col-md-12 projectform">
                                    <Form onSubmit={this.onSubmit}>
                                        <div className="row">
                                            <div className="col-md-12">
                                                <Form.Group controlId="formBasicName">
                                                    <Form.Control type="text" placeholder="Name" value={this.state.projectName} onChange={(evt) => {
                                                        this.setState({ projectName: evt.target.value })
                                                    }} />
                                                </Form.Group>
                                            </div>
                                            <div className="col-md-12">
                                                <Form.Group controlId="formBasicProject">
                                                    <Form.Control type="text" placeholder="About Project" value={this.state.about} onChange={(evt) => {
                                                        this.setState({ about: evt.target.value })
                                                    }} />
                                                </Form.Group>
                                            </div>

                                            <div className="col-md-6">
                                                <Form.Group controlId="formBasicTarget">
                                                    <Form.Control type="text" placeholder="Project Target" value={this.state.target} onChange={(evt) => {
                                                        this.setState({ target: evt.target.value })
                                                    }} />
                                                </Form.Group>
                                            </div>
                                            <div className="col-md-6">
                                                <InputGroup>
                                                    <InputGroup.Prepend>
                                                        <InputGroup.Text id="inputGroupPrepend">$</InputGroup.Text>
                                                    </InputGroup.Prepend>
                                                    <Form.Control
                                                        type="text"
                                                        placeholder="Total Fund" value={this.state.totalFund} onChange={(evt) => {
                                                            this.setState({ totalFund: evt.target.value })
                                                        }} />
                                                </InputGroup>
                                            </div>



                                            <div className="col-md-6">
                                                <Form.Group controlId="formBasicTarget">
                                                    <Form.Control type="text" placeholder="Add Total Unit" value={this.state.totalUnit} onChange={(evt) => {
                                                        this.setState({ totalUnit: evt.target.value })
                                                    }} />
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
                                                <Button variant="primary" type="submit" className="submit" >
                                                    NEXT
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
                                <div className="col-md-7">
                                    <h1>{this.state.Step1}</h1>
                                    <p> Please fill the basic details.</p>
                                </div>
                            </div>
                        </div>


                        <div className="col-md-12 projectsection">
                            <div className="row">
                                <div className="col-md-4 text-right stepparent">
                                    <h1 className="stepnumber">2</h1>
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
                                    <h1 className="stepnumber">3</h1>
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