import React, { Component } from 'react';
import './TextType.css';


class TextType extends Component {
    constructor() {
        super();
        this.state = {
            Question: "Name of Beneficiary?",
            Answer: "Lorem ipsum dolor sit amet, consectetur adipiscing ",
        };
    }

    render() {
        return (
            <div className="row Listofdone" >
                <div className="col-md-12 question" >
                    <h2>{this.state.Question}</h2>
                    <p>{this.state.Answer}</p>
                </div>
            </div>
        );
    }
}

export default TextType;