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
        alert("hy");
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

                        <div className="row">
                            <div className="col-md-4 questionright">
                                <Form.Group controlId="formBasicName">
                                    <Form.Control as="select" value={this.state.questionType} onChange={(evt) => {
                                        this.setState({ questionType: evt.target.value })
                                    }} id="questiontype" >
                                        <option >Question Type</option>
                                        <option value="Single Choice" onSelect={() => this.handleClick()}>Single Choice</option>
                                        <option value="Text">Text</option>
                                        <option value="Number">Number</option>
                                        <option value="Location">Location</option>
                                        <option value="Image">Image</option>
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
                                            onChange={this.handleChange} >  <i className="fa fa-times" aria-hidden="true"></i> </InputGroup.Text>
                                    </InputGroup.Prepend>
                                </InputGroup>
                            </div>

                        </div>
                    </div>


                    <div className="col-md-12 text-center">
                        <Button variant="primary" type="submit" className="addnew" >
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
