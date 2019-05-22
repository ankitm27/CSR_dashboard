import React, { Component } from 'react';
import './ImageType.css';


class ImageType extends Component {
    constructor() {
        super();
    }

    render() {
        // console.log("this state question",this.props.question);
        return (
            <div className="row">
                <div className="col-md-12 question">
                    <h2>{this.props.question}</h2>
                    {/* <p>Text</p> */}
                    
                </div>
            </div>
        );
    }
}

export default ImageType;