import React, { Component } from 'react';
import './TextType.css';


class TextType extends Component {
    constructor() {
        super();
    }

    render() {
        // console.log("this state question",this.props.question);
        return (
            <div className="row">
                <div className="col-md-12">
                    <h2>{this.props.question}</h2>
                    <p>Text</p>
                </div>
            </div>
        );
    }
}

export default TextType;