import React, { Component } from 'react';
import './Question.css';
import Multiselect from 'react-widgets/lib/Multiselect';
import { Form, Button } from 'react-bootstrap';
import { connect } from "react-redux";
import actions from "../../../Store/Actions/Index";
import { withRouter } from "react-router";
import 'react-widgets/dist/css/react-widgets.css';

const _  = require('lodash');

class Question extends Component {
    constructor(...args) {
        super(...args);
        this.state = {
            value: [],
            people: [],
            question: null,
            questionType: null,
            option: null,
        };
    }

    handleCreate(name) {
        let { people, value } = this.state;
        let newOption = {
            name,
            id: people ? people.length + 1 : 1
        }
        this.setState({
            value: [...value, newOption],  // select new option
            people: [...people, newOption] // add new option to our dataset
        })
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

    mapTypeWithId(type) {
        if (type == "Single Choice") {
            return "5cdb10909873e634a851b178"
        }else if(type == "Text"){
            return "5cdb10909873e634a851b179"
        }else if(type == "Location"){
            return "5cdb10909873e634a851b17d"
        }else if(type == "Image"){
            return "5cdb10909873e634a851b18a"
        }
    }

    onSubmit = async (evt) => {

        evt.preventDefault();
        const isValid = this.isFormValid();
        let options = _.map(this.state.people,'name');
        let optionObj = {};
        options.forEach((option) => {
            optionObj[option] = option
        });
        // console.log("options",options);
        if (isValid.status) {
            const questionId = this.mapTypeWithId(this.state.questionType)
            const data = {
                question: questionId,
                title: this.state.question,
                max: 100,
                optionValue:options,
                multiple:false
            }
            // console.log("this props projectId",this.props.projectId);
            await this.props.saveQuestion({ _id: this.props.projectId, data: data });
            if (this.props.projects.success) {
                document.getElementById("question").innerHTML = "";
                this.props.history.push({
                    pathname: "/createproject5"
                });
            }
        } else {
            alert("Please provide all the required fields");
        }
    }

    onChange = async(evt) => {
        evt.preventDefault()
        let value;
        if(evt.target.value === "Location"){
            value = "Location"
            document.getElementById("options").style.display = "none"
        }else if(evt.target.value == "Image"){
            value = "Image"
            document.getElementById("options").style.display = "none"
        }else if(evt.target.value == "Text"){
            value = "Text"
            document.getElementById("options").style.display = "none"
        }else if(evt.target.value == "Single Choice"){
            value = "Single Choice"
            document.getElementById("options").style.display = "block"
        }
        this.setState({ questionType: value });
    }

    render() {
        let { value, people } = this.state;
        return (
            < Form onSubmit={this.onSubmit} >
                <div className="row ">
                    <div className="col-md-12 Question">

                        <div className="row" id="questionss">
                            <div className="col-md-4 questionright">
                                <Form.Group controlId="formBasicName">
                                    <Form.Control as="select" value={this.state.questionType}  id="questiontype" 
                                        onChange={this.onChange}>
                                        <option id="0">Question Type</option>
                                        <option value="Single Choice">Single Choice</option>
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

                            <div className="col-md-12" id="options">
                                <Multiselect
                                    value={value}
                                    allowCreate="onFilter"
                                    onCreate={name => this.handleCreate(name)}
                                    onChange={value => this.setState({ value })}
                                    textField="name"
                                    placeholder="Add options"
                                />
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