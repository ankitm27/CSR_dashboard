import React, { Component } from 'react';
import './Tab2content.css';
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
        console.log("this props 1212",this.props);
        return (
            <div className="row tabcontent1">
                <div className="col-md-12">
                    <Table striped size="lg">
                        <tbody>
                            <tr>
                                <td className="text-success">Rule 1</td>
                                <td className="text-success">Rule 1</td>
                                <td className="text-success">Rule 1</td>
                                <td className="text-danger">Rule 1</td>
                                <td className="text-danger"></td>
                                <td className="text-danger"></td>
                            </tr>
                            <tr>
                                <td className="text-success">Rule 1</td>
                                <td className="text-success">Rule 1</td>
                                <td className="text-success">Rule 1</td>
                                <td className="text-danger">Rule 1</td>
                                <td className="text-danger"></td>
                                <td className="text-danger"></td>
                            </tr>
                            <tr>
                                <td className="text-success">Rule 1</td>
                                <td className="text-success">Rule 1</td>
                                <td className="text-success">Rule 1</td>
                                <td className="text-danger">Rule 1</td>
                                <td className="text-danger"></td>
                                <td className="text-danger"></td>
                            </tr>
                            <tr>
                                <td className="text-success">Rule 1</td>
                                <td className="text-success">Rule 1</td>
                                <td className="text-success">Rule 1</td>
                                <td className="text-danger">Rule 1</td>
                                <td className="text-danger">Rule 1</td>
                                <td className="text-danger"></td>

                            </tr>
                            <tr>
                                <td className="text-success">Rule 1</td>
                                <td className="text-success">Rule 1</td>
                                <td className="text-success">Rule 1</td>
                                <td className="text-danger">Rule 1</td>
                                <td className="text-danger">Rule 1</td>
                                <td className="text-danger"></td>

                            </tr>
                        </tbody>
                    </Table>
                </div>
            </div>
        );
    }
}

export default Tab1content;