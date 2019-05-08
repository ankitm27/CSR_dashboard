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
            <div className="row tabcontent1">
                <div className="col-md-12">
                    <Table striped size="lg">
                        <tbody>
                            
                            <h1 className="headingRules">hello</h1>
                            <tr>
                                <td className="text-success">Rule 1</td>
                            </tr>
                        </tbody>
                    </Table>
                </div>
            </div>
        );
    }
}

export default Tab1content;