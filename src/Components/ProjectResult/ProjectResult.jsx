import React, { Component } from 'react';
import './ProjectResult.css';
import Table from 'react-bootstrap/Table';
import ModalContent from '../ModalContent/ModalContent';
import { Modal, Button, Header } from 'react-bootstrap';




class ProjectResults extends Component {
    constructor(props, context) {
        super(props, context);
        this.state = {
            Beneficiary: 'Eliza Willis',
            Date: '05 Sep 2019',
            TatalDetail: '20',
            UnverfiedDetail: '19',
            TotalRules: '20',
            UnfollowedRules: '19',
            Risk: 'High',
            Action: 'View  Details',
            show: false,
        };
        this.handleShow = this.handleShow.bind(this);
        this.handleClose = this.handleClose.bind(this);
    }
    handleClose() {
        this.setState({ show: false });
    }
    handleShow() {
        this.setState({ show: true });
    }
    render() {
        return (
            <div className="row ProjectResult">
                <div className="col-md-5">
                    <div className="row">
                        <div className="col-md-12">
                            <p className="chartheading">Beneficiary Details</p>
                        </div>
                        <div className="col-md-12 resultchart"></div>
                    </div>
                </div>
                <div className="col-md-5 offset-md-2">
                    <div className="row">
                        <div className="col-md-12">
                            <p className="chartheading">Rules</p>
                        </div>
                        <div className="col-md-12 resultchart"></div>
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
                            <tr>
                                <td>{this.state.Beneficiary}</td>
                                <td>{this.state.Date}</td>
                                <td>{this.state.TatalDetail}</td>
                                <td>{this.state.UnverfiedDetail}</td>
                                <td>{this.state.TotalRules}</td>
                                <td>{this.state.UnfollowedRules}</td>
                                <td><button className="btn btn-risk">{this.state.Risk}</button></td>
                                <td><a className="action" onClick={this.handleShow}>{this.state.Action}</a></td>
                            </tr>
                        </tbody>
                        <tbody>
                            <tr>
                                <td>{this.state.Beneficiary}</td>
                                <td>{this.state.Date}</td>
                                <td>{this.state.TatalDetail}</td>
                                <td>{this.state.UnverfiedDetail}</td>
                                <td>{this.state.TotalRules}</td>
                                <td>{this.state.UnfollowedRules}</td>
                                <td><button className="btn btn-risk">{this.state.Risk}</button></td>
                                <td><a className="action">{this.state.Action}</a></td>
                            </tr>
                        </tbody>
                    </Table>

                </div>


                <Modal show={this.state.show} onHide={this.handleClose}  size="lg">
                    <Modal.Header closeButton>
                        <ModalContent />
                    </Modal.Header>
                    <Modal.Body>  </Modal.Body>

                </Modal>

            </div>
        );
    }
}

export default ProjectResults;