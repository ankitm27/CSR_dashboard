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

    async componentDidMount(){
        if(!localStorage.getItem("token")){
            this.props.history.push({
                pathname:'/login',
            });
        }
    }

    render() {
        console.log("this props",this.props);
        return (
            <div className="row tabcontent">
                <div className="col-md-12">
                    <Table striped size="lg">
                        <tbody>
                            <div>
                                <tr>
                                    <td className="text-success">Image</td>
                                    <td className="text-right"> <span>{this.state.Image}</span></td>
                                </tr>
                            </div>
                            <div>
                                <tr>
                                    <td className="text-danger">Name</td>
                                    <td className="text-right">{this.state.Image}</td>
                                </tr>   
                                <span>Reason: Match with Rishika Mehta</span>
                                <i href="#">View Benefitiery Detail</i>
                            </div>
                            <div>
                                <tr>
                                    <td className="text-danger">ID Proof</td>
                                    <td className="text-right">{this.state.IDProof}</td>
                                </tr>
                                <span>Reason: Match with Rishika Mehta</span>
                                <i href="#"></i>
                            </div>
                            <div>
                                <tr>
                                    <td className="text-danger">Location</td>
                                    <td className="text-right">{this.state.Location}</td>
                                </tr>
                                <span>Reason: Match with Rishika Mehta</span>
                                <i href="#">View Benefitiery Detail</i>
                            </div>
                            <div>
                                <tr>
                                    <td className="text-danger">Question 1</td>
                                    <td className="text-right">{this.state.Question1}</td>
                                </tr>
                                <span>Reason: Preferef Time: 10AM - 5PM.</span>
                                <i href="#"></i>
                            </div>
                        </tbody>
                    </Table>
                </div>
            </div>
        );
    }
}

export default Tab1content;