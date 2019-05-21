import React, { Component } from 'react';
import './ListOfQuestion.css';
import TextType from "../ListOfQuestion/TextType/TextType";
import CheckType from "./CheckType/CheckType";
import RadioType from "./RadioType/RadioType";
import ImageType from "./ImageType/ImageType.jsx";
import LocationType from "./LocationType/LocationType.jsx";
import FileType from "./FileType/FileType.jsx";


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
            return (
                <div className="col-md-12 questp">
                    <LocationType question={question.title} />
                </div>
            )
        }else if(question.questionType === "image"){
            return (
                <div className="col-md-12 questp">
                    <ImageType question={question.title} />
                </div>
            )
        }else if (question.questionType === "file"){
            return (
                <div className="col-md-12 questp">
                    <FileType question={question.title} />
                </div>
            )
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