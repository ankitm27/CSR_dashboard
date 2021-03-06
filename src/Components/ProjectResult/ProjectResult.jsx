import React, { Component } from 'react';
import './ProjectResult.css';
import Table from 'react-bootstrap/Table';
import ModalContent from '../ModalContent/ModalContent';
import { Modal } from 'react-bootstrap';
import Pie from '../PieChart/PieChart';

import { connect } from "react-redux";
import actions from "../../Store/Actions/Index";
import { withRouter } from "react-router";
import { tsObjectKeyword } from '@babel/types';
import Moment from 'react-moment';

const _ = require('lodash');

class ProjectResults extends Component {
    constructor(props, context) {
        super(props, context);
        this.state = {
            show: false,
            selectedUser: null
        };

        this.data = [{
            name: { data: null},
            date: null,
            totalDetail: null,
            unverifiedDetail: null,
            totalRules: null,
            unfollowedRules: null,
            risk: null,
            Action: "View Details",
            _id: null
        }];    
        
        this.users=[]


        this.handleShow = this.handleShow.bind(this);
        this.handleClose = this.handleClose.bind(this);
    }
    handleClose() {
        this.setState({ show: false });
    }

    handleShow(data) {
        this.setState({ show: true });
        this.setState({ selectedUser: data });
        const userDetailes = _.find(this.data, { _id: data });
        this.setState({ userDetailes: userDetailes });
    }

    async componentDidMount() {
        if (this.props.location.state && this.props.location.state._id) {
            await this.props.projectDetails({ _id: this.props.location.state._id });
            this.data = this.props.project.beneficiaries;
            this.setState({
                data: this.props.project.beneficiaries
            });
        } else {
            this.props.history.push({
                pathname: '/',
            });
        }
    }

    render() {
        return (
            <div className="row ProjectResult">
                <div className="col-md-5">
                    <div className="row">
                        <div className="col-md-12">
                            <p className="chartheading">Beneficiary Details</p>
                        </div>
                        <div className="col-md-12 resultchart">
                            <Pie totalGood={this.props.project.usersGood} totalAverage={this.props.project.usersRevised} totalPoor={this.props.project.usersFraud} />
                        </div>
                    </div>
                </div>
                <div className="col-md-5 offset-md-2">
                    <div className="row">
                        <div className="col-md-12">
                            <p className="chartheading">Rules</p>
                        </div>
                        <div className="col-md-12 resultchart">
                            <Pie totalGood={this.props.project.rulesGood} totalAverage={this.props.project.rulesRevised} totalPoor={this.props.project.rulesFraud} />
                        </div>
                    </div>
                </div>


                <div className="col-md-12 resulttable">
                    <Table  >
                        <thead>
                            <tr>
                                <th>Beneficiary</th>
                                <th>Date</th>
                                <th>Total Detail</th>
                                <th>Unverfied Detail</th>
                                <th>Total Rules</th>
                                <th>Unfollowed Rules</th>
                                <th>Risk</th>
                                <th>Action</th>
                            </tr>
                        </thead>
                        <tbody>
                            {this.data.map((dataObj,i) =>
                                <tr key={dataObj._id} className="tableContentText">
                                {
                                    dataObj.name.data1 === undefined? <td>User {i+1}</td> : <td>{dataObj.name.data}</td>
                                }
                                    <td><Moment format="D MMM YYYY">{dataObj.date}</Moment></td>
                                    <td>{dataObj.totalDetail}</td>
                                    <td>{dataObj.unverifiedDetail}</td>
                                    <td>{dataObj.totalRules}</td>
                                    <td>{dataObj.unfollowedRules}</td>
                                    <td><button className="btn btn-risk">{dataObj.risk}</button></td>
                                    <td><a href className="action" onClick={() => this.handleShow(dataObj._id)}>View Details</a></td>
                                </tr>
                            )}
                        </tbody>
                    </Table>

                </div>


                <Modal show={this.state.show} onHide={this.handleClose} size="lg">
                    <Modal.Header closeButton>
                        {/* <ModalContent selectedUser={this.state.selectedUser} userDetailes={this.state.userDetailes} /> */}
                    </Modal.Header>
                    <Modal.Body>  
                        <ModalContent selectedUser={this.state.selectedUser} userDetailes={this.state.userDetailes} />
                    </Modal.Body>

                </Modal>

            </div>
        );
    }
}



function mapStateToProps(state) {
    return {
        project: state.Projects
    }
}

const mapDispatchToProps = dispatch => ({
    projectDetails: (v) => dispatch(actions.projectDetails(v)),
});


export default withRouter(connect(mapStateToProps, mapDispatchToProps)(ProjectResults));
