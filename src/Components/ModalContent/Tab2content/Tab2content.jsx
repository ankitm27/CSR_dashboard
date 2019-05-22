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
        // console.log("this props",this.props);
        // console.log("this props rules",this.props.userDetailes.rules);
        return (
            <div className="row tabcontent1">
                <div className="col-md-12">
                    <Table striped size="lg">
                        <tbody> 
                         {this.props.userDetailes && this.props.userDetailes.rules && this.props.userDetailes.rules.map((rule, index) => (
                            <div key={rule.componentName}>
                                <h1 className="headingRules">{rule.componentName}</h1>
                                <tr>
                                    {rule.rules.map((ruleName,index) => (
                                        <td className="text-success">{ruleName}</td>
                                    ))}
                                </tr>
                            </div>
                        ))}  
                        </tbody>
                    </Table>
                </div>
            </div>
        );
    }
}

export default Tab1content;