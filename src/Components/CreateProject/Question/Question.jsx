import React, { Component } from 'react';
import './Question.css';

import { Form, Button, InputGroup } from 'react-bootstrap';

import { connect } from "react-redux";
import actions from "../../../Store/Actions/Index";
import { withRouter } from "react-router";

const questionsMap = [];
class Question extends Component {
    constructor() {
        super();
        this.state = {
            question: null,
            questionType: null,
            option: null
        };
    }

    isFormValid() {
        console.log("this state", this.state);
        if (!this.state.question ||
            !this.state.questionType
        ) {
            return { status: false }
        } else {
            return { status: true }
        }
    }

    mapTypeWithId(type) {
        console.log("type", type);
        if (type == "Single Choice") {
            return "5ccdce7e5d29ddd1ed91083e"
        } else if (type == "Text") {
            return "5ccdce7e5d29ddd1ed91083d"
        } else if (type == "Location") {
            return "5ccdce7e5d29ddd1ed91083f"
        } else if (type == "Image") {
            return "5ccdce7e5d29ddd1ed910845"
        }
    }

    onSubmit = async (evt) => {

        evt.preventDefault();
        const isValid = this.isFormValid();
        // console.log("this props location state id",this.props.projectId);
        // console.log("this props location",this.props);
        if (isValid.status) {
            const questionId = this.mapTypeWithId(this.state.questionType)
            // console.log("question id",questionId);    
            const data = {
                question: questionId,
                title: this.state.question,
                max: 100
            }
            // console.log("data",data);
            await this.props.saveQuestion({ _id: this.props.projectId, data: data });
            console.log("this props projects", this.props.projects.success);
            if (this.props.projects.success) {
                document.getElementById("question").innerHTML = "";
                console.log("check");
                console.log("this state", this.state);
                // this.setState({question:null});
                // this.setState({questionType:null});
                // this.setState({option:null});
                // console.log("this state",this.state);
                this.props.history.push({
                    pathname: "/createproject5"
                });
                console.log("this props", this.state);

            }
        } else {
            alert("error");
        }
    }


    ondelete() {
        document.getElementById("questionleft").style.display = "none";
    }


    onChange() {
        if (document.getElementById("questiontype").value === "Single Choice") {
            var myDiv = document.getElementById("clonequestion");
            var divClone = myDiv.cloneNode(true);
            document.getElementById("questionss").appendChild(divClone);
            // document.getElementById("questionleft").style.display = "block";
        }
        else {

        }
    }


    render() {
        return (
            < Form onSubmit={this.onSubmit} >
                <div className="row ">
                    <div className="col-md-12 Question">

                        <div className="row Project">
                            <div className="col-md-12 donequestion" id="donequestion">
                                <img src={require('../../../assets/images/group-8.svg')} alt="" className="pencil" />
                                <p>{this.state.Question}  </p>
                            </div>
                        </div>

                        <div className="row" id="questionss">
                            <div className="col-md-4 questionright">
                                <Form.Group controlId="formBasicName">
                                    <Form.Control as="select" value={this.state.questionType} onChange={(evt) => {
                                        this.setState({ questionType: evt.target.value })
                                    }} id="questiontype" onChange={this.onChange} >
                                        <option id="0">Question Type</option>
                                        <option value="Single Choice" onClick={this.onChange}>Single Choice</option>
                                        <option value="Text" id="2"> Text</option>
                                        <option value="Location" id="4">Location</option>
                                        <option value="Image" id="5">Image</option>
                                    </Form.Control>
                                </Form.Group>
                            </div>

                            <div className="col-md-8 questionleft" id="clonequestion">
                                <Form.Group controlId="formBasicName">
                                    <Form.Control type="text" placeholder="Enter Question" value={this.state.question} onChange={(evt) => {
                                        this.setState({ question: evt.target.value })
                                    }} required id="question" />
                                </Form.Group>
                            </div>

                        </div>
                    </div>


                    <div className="col-md-12 text-center">
                        <Button variant="primary" type="submit" className="addnew">
                            Add New Question
                        </Button>
                    </div>
                    <hr></hr>
                </div>
            </Form >
        );
    }
}

function mapStateToProps(state) {
    return {
        projects: state.Projects
    }
}

const mapDispatchToProps = dispatch => ({
    saveQuestion: (v) => dispatch(actions.saveQuestion(v)),
});


export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Question));