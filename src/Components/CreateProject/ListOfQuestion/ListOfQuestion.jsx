import React, { Component } from 'react';
import './ListOfQuestion.css';
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
        if(question.questionType === "text"){
            return (
                <div className="col-md-12 questp">
                    <TextType question={question.title} />
                </div>
            )
        }else if(question.questionType === "number"){
            return (
                <div className="col-md-12 questp">
                    <TextType question={question.title} />
                </div>
            )
        }else if(question.questionType === "choice"){
            return (
                <div className="col-md-12 questp">
                    <CheckType question={question.title} options={question.options } />
                </div>
            )
        }else if(question.questionType === "location"){

        }else if(question.questionType === "image"){

        } 
    }

    render() {
        return (
            <div className="row">
                {this.props && this.props.questions && this.props.questions.map((question) => (
                    <div className="col-md-12">
                        <div className="col-md-12"> 
                            {this.checkQuestionComponent.call(this, question)} 
                        </div>
                        <br />
                    </div>
                ))}
                
                
            </div>
        );
    }
}

export default List;