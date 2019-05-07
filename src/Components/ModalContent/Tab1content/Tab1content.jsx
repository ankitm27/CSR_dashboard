import React, { Component } from 'react';
import './Tab1content.css';
import Table from 'react-bootstrap/Table'


class Tab1content extends Component {
    constructor() {
        super();
        this.state = {
            Image: 'Verified Image',
            Name: 'Verified Image',
            IDProof: 'Duplicate Data',
            Location: 'Unverfied',
            Question1: 'Fraud Data',
        };
    }

    render() {
        console.log("this props1111",this.props);
        return (
            <div className="row tabcontent">
                <div className="col-md-12">
                    <Table striped size="lg">
                        <tbody>
                            <tr>
                                <td className="text-success">Image</td>
                                <td className="text-right"> <span>{this.state.Image}</span></td>
                            </tr>
                            <tr>
                                <td className="text-danger">Name</td>
                                <td className="text-right">{this.state.Image}</td>
                            </tr>
                            <tr>
                                <td className="text-danger">ID Proof</td>
                                <td className="text-right">{this.state.IDProof}</td>
                            </tr>
                            <tr>
                                <td className="text-danger">Location</td>
                                <td className="text-right">{this.state.Location}</td>
                            </tr>
                            <tr>
                                <td className="text-danger">Question 1</td>
                                <td className="text-right">{this.state.Question1}</td>
                            </tr>
                        </tbody>
                    </Table>
                </div>
            </div>
        );
    }
}

export default Tab1content;