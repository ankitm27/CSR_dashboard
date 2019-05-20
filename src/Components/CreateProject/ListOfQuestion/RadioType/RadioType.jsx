import React, { Component } from 'react';
import Form from 'react-bootstrap/Form';

class CheckType extends Component {
    constructor() {
        super();
        this.state = {
            Question: "Lorem ipsum dolor sit amet, consectetur adipiscing ",
            Options: ["Loram", "Loram", "Loram", "Loram", "Loram", "Loram"]
        };
    }

    render() {
        return (
            <div className="row" >
                <div className="col-md-12 question" >
                    <h2>{this.state.Question}</h2>

                    <Form>
                        {this.state.Options.map(type => (
                            <div key={`${type}`} className="mb-3">
                                <Form.Check
                                    custom
                                    inline
                                    name="terms"
                                    type="radio"
                                    label={this.state.Options[0]}
                                />
                            </div>
                        ))}
                    </Form>

                </div>
            </div>
        );
    }
}

export default CheckType;