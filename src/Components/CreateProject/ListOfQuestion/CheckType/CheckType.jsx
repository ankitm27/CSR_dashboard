import React, { Component } from 'react';
import Form from 'react-bootstrap/Form';

class CheckType extends Component {
    constructor() {
        super();
    }

    render() {
        return (
            <div className="row" >
                <div className="col-md-12" >
                    <h2>{this.props.question}</h2>

                    <Form>
                        {this.props.options.map(type => (
                            <div key={`${type}`} className="mb-3">
                                <Form.Check
                                    custom
                                    inline
                                    name="terms"
                                    label={type}
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