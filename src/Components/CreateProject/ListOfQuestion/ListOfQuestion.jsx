import React, { Component } from 'react';
import './ListOfQuestion.css';
import Form from 'react-bootstrap/Form';
import TextType from "../ListOfQuestion/TextType/TextType";
import CheckType from "./CheckType/CheckType";
import RadioType from "./RadioType/RadioType";

class List extends Component {
    constructor() {
        super();
        this.state = {
        };
    }

    checkQuestionComponent(question){
        // console.log("question",question);
        // console.log("question type",question.questionType);
        if(question.questionType === "text"){
            return (
                <div className="col-md-12">
                    <TextType question={question.title} />
                </div>
            )
        }else if(question.questionType === "number"){
            return (
                <div className="col-md-12">
                    <TextType question={question.title} />
                </div>
            )
        }else if(question.questionType === "choice"){
            return (
                <div className="col-md-12">
                    <CheckType question={question.title} options={question.options } />
                </div>
            )
        }else if(question.questionType === "location"){

        }else if(question.questionType === "image"){

        } 
    }

    render() {
        // console.log("this props quesrtions",this.props.questions);
        return (
            <div className="row">
                {this.props && this.props.questions && this.props.questions.map((question) => (
                    <div className="col-md-12 questionWidth"> 
                        {this.checkQuestionComponent.call(this, question)} 
                        <br />
                    </div>
                ))}
                
                
            </div>
        );
    }
}

export default List;