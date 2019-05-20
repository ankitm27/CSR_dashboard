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

    render() {
        console.log("this props quesrtions",this.props.questions);
        return (
            <div className="row Listofdone" >
                {this.props.questions.map((question, index) => (
                    // <p>Hello, {question.title} </p>
                    <div className="col-md-12 ">
                        <TextType />
                    </div>
                ))}
                {/* <div className="col-md-12 ">
                    <TextType />
                </div>
                <div className="col-md-12">
                    <CheckType />
                </div>
                <div className="col-md-12">
                    <RadioType />
                </div> */}
            </div>
        );
    }
}

export default List;