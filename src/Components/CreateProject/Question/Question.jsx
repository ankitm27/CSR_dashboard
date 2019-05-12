import React, { Component } from 'react';
import './Question.css';

import { Form, Button, InputGroup } from 'react-bootstrap';

import { connect } from "react-redux";
import actions from "../../../Store/Actions/Index";
import { withRouter } from "react-router";


class CreateProject extends Component {
    constructor() {
        super();
        this.state = {
            Question: null,
            QuestionType: null,
            Option: null
        };
    }

    isFormValid() {
        if (!this.state.question ||
            !this.state.questionType
        ) {
            return { status: false }
        } else {
            return { status: true }
        }
    }

    onSubmit = (evt) => {
        evt.preventDefault();
        document.getElementById("donequestion").style.display = "block";
        document.getElementById("question").value = "";
        document.getElementById("questiontype").selected = "";
        const isValid = this.isFormValid();
        if (isValid.status) {
            this.props.history.push({
                state: {
                    QuestionDetail: {
                        Question: this.state.question,
                        QuestionType: this.state.questionType,
                        Option: this.state.Option,
                    }
                }
            });
        } else {
            alert("error");
        }
    }

    handleClick() {
        document.getElementById("addnew").style.display = "block";
    }
    delete() {
        document.getElementById("addnew").style.display = "none";
    }

    addnew() {
        document.getElementById("questions").style.display = "block";
    }

    render() {
        return (
            < Form onSubmit={this.onSubmit} >
                <div className="row ">
                    <div className="col-md-12 Question">

                        <div className="row Project" onChange={this.onload}>
                            <div className="col-md-12 donequestion" id="donequestion">
                                <img src={require('../../../assets/images/group-8.svg')} alt="" className="pencil" />
                                <p>{this.state.Question}  </p>
                            </div>
                        </div>

                        <div className="row" >
                            <div className="col-md-4 questionright">
                                <Form.Group controlId="formBasicName">
                                    <Form.Control as="select" value={this.state.questionType} onChange={(evt) => {
                                        this.setState({ questionType: evt.target.value })
                                    }} id="questiontype" onChange={() => this.handleClick()} >
                                        <option id="0">Question Type</option>
                                        <option value="Single Choice" id="1">Single Choice</option>
                                        <option value="Text" id="2"> Text</option>
                                        <option value="Number" id="3">Number</option>
                                        <option value="Location" id="4">Location</option>
                                        <option value="Image" id="5">Image</option>
                                    </Form.Control>
                                </Form.Group>
                            </div>

                            <div className="col-md-8 questionleft">
                                <Form.Group controlId="formBasicName">
                                    <Form.Control type="text" placeholder="Enter Question" value={this.state.question} onChange={(evt) => {
                                        this.setState({ question: evt.target.value })
                                    }} required id="question" />
                                </Form.Group>
                            </div>



                            <div className="col-md-12 questionleft" id="addnew">
                                <InputGroup>
                                    <Form.Control
                                        type="text"
                                        placeholder="Option 1" />
                                    <InputGroup.Prepend>
                                        <InputGroup.Text id="inputGroupPrepend" selected={this.state.option}
                                            onChange={this.handleChange} >  <i className="fa fa-times" aria-hidden="true" onClick={() => this.delete()} ></i> </InputGroup.Text>
                                    </InputGroup.Prepend>
                                </InputGroup>
                            </div>

                        </div>

                    </div>











                    <div className="col-md-12 Question" id="questions">

                        <div className="row Project" onChange={this.onload}>
                            <div className="col-md-12 donequestion" id="donequestion">
                                <img src={require('../../../assets/images/group-8.svg')} alt="" className="pencil" />
                                <p>{this.state.Question}  </p>
                            </div>
                        </div>

                        <div className="row" >
                            <div className="col-md-4 questionright">
                                <Form.Group controlId="formBasicName">
                                    <Form.Control as="select" value={this.state.questionType} onChange={(evt) => {
                                        this.setState({ questionType: evt.target.value })
                                    }} id="questiontype" onChange={() => this.handleClick()} >
                                        <option id="0">Question Type</option>
                                        <option value="Single Choice" id="1">Single Choice</option>
                                        <option value="Text" id="2"> Text</option>
                                        <option value="Number" id="3">Number</option>
                                        <option value="Location" id="4">Location</option>
                                        <option value="Image" id="5">Image</option>
                                    </Form.Control>
                                </Form.Group>
                            </div>

                            <div className="col-md-8 questionleft">
                                <Form.Group controlId="formBasicName">
                                    <Form.Control type="text" placeholder="Enter Question" value={this.state.question} onChange={(evt) => {
                                        this.setState({ question: evt.target.value })
                                    }} required id="question" />
                                </Form.Group>
                            </div>



                            <div className="col-md-12 questionleft" id="addnew">
                                <InputGroup>
                                    <Form.Control
                                        type="text"
                                        placeholder="Option 1" />
                                    <InputGroup.Prepend>
                                        <InputGroup.Text id="inputGroupPrepend" selected={this.state.option}
                                            onChange={this.handleChange} >  <i className="fa fa-times" aria-hidden="true" onClick={() => this.delete()} ></i> </InputGroup.Text>
                                    </InputGroup.Prepend>
                                </InputGroup>
                            </div>

                        </div>

                    </div>





                    <div className="col-md-12 text-center">
                        <Button variant="primary" type="submit" className="addnew" onClick={() => this.addnew()} >
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
    createProject: (v) => dispatch(actions.createProject(v)),
});


export default withRouter(connect(mapStateToProps, mapDispatchToProps)(CreateProject));
