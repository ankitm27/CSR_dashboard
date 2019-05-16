import React, { Component } from 'react';
import './ListOfQuestion.css';
import Form from 'react-bootstrap/Form';

class List extends Component {
    constructor() {
        super();
        this.state = {
            Question: "Name of Beneficiary?",
            Question1: "Lorem ipsum dolor sit amet, consectetur adipiscing ",
            QuestionType: "Enter Answer",
            Options: ["Lorem ipsum", "Lorem ipsum", "Lorem ipsum", "Lorem ipsum", "Lorem ipsum", "Lorem ipsum"]
        };
    }

    render() {
        return (
            <div className="row Listofdone" >
                <div className="col-md-12 question" >
                    <h2>{this.state.Question}</h2>
                    <p>{this.state.QuestionType}</p>
                </div>

                <div className="col-md-12 question" >
                    <h2>{this.state.Question1}</h2>
                    <div className="mb-3">
                        <Form>
                            {this.state.Options.map(type => (
                                <div key={`${type}`} className="mb-3">
                                    <Form.Check
                                        custom
                                        inline
                                        name="terms"
                                        label={this.state.Options[0]}
                                    />
                                </div>
                            ))}
                        </Form>
                    </div>
                </div>

                <div className="col-md-12 question" >
                    <h2>{this.state.Question}</h2>
                    <p>{this.state.QuestionType}</p>
                </div>

                <div className="col-md-12 question" >
                    <h2>{this.state.Question}</h2>
                    <p>{this.state.QuestionType}</p>
                </div>

            </div>
        );
    }
}

export default List;