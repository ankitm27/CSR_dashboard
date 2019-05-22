import React, { Component } from 'react';
import './LocationType.css';


class LocationType extends Component {
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

export default LocationType;